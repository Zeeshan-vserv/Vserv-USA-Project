<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "vservusa"; 

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $jobTitle = $data['jobTitle'];
    $company = $data['company'];
    $country = $data['country'];
    $message = $data['message'];

    if (empty($firstName) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Required fields are missing"]);
        exit();
    }

    $stmt = $conn->prepare("INSERT INTO contact_form (first_name, last_name, email, job_title, company, country, message) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $firstName, $lastName, $email, $jobTitle, $company, $country, $message);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Form submitted successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to submit form"]);
    }

    $stmt->close();
    $conn->close();
}
?>
