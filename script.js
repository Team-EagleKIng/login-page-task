function triggerSignIn() {
    $("#signInButton").click();
}
 
function signin(form) {
    $.ajax({
        type : 'POST',
        async : false,
        contentType : 'application/json; charset=utf-8',
        url : 'https://teameagle123.herokuapp.com/signin',
        data : JSON.stringify({username : form.username.value, password : form.password.value}),
        success : function(data) {
            alert('Logged In successfully');
            console.log('response is ' +  JSON.stringify(data))
        },

        error : function(error) {
            alert('User not found');
            console.log('response is ' +  JSON.stringify(error))
        }

    })
}


