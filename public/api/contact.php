<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No data provided']);
    exit;
}

$name = htmlspecialchars($data['name'] ?? 'Website Visitor');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($data['subject'] ?? 'NDR Website Inquiry');
$message = htmlspecialchars($data['message'] ?? '');

$to = 'info@nightofdivinereversal.org';
$headers = "From: NDR Portal <info@nightofdivinereversal.org>\r\n" .
           "Reply-To: {$email}\r\n" .
           "MIME-Version: 1.0\r\n" .
           "Content-Type: text/html; charset=UTF-8\r\n";

$body = "
<div style='font-family: Arial, sans-serif; background-color: #0b0f19; color: #f3f4f6; padding: 24px; border-radius: 8px; max-width: 600px; border: 1px solid #f59e0b;'>
    <h2 style='color: #f59e0b; margin-top: 0;'>📬 New Contact Form Message</h2>
    <p><strong>Sender:</strong> {$name}</p>
    <p><strong>Email:</strong> <a href='mailto:{$email}' style='color: #60a5fa;'>{$email}</a></p>
    <p><strong>Subject:</strong> {$subject}</p>
    <hr style='border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 16px 0;' />
    <p><strong>Message:</strong></p>
    <p style='line-height: 1.6; white-space: pre-wrap;'>{$message}</p>
</div>
";

$mailSent = @mail($to, "[NDR Inquiry] " . $subject, $body, $headers, "-f info@nightofdivinereversal.org");

echo json_encode(['success' => true, 'mailSent' => $mailSent]);
