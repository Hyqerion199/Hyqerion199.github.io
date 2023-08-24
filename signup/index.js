let emailfield = document.getElementsByName("emailfield");
let userfield = document.getElementsByName("userfield");
let pwdfield = document.getElementsByName("pwdfield");

function signup(){
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

function login(){
    if (emailfield[0].value == ""){
        alert("Please enter an email");
    }
    if (pwdfield[0].value == ""){
        alert("Please enter a password");
    }
    else {
    alert(`Your email is '${emailfield[0].value}' and your password is '${pwdfield[0].value}'`);
    }
}

function switchhidden(page){
    if (page == "signup"){
        document.getElementById("loginform").classList.toggle('hide');
        document.getElementById("signupform").classList.toggle('hide');
        localStorage.setItem('typeofpage', 'login');
    }
    if (page == "login"){
        document.getElementById("loginform").classList.toggle('hide');
        document.getElementById("signupform").classList.toggle('hide');
        localStorage.setItem('typeofpage', 'signup');
    }
}

//iff the data doesnt exist 
if (localStorage.getItem('typeofpage') == null){
    localStorage.setItem('typeofpage', 'signup');
}
if (localStorage.getItem('typeofpage') == 'login'){
    document.getElementById("loginform").classList.remove('hide');
    document.getElementById("signupform").classList.add('hide');
}