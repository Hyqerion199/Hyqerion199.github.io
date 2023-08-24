async function newload(){
    
    if (localStorage.getItem('sb-nehibeqlnydjxvhpcfml-auth-token')) {
       const { data, error } = await supabase.auth.getSession()
       document.getElementById("signupbutton").classList.add('hide');
       document.getElementById("loginbutton").classList.add('hide');
       document.getElementById("logoutbutton").classList.remove('hide');
       document.getElementById("mainhead").style.left = "56px";
       console.log(data)
    }
   }
   
   newload();