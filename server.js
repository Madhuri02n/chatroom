const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const responses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! 😊",
    "your name": "I'm an AI chatbot built with JavaScript.",
    "bye": "Goodbye! Have a great day! 👋",
};

app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    const reply = responses[userMessage] || "I'm not sure about that. Can you rephrase?";
    res.json({ reply });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
