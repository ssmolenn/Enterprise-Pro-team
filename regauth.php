<?php
//Creates a session.
session_start();
//Connects to database
$link = mysqli_connect("localhost", "root", "", "usernames");

//Checks if the 'firstname','lastname','email' and 'password' have been posted from the register page
if (
	isset($_POST['firstname']) && isset($_POST['lastname'])
	&& isset($_POST['maile']) && isset($_POST['password'])
) {

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

	//Runs the validate method for the posted 'firstname', 'lastname','email' and 'password'
	$firstn = validate($_POST['firstname']);
	$lastn = validate($_POST['lastname']);
	$email = validate($_POST['maile']);
	$passw = validate($_POST['password']);


	//Redirects user to an error page if any of the details are empty
	if (empty($firstn)) {
		header("Location: http://localhost/website/fail.html");
		exit();
	} else if (empty($lastn)) {
		header("Location: http://localhost/website/fail.html");
		exit();
	} else if (empty($email)) {
		header("Location: http://localhost/website/fail.html");
		exit();
	} else if (empty($passw)) {
		header("Location: http://localhost/website/fail.html");
		exit();
	} else {
		//A select query which chceks for users whith the same email
		$sqll = "SELECT * FROM usernames WHERE Email='$email'";
		//Runs the query
		$result = mysqli_query($link, $sqll);

		//Checks if there is a result 
		if (mysqli_num_rows($result) > 0) {
			$row = mysqli_fetch_assoc($result);
			//If the email found is identical to the email entered, the user is directed to the appropriate error page
			if ($row['Email'] === $email) {
				header("Location: fail.html");
			}
		} else {
			//If no result is found, the details are added to their appropriate columns of the usernames database
			$sql = "INSERT INTO usernames (First_name, Last_name, Email, Password) VALUES ('$firstn', '$lastn', '$email','$passw')";
			//Checks if the query is complete
			if (mysqli_query($link, $sql)) {
				//If so, displays a message and redirects the user to the login page
				echo "Records added successfully.";
				header("Location: success.html");
				exit();
			} else {
				//Shows the error on the page if unsuccessful
				echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
				exit();
			}
		}
	}
	//If details are unposted, it directs the user to the appropriate error page
} else {
	header("Location: fail.html");
	exit();
}
