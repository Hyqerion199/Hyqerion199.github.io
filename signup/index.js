let emailfield = document.getElementsByName("emailfield");
let userfield = document.getElementsByName("userfield");
let pwdfield = document.getElementsByName("pwdfield");
let namefield = document.getElementsByName("namefield")

async function signup(){
    if (userfield[0].value == ""){
        alert("Please enter a Username");
    }
    else if (namefield[0].value == ""){
        alert("Please enter an Name/Nickname")
    }
    else if (emailfield[0].value == ""){
        alert("Please enter an email");
    }
    else if (pwdfield[0].value == ""){
        alert("Please enter a password");
    }
    else {
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
    window.location.assign("/");
    }
}

async function login(){
    if (emailfield[1].value == ""){
        alert("Please enter an email");
    }
    else if (pwdfield[1].value == ""){
        alert("Please enter a password");
    }
    else {
        const { data, error } = await _supabase.auth.signInWithPassword({
            email: emailfield[1].value,
            password: pwdfield[1].value,
          })    
          window.location.assign("/");
        }
}

function switchhidden(page){
    if (page == "signup"){ //switches to Login page
        document.getElementById("loginform").classList.toggle('hide');
        document.getElementById("loginheader").classList.toggle('hide');
        document.getElementById("signupform").classList.toggle('hide');
        document.getElementById("signupheader").classList.toggle('hide');
    }
    if (page == "login"){ //switches to Signup page
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
    document.getElementById("TitleElement").innerHTML = "Login";
}
if (localStorage.getItem('typeofpage') == 'signup'){
    document.getElementById("loginform").classList.add('hide');
    document.getElementById("loginheader").classList.add('hide');
    document.getElementById("TitleElement").innerHTML = "Signup";
}
