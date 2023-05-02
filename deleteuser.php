<?php   
//Creates a connection with the SQL database
$link = mysqli_connect("localhost", "root", "", "usernames");

//Checks if 'First_Name' has been posted successfully
 if (isset($_GET['Email'])) {  
      //If so, it is made into a local variable to be manipulated easier.
      $id = $_GET['Email']; 
      //Creates a Delete query where anything with the same email is deleted
      $query = "DELETE FROM usernames WHERE Email ='$id'";
      //Runs the query
      $run = mysqli_query($link,$query); 
      //Checks if the query has been ran. 
      if ($run) {  
           //If so, redirects the admin back to the homepage
           header('location:adminhome.php');  
      }else{  
           //If not, states the error
           echo "Error: ".mysqli_error($link);  
      }  
 }
