<?php
// Get form data
$name = isset($_POST['name']) ? $_POST['name'] : '';
$age = isset($_POST['age']) ? $_POST['age'] : '';
$sex = isset($_POST['sex']) ? $_POST['sex'] : '';
$mobile = isset($_POST['mobile']) ? $_POST['mobile'] : '';
$city = isset($_POST['city']) ? $_POST['city'] : '';

// Print the submitted data
echo "Data received successfully:<br>";
echo "Name: $name<br>";
echo "Age: $age<br>";
echo "Sex: $sex<br>";
echo "Mobile: $mobile<br>";
echo "City: $city<br>";
?>
