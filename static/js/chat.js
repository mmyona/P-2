const chatBox = chat.querySelector('#chat-box');
const input = chat.querySelector('#input');
const send = chat.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = chat.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}

send.addEventListener('click', sendMyText);