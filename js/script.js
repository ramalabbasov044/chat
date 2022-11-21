// " use strict "
// let btn = document.querySelector('.btn')

// btn.addEventListener('click',function(){
//     const nameInput = document.querySelector('.nameInput')
//     let name = nameInput.value
//     const messageInput = document.querySelector('.messageInput')
//     let mes = messageInput.value
//     let message = document.querySelector('.message');
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("messageBox");
//     // console.log(newDiv);
//     message.innerHTML = name + `<br>` + mes
// })


    // secmeler
   const buttonSend = document.querySelector('.btn');
   const nameInput = document.querySelector('.nameInput');
   const messageInput = document.querySelector('.messageInput')
   const message = document.querySelector('.message');
   
   
     // buttona click olunduqda inputun valusinin itmesi 
     function empty(){
        nameInput.value = '';
        messageInput.value = ''
     }
     nameInput.addEventListener('input',function(a){
        gonder = a.target.value;
        // console.log(gonder)
    })
    messageInput.addEventListener('input',function(b){
        gonder2 = b.target.value
        // console.log(gonder2)
    })
     // mesajin gonderilmesi eger inputun icerisi bosdusa mesaj gonderme 
     buttonSend.addEventListener('click',function(){
        if(nameInput.value === ''){
            console.log('inputun icerisi bosdur dalbayov ne bassan');
        }else{
            let test = document.createElement('div');
            test.classList.add('sendMessage');
            test.innerHTML = `
                <p class="sendOne">${gonder}</p>
                <p class="sendTwo">${gonder2}</p>
                <div class="dates">
                    <div class="msg-info-time">${formatDate(new Date())}</div>
                </div>
            `
            // bruda inputun icerisin temizdemek ucun empty funksiyasin cagirram
            empty();
            message.appendChild(test);
        }
     })
     message.scrollTop = message.scrollHeight;

     
     function formatDate(date) {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
      
        return `${h.slice(-2)}:${m.slice(-2)}`;
      }
     // scrolun yazdigca asagi dusmesi
   
      
   