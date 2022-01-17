export default function Chatting(root) {
    root.innerHTML=`
    <link rel="stylesheet" href="chat.css">
    <div class="container">
    <div class="header">
      <button class="back-btn">
        <img src="imgs/left-arrow.png" width="30" height="30">  
      </button>
      <img class="profile-pic" src="imgs/profile.png" width="40" height="40">
      <div class="info-block">
        <p class="username">우만동 부동산</p>
        <p class="status">H.P. 010-8931-4993</p>
      </div>
      <div class="call-box">
        <button>
          <img src="imgs/phone-call.png" width="20" height="20">
        </button>
        <button>
          <img src="imgs/video-call.png" width="20" height="20">
        </button>
      </div>
    </div>

    <div id="chat-box">
      <div class=" bubble friend-bubble">
        안녕하세요!
      </div>
    </div>

    <div class="footer">
      <textarea id="input" placeholder="메시지를 입력하세요..." autofocus="true"></textarea>
      <button id="send">
        <img src="imgs/send.png" width="24" height="24">  
      </button>
    </div>
  </div>
    `
}

const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

export function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }
  input.value = ''; //textarea 초기화
}
send.addEventListener('click', sendMyText);

export function onkeyEvent(e) {
  if(e.key==='Enter'&& !e.shiftKey){
    sendMyText();
    e.preventDefault();
  }
}
input.addEventListener('keydown', onkeyText);
