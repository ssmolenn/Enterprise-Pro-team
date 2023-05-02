<?php
//Creates a session.
session_start();
//Includes the database connection file
include "connectserver.php";

//Checks if the admin password has been posted from the admin login page
if (isset($_POST['password'])) {

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

	//Runs the validate method for the posted 'password'
	$pass = validate($_POST['password']);

	//Redirects user to an error page if the details are empty
	if (empty($pass)) {
		header("Location: http://localhost/website/ERRORadmin.html");
		exit();
	} else {
		//Sets a query to check whether the posted input is the same as the password
		$sql = "SELECT * FROM admins WHERE Password='$pass'";
		//Performs query on database
		$result = mysqli_query($conn, $sql);
		//If statement checks if a row is found that fits the query
		if (mysqli_num_rows($result) === 1) {
			//If row is found, it checks the result and checks the if statement checks
			// against the input to see if they're identical.
			$row = mysqli_fetch_assoc($result);
			if ($row['Password'] === $pass) {
				//If identical, the user is redirected to the home page and a session is started
				$_SESSION['Password'] = $row['Password'];
				header("Location: adminhome.php");
				exit();
			} else {
				//If not identical, the user is directed to the appropriate error page
				header("Location: http://localhost/website/ERRORadmin.html");
				exit();
			}
		} else {
			//If a result is not found from the query, the user is redirected to the appropriate error page
			header("Location: http://localhost/website/ERRORadmin.html");
			exit();
		}
	}
} else {
	//If password not posted, the user is redirected to the appropriate error page.
	header("Location: ERRORadmin.html");
	exit();
}
