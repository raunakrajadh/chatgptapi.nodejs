const axios = require('axios');
const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

async function sendMessageToChatGPT(message) {
    try {
        const response = await axios.post(
            API_ENDPOINT,
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );

        const chatGptResponse = response.data.choices[0].message.content;
        console.log('ChatGPT Response:', chatGptResponse);
    } catch (error) {
        console.error(error.response.data.error.message);
    }
}

sendMessageToChatGPT('Hello');
