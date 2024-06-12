const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    chatBox.appendChild(item);
    chatBox.scrollTop = chatBox.scrollHeight;
});
