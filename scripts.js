function triggerSignUp() {
    $("#signUpButton").click();
}
    
function signUpUser(form) {

    var signUp = true;
    var error_message  = error_message = "";
    if (form.username.value.length<3) {
             signUp =false; error_message  =  "username cannot be less than 4 characters";
    } 
    if (form.email.value.length<10 || form.email.value.indexOf("@")<0) {
             signUp =false; error_message  = "Invalid Email address";
    }
    if (form.password.value.length<8) {
             signUp =false; error_message  = "password cannot be less than 8 characters";
    }
    if (form.confirm.value== form.password.value) {
             signUp =false; error_message  = "Password Mismatch";
    }

    $("#error_message").html(error_message);
            
}

function signUp(form) {
    $.ajax({
        type : 'POST',
        async : false,
        contentType : 'application/json; charset=utf-8',
        url : 'https://teameagle123.herokuapp.com/signup',
        data : JSON.stringify({username : form.username.value,
             email : form.email.value, 
             password : form.password.value, 
             confirm : form.confirm.value}),
        success : function(data) {
            alert('Signed Up successfully');
            console.log('response ist' +  JSON.stringify(data))
        },
            
        error : function(error) {
            alert('check your input');
            console.log('response is ' +  JSON.stringify(error))
        }

    })
}
