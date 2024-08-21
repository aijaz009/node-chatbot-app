const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('views'));
app.use(express.json());

const chatModel = require('./models/ChatModel');

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  const response = await chatModel.getResponse(message);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
