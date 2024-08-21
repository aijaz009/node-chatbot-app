const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const messagesList = document.getElementById('messages');

sendButton.addEventListener('click', async () => {
  const message = messageInput.value.trim();
  if (message) {
    try {
      const response = await
