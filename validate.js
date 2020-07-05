function validate(){
    var username=document.getElementById("usname");
    var password=document.getElementById("pass"); 
    if(username.value.trim()=="" && password.value.trim()=="")
    {
        //alert("Enter your username and password");
        username.style.border="solid 3px red";
        password.style.border="solid 3px red";
        document.getElementById("valid").style.visibility="visible";
        document.getElementById("valid2").style.visibility="visible";
        return false;
    }
    else if(username.value.trim()=="" ){
        username.style.border="solid 3px red";
        document.getElementById("valid").style.visibility="visible";
        //alert("Enter username");
        return false;

    }
    else if(password.value.trim()=="")
    {
        password.style.border="solid 3px red";
        document.getElementById("valid2").style.visibility="visible";
        //alert("Enter password");
        return false;
    }
    else if(password.value.length<5 && password.value!="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    {
        password.style.border="solid 3px green";
        document.getElementById("valid2").style.visibility="visible";
        document.getElementById("valid3").style.visibility="visible";
        //alert("Password is too short");
        return false;
    }
    else{
        true;
    }
    }