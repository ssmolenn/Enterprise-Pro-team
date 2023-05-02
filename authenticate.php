<?php
//Starts session
session_start();
//Includes the database connection file, 
include "connectserver.php";
//Connects to the database
$link = mysqli_connect("35.189.98.101", "root", "admin", "data");

//Checks if the details from the index(login) page have been posted to the script
if (isset($_POST['email']) && isset($_POST['password'])) {

	//Function to check the sent variable information
	function validate($data)
	{
		//Removes unnecessary space and characters
		$data = trim($data);
		//Removes quotes from the string if present
		$data = stripslashes($data);
		//Removes any characters preventing the code from being parsed
		$data = htmlspecialchars($data);
		//Returns the result back to the caller
		return $data;
	}
	//Runs the validate method for the posted 'email'
	$maile = validate($_POST['email']);
	//Runs the validate method for the posted 'password'
	$pass = validate($_POST['password']);

	//Redirects user to an error page if the details are empty (same for second one)
	if (empty($maile)) {
		header("Location: http://localhost/website/ERROR.html");
		exit();
	} else if (empty($pass)) {
		header("Location: http://localhost/website/ERROR.html");
		exit();
	} else {
		//Sets a query to check whether the posted inputs is the same as the email and password of at least 1 row
		$sql = "SELECT * FROM users WHERE Email='$maile' AND Password='$pass'";
		//Performs query on database
		$result = mysqli_query($conn, $sql);
		//If statement checks if a row is found that fits the query
		if (mysqli_num_rows($result) === 1) {
			//If row is found, it checks the result and checks the if statement checks
			// against the inputs to see if they're identical.
			$row = mysqli_fetch_assoc($result);
			if ($row['Email'] === $maile && $row['Password'] === $pass) {
				//If identical, the user is redirected to the home page and a session is started
				$_SESSION['First_Name'] = $row['First_Name'];
				$_SESSION['Last_Name'] = $row['Last_Name'];
				$_SESSION['Email'] = $row['Email'];
				$_SESSION['Password'] = $row['Password'];

				$run = "DELETE FROM basket";
				$resultagain = mysqli_query($link, $run);
				header("Location: homepage.php");
				exit();
			} else {
				//If not identical, the user is directed to the appropriate error page
				header("Location: http://localhost/website/ERROR.html");
				exit();
			}
		} else {
			//If a result is not found from the query, the user is redirected to the appropriate error page
			header("Location: http://localhost/website/ERROR.html");
			exit();
		}
	}
} else {
	//If password not posted, the user is redirected to the appropriate error page.
	header("Location: index.html");
	exit();
}
