let emailfield = document.getElementsByName("emailfield");
let userfield = document.getElementsByName("userfield");
let pwdfield = document.getElementsByName("pwdfield");
let namefield = document.getElementsByName("namefield")
let alertid = document.getElementById("alert");

let alertmessage = ["Please enter a Username.", "Please enter an Name/Nickname.", "Please enter an email.", "Please enter a password.", "Please enter a valid email.", "Please enter a password with at least 8 characters."];

async function signup() {
    emailstring = emailfield[0].value;
    pwdstring = pwdfield[0].value;
    if (userfield[0].value == "") {
        alertid.innerHTML = alertmessage[0];
        alertid.classList.remove('hide');
    }
    else if (namefield[0].value == "") {
        alertid.innerHTML = alertmessage[1];
        alertid.classList.remove('hide');
    }
    else if (emailfield[0].value == "") {
        alertid.innerHTML = alertmessage[2];
        alertid.classList.remove('hide');
    }
    else if (pwdfield[0].value == "") {
        alertid.innerHTML = alertmessage[3];
        alertid.classList.remove('hide');
    }
    else if (emailstring.indexOf("@") == -1 || emailstring.indexOf(".") == -1) {
        alertid.innerHTML = alertmessage[4];
        alertid.classList.remove('hide');
    }
    else if (pwdstring.length < 8) {
        alertid.innerHTML = alertmessage[5];
        alertid.classList.remove('hide');
    }
    else {
        alertid.classList.add('hide');
        const { data, error } = await _supabase.auth.signUp({
            email: emailfield[0].value,
            password: pwdfield[0].value,
            options: {
                data: {
                    username: userfield[0].value,
                    name: namefield[0].value
                }
            }
        })
        //window.location.assign("/");
    }
}

async function login() {
    emailstring = emailfield[1].value;
    pwdstring = pwdfield[1].value;
    if (emailfield[1].value == "") {
        alertid.innerHTML = alertmessage[2];
        alertid.classList.remove('hide');
    }
    else if (pwdfield[1].value == "") {
        alertid.innerHTML = alertmessage[3];
        alertid.classList.remove('hide');
    }
    else if (emailstring.indexOf("@") == -1 || emailstring.indexOf(".") == -1) {
        alertid.innerHTML = alertmessage[4];
        alertid.classList.remove('hide');
    }
    else if (pwdstring.length < 8) {
        alertid.innerHTML = alertmessage[5];
        alertid.classList.remove('hide');
    }
    else {
        alertid.classList.add('hide');
        const { data, error } = await _supabase.auth.signInWithPassword({
            email: emailfield[1].value,
            password: pwdfield[1].value,
        })
        if (localStorage.getItem('redirectpage') == 'main') {
            localStorage.setItem('redirectpage', '');
            window.location.assign("../");
        } else if (localStorage.getItem('redirectpage') == 'chat') {
            localStorage.setItem('redirectpage', '');
            window.location.assign("../chat");
        } else if (localStorage.getItem('redirectpage') == 'news') {
            localStorage.setItem('redirectpage', '');
            window.location.assign("../news");
        } else if (localStorage.getItem('redirectpage') == 'about') {
            localStorage.setItem('redirectpage', '');
            window.location.assign("../about");
        } else {
            window.location.assign("../");
        }
        
    }
}

function switchhidden(page) {
    if (page == "signup") { //switches to Login page
        document.getElementById("loginform").classList.toggle('hide');
        document.getElementById("loginheader").classList.toggle('hide');
        document.getElementById("signupform").classList.toggle('hide');
        document.getElementById("signupheader").classList.toggle('hide');
    }
    if (page == "login") { //switches to Signup page
        document.getElementById("loginform").classList.toggle('hide');
        document.getElementById("loginheader").classList.toggle('hide');
        document.getElementById("signupform").classList.toggle('hide');
        document.getElementById("signupheader").classList.toggle('hide');
    }
}

//iff the data doesnt exist 
if (localStorage.getItem('typeofpage') == null) {
    localStorage.setItem('typeofpage', 'login');
}
if (localStorage.getItem('typeofpage') == 'login') {
    document.getElementById("signupform").classList.add('hide');
    document.getElementById("signupheader").classList.add('hide');
    document.getElementById("TitleElement").innerHTML = "Login";
}
if (localStorage.getItem('typeofpage') == 'signup') {
    document.getElementById("loginform").classList.add('hide');
    document.getElementById("loginheader").classList.add('hide');
    document.getElementById("TitleElement").innerHTML = "Signup";
}
