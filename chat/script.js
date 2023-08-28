const messagebut = document.getElementById('messagearea')
const chatcontainer = document.getElementById('chat-container')

async function logout() {
    await _supabase.auth.signOut();
    window.location.assign("/");

}

async function newload() {

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

newload();

async function sendmessage() {
    if (messagebut.value != "") {
        const { data, error } = await _supabase.auth.getSession()
        const { data: data1, error: error1 } = await _supabase.from('chat').insert([{ message: messagebut.value, name: data['session']['user']['user_metadata']['name'] }])
        messagebut.value = "";
    }
}

let chatttttt = [{ 'created_at': 'shitsucks' }];

x = setInterval(async function test() {
    const { data: data3, error: error3 } = await _supabase.from('chat').select()
    data3.reverse();
    if (chatttttt[0]['created_at'] != data3[0]['created_at']) {
            const { data: data1, error: error1 } = await _supabase.from('chat').select()
            data1.reverse();
            chatttttt = data1
            chatcontainer.innerHTML = "";
            data1.forEach(element => {
                let created_at = element.created_at
                 created_at = created_at.split("+")
                let d = created_at[0]
                created_at = `${d[0]}${d[1]}${d[0]}${d[3]}-${d[5]}${d[6]}-${d[8]}${d[9]} ${d[11]}${d[12]}:${d[14]}${d[15]}:${d[17]}${d[18]}`
                if (localStorage.getItem('sb-nehibeqlnydjxvhpcfml-auth-token')) {
                    async function ihatethis() {
                        const { data, error } = await _supabase.auth.getSession()
                        let nameofuser = data['session']['user']['user_metadata']['name']
                        if (element.name == nameofuser) {
                            chatcontainer.insertAdjacentHTML("beforeend", `<div class="message user-message"><div class="meta-data"></div></div>`);
                            let metadata = document.getElementsByClassName("meta-data");
                            metadata[metadata.length - 1].insertAdjacentText("beforeend", `${element.name} - ${created_at}`);
                            let message = document.getElementsByClassName("message");
                            message[message.length - 1].insertAdjacentText("beforeend", `${element.message}`);
                        } else {
                            chatcontainer.insertAdjacentHTML("beforeend", `<div class="message"><div class="meta-data"></div></div>`);
                            let metadata = document.getElementsByClassName("meta-data");
                            metadata[metadata.length - 1].insertAdjacentText("beforeend", `${element.name} - ${created_at}`);
                            let message = document.getElementsByClassName("message");
                            message[message.length - 1].insertAdjacentText("beforeend", `${element.message}`);
                        }
                    }
                    ihatethis();

                } else {
                    chatcontainer.insertAdjacentHTML("beforeend", `<div class="message"><div class="meta-data"></div></div>`);
                    let metadata = document.getElementsByClassName("meta-data");
                    metadata[metadata.length - 1].insertAdjacentText("beforeend", `${element.name} - ${created_at}`);
                    let message = document.getElementsByClassName("message");
                    message[message.length - 1].insertAdjacentText("beforeend", `${element.message}`);
                }
                chatttttt = data1
            });
    }
}, 500);