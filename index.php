<script>
    function validation(){
        var email = document.forms["login"]["email"].value;
        var password = document.forms["login"]["password"].value;

        if(email == ""){
            alert("email not valid");
            return false
        }
        if(password == ""){
            alert("password not valid");
            return false
        }
    }
    </script>