async function logout(){
    await _supabase.auth.signOut();
    
}


async function newload(){
    
 if (localStorage.getItem('sb-nehibeqlnydjxvhpcfml-auth-token')) {
    document.getElementById("signupbutton").classList.add('hide');
    document.getElementById("loginbutton").classList.add('hide');
    document.getElementById("logoutbutton").classList.remove('hide');
    document.getElementById("mainhead").style.left = "56px";
 }
}

newload();