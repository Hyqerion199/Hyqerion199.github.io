const messagebut = document.getElementById('messagearea')
const chatcontainer = document.getElementById('chat-container')


async function logout(){
    await _supabase.auth.signOut();
    window.location.assign("/");
    
}


async function newload(){
    
    if (localStorage.getItem('sb-nehibeqlnydjxvhpcfml-auth-token')) {
       const { data, error } = await _supabase.auth.getSession()
       document.getElementById("signupbutton").classList.add('hide');
       document.getElementById("loginbutton").classList.add('hide');
       document.getElementById("logoutbutton").classList.remove('hide');
       document.getElementById("messagebox").classList.remove('hide');
       document.getElementById("mainhead").style.left = "56px";
       document.getElementById("chat-container").style.height = "75%";
       document.getElementById("chat-container").style.zIndex = "1";
    }


    
        

}
   



async function test(){
     if (localStorage.getItem('sb-nehibeqlnydjxvhpcfml-auth-token')) {
        const { data, error } = await _supabase.auth.getSession()
    let nameofuser = data['session']['user']['user_metadata']['name']
}
    const { data: data1, error: error1 } = await _supabase.from('chat').select()
    data1.reverse();

    data1.forEach(element => {
        if (localStorage.getItem('sb-nehibeqlnydjxvhpcfml-auth-token')) {
            if (element.name == nameofuser){
                chatcontainer.insertAdjacentHTML("beforeend", `<div class="message user-message"><div class="meta-data"></div></div>`);
                let metadata = document.getElementsByClassName("meta-data");
                metadata[metadata.length-1].insertAdjacentText("beforeend", `${element.name} - ${element.created_at}`);
                let message = document.getElementsByClassName("message");
                message[message.length-1].insertAdjacentText("beforeend", `${element.message}`);
            } else {
                chatcontainer.insertAdjacentHTML("beforeend", `<div class="message"><div class="meta-data"></div></div>`);
                let metadata = document.getElementsByClassName("meta-data");
                metadata[metadata.length-1].insertAdjacentText("beforeend", `${element.name} - ${element.created_at}`);
                let message = document.getElementsByClassName("message");
                message[message.length-1].insertAdjacentText("beforeend", `${element.message}`);
            }
        }else {
            chatcontainer.insertAdjacentHTML("beforeend", `<div class="message"><div class="meta-data"></div></div>`);
            let metadata = document.getElementsByClassName("meta-data");
            metadata[metadata.length-1].insertAdjacentText("beforeend", `${element.name} - ${element.created_at}`);
            let message = document.getElementsByClassName("message");
            message[message.length-1].insertAdjacentText("beforeend", `${element.message}`);
        }

    });
}


async function sendmessage(){
    if (messagebut.value != ""){
    const { data, error } = await _supabase.auth.getSession()
    const { data :data1, error: error1 } = await _supabase.from('chat').insert([{message: messagebut.value, name: data['session']['user']['user_metadata']['name']}])
    messagebut.value = "";
    }
}



test();
newload();
