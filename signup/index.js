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
        document.getElementById("loginheader").classList.toggle('hide');
        document.getElementById("signupform").classList.toggle('hide');
        document.getElementById("signupheader").classList.toggle('hide');
        
    }
    if (page == "login"){
        document.getElementById("loginform").classList.toggle('hide');
        document.getElementById("loginheader").classList.toggle('hide');
        document.getElementById("signupform").classList.toggle('hide');
        document.getElementById("signupheader").classList.toggle('hide');
        
    }
}

//iff the data doesnt exist 
if (localStorage.getItem('typeofpage') == null){
    localStorage.setItem('typeofpage', 'login');
}
if (localStorage.getItem('typeofpage') == 'login'){
    document.getElementById("signupform").classList.add('hide');
    document.getElementById("signupheader").classList.add('hide');
}
if (localStorage.getItem('typeofpage') == 'signup'){
    document.getElementById("loginform").classList.add('hide');
    document.getElementById("loginheader").classList.add('hide');
}