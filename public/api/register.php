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

$ticketId = htmlspecialchars($data['ticketId'] ?? ('NDR13-' . rand(100000, 999999)));
$fullName = htmlspecialchars($data['fullName'] ?? 'Attendee');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone'] ?? '');
$city = htmlspecialchars($data['city'] ?? '');
$mode = htmlspecialchars($data['mode'] ?? 'virtual');
$isFirstTime = htmlspecialchars($data['isFirstTime'] ?? 'yes');
$prayerLine = !empty($data['prayerLineInterest']) ? 'Yes' : 'No';
$prayerRequest = htmlspecialchars($data['prayerRequest'] ?? 'None submitted');

$to = 'info@nightofdivinereversal.org';
$headers = "From: NDR Registration <info@nightofdivinereversal.org>\r\n" .
           "Reply-To: {$email}\r\n" .
           "MIME-Version: 1.0\r\n" .
           "Content-Type: text/html; charset=UTF-8\r\n";

$body = "
<div style='font-family: Arial, sans-serif; background-color: #0b0f19; color: #f3f4f6; padding: 24px; border-radius: 8px; max-width: 600px; border: 1px solid #f59e0b;'>
    <h2 style='color: #f59e0b; margin-top: 0;'>🎉 New NDR Attendee Registration</h2>
    <p><strong>Ticket ID:</strong> <span style='color: #fbbf24; font-weight: bold;'>{$ticketId}</span></p>
    <p><strong>Full Name:</strong> {$fullName}</p>
    <p><strong>Email:</strong> <a href='mailto:{$email}' style='color: #60a5fa;'>{$email}</a></p>
    <p><strong>Phone:</strong> {$phone}</p>
    <p><strong>Location:</strong> {$city}</p>
    <p><strong>Mode:</strong> " . strtoupper($mode) . "</p>
    <p><strong>First Time:</strong> {$isFirstTime}</p>
    <p><strong>Prayer Line Interest:</strong> {$prayerLine}</p>
    <hr style='border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 16px 0;' />
    <p><strong>Prayer Request:</strong></p>
    <p style='line-height: 1.6; white-space: pre-wrap;'>{$prayerRequest}</p>
</div>
";

$mailSent = @mail($to, "[NDR Registration] {$fullName} ({$ticketId})", $body, $headers, "-f info@nightofdivinereversal.org");

if (!empty($email)) {
    $attendeeHeaders = "From: Night of Divine Reversal <info@nightofdivinereversal.org>\r\n" .
                       "Reply-To: info@nightofdivinereversal.org\r\n" .
                       "MIME-Version: 1.0\r\n" .
                       "Content-Type: text/html; charset=UTF-8\r\n";
    $attendeeBody = "
    <div style='font-family: Arial, sans-serif; background-color: #060913; color: #f3f4f6; padding: 32px 20px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #f59e0b;'>
      <div style='text-align: center; margin-bottom: 24px;'>
        <h1 style='color: #ffffff; margin: 12px 0 6px 0; font-size: 24px;'>Night of Divine Reversal</h1>
        <p style='color: #9ca3af; margin: 0; font-size: 14px;'>The Ark of Light for All Nations</p>
      </div>
      <div style='background: rgba(17, 24, 39, 0.7); border: 1px solid #f59e0b; border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 24px;'>
        <div style='font-size: 12px; color: #9ca3af; text-transform: uppercase;'>Your Attendee E-Pass Number</div>
        <div style='font-size: 28px; font-weight: 800; color: #fbbf24; margin: 8px 0;'>{$ticketId}</div>
        <div style='font-size: 13px; color: #d1d5db;'>Registered to: <strong>{$fullName}</strong> (" . strtoupper($mode) . " ACCESS)</div>
      </div>
      <p>Dear <strong>{$fullName}</strong>,</p>
      <p>Your registration for the <strong>Night of Divine Reversal</strong> is confirmed!</p>
      <p>📅 <strong>Date:</strong> Friday, October 2, 2026<br/>⏰ <strong>Time:</strong> 10:00 PM GMT+1<br/>📍 <strong>Access:</strong> " . ($mode === "physical" ? "The Ark of Light for All Nations, Alausa, Ikeja, Lagos" : "Global Live Broadcast (YouTube & Facebook Live)") . "</p>
      <p style='margin-top: 20px;'><a href='https://www.youtube.com/@isaiahmacwealth' style='background: #dc2626; color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold;'>📺 Watch on YouTube</a></p>
    </div>
    ";
    @mail($email, "Your NDR E-Pass: {$ticketId} - Night of Divine Reversal", $attendeeBody, $attendeeHeaders, "-f info@nightofdivinereversal.org");
}

echo json_encode(['success' => true, 'ticketId' => $ticketId, 'mailSent' => $mailSent]);
