function validate(){
    var username=document.getElementById("usname");
    var password=document.getElementById("pass"); 
    var email=document.getElementById("e-mail");
    var address=document.getElementById("address"); 
    var mobile=document.getElementById("mobile"); 
    var aggrement=document.getElementById("aggrement");
    var mailregex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var nameregex = /^[a-zA-Z\-]+$/;
    var passregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mobileregex=/^[0]?[789]\d{9}$/;
    if(username.value.trim()=="" && password.value.trim()=="" && email.value.trim()=="" && address.value.trim()=="" && mobile.value.trim()=="")
    {
        //alert("Enter your username and password");
        username.style.border="solid 3px red";
        password.style.border="solid 3px red";
        email.style.border="solid 3px red";
        address.style.border="solid 3px red";
        mobile.style.border="solid 3px red";
        document.getElementById("valid").style.visibility="visible";
        document.getElementById("valid2").style.visibility="visible";
        document.getElementById("valid4").style.visibility="visible";
        document.getElementById("valid5").style.visibility="visible";
        document.getElementById("valid7").style.visibility="visible";
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
    else if(email.value.trim()=="")
    {
        email.style.border="solid 3px red";
        document.getElementById("valid4").style.visibility="visible";
        //alert("Enter password");
        return false;
    }
    else if(address.value.trim()=="")
    {
        address.style.border="solid 3px red";
        document.getElementById("valid5").style.visibility="visible";
        //alert("Enter password");
        return false;
    }
    else if(mobile.value.trim()=="")
    {
        mobile.style.border="solid 3px red";
        document.getElementById("valid7").style.visibility="visible";
        //alert("Enter password");
        return false;
    }
    else if(aggrement.checked==false)
    {
        return false;
    }
    else if(!passregex.test(password.value))
    {
        password.style.border="solid 3px red";
        //document.getElementById("valid6").style.visibility="visible";
        return false;
        
    }
    else if(!mailregex.test(email.value))
    {
        email.style.border="solid 3px red";
        //document.getElementById("valid6").style.visibility="visible";
        return false;
        
    }
    else if(!nameregex.test(username.value))
    {
        username.style.border="solid 3px red";
        //document.getElementById("valid6").style.visibility="visible";
        return false;
        
    }
    else if(!mobileregex.test(mobile.value))
    {
        mobile.style.border="solid 3px red";
        //document.getElementById("valid6").style.visibility="visible";
        return false;
        
    }
    else{
        true;
    }
    }