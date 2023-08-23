let emailfield = document.getElementsByName("emailfield");
let userfield = document.getElementsByName("userfield");
let pwdfield = document.getElementsByName("pwdfield");

function test(){
    if (emailfield[0].value == ""){
        alert("Please enter an email");
    }
    if (userfield[0].value == ""){
        alert("Please enter a Username");
    }
    if (pwdfield[0].value == ""){
        alert("Please enter a password");
    }
    else {
    alert(`Your email is '${emailfield[0].value}' your username is '${userfield[0].value}' and your password is '${pwdfield[0].value}'`);
    }
}