const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

//  Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

//  Route to serve chat.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat.html'));
});

//  Gemini API Setup
const apiKey = 'AIzaSyBULLK-JF__vqm5lWxjSPDQxSD3G8l_sfe'; // Replace with your API key
const geminiAPI = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

// Chatbot Route
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    //  AI Prompt
    const prompt = `act as an educator`;

    try {
        const response = await axios.post(geminiAPI, {
            contents: [{ parts: [{ text: prompt }] }]
        });

        
        const aiReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't find a suggestion.";

        res.json({ reply: aiReply });
    } catch (error) {
        console.error("API Error:", error.message);
        res.status(500).json({ reply: "Oops! There was an error processing your request." });
    }
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
