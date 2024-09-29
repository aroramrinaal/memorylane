import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

// Define the Gemini API Response type based on the expected structure
interface GeminiResponse {
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}

// Define the styles
const styles: { [key: string]: React.CSSProperties } = {
  chatBox: {
    position: 'fixed',
    bottom: '20px',
    left: '20px', // Positioned at the bottom-left corner
    width: '300px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    padding: '15px',
    zIndex: 1000,
  },
  chatHeader: {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatLogs: {
    maxHeight: '200px',
    overflowY: 'auto',
    margin: '10px 0',
    color: '#000000', // Set text color to black
  },
  chatMessage: {
    backgroundColor: '#e3e3e3',
    borderRadius: '8px',
    padding: '8px',
    marginBottom: '8px',
    fontSize: '14px',
  },
  inputBox: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    width: '100%',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    padding: '10px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  minimizeButton: {
    background: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

// Define the ChatBot component
const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  // Handle sending a message
  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Add user's message to the chat log
    setMessages((prevMessages) => [...prevMessages, { sender: 'User', text: inputMessage }]);

    try {
      // Make request to the Gemini API
      const response: AxiosResponse<GeminiResponse> = await axios.post(
        'https://actual-gemini-api-endpoint/v1/messages',
        {
          model: 'gemini-turbo', // Update to Gemini-specific model
          messages: [{ role: 'user', content: inputMessage }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`, // Use the Gemini API key
          },
        }
      );

      // Extract the bot's response
      const botMessage = response.data.choices[0].message.content;

      // Add bot's response to the chat log
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'Bot', text: botMessage },
      ]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'Bot', text: 'Sorry, I am currently unable to respond. Please try again later.' },
      ]);
    }

    // Clear the input field
    setInputMessage('');
  };

  // Toggle chatbox visibility
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  return (
    <div style={styles.chatBox}>
      <div style={styles.chatHeader}>
        Memory Lane Assistant
        <button style={styles.minimizeButton} onClick={toggleMinimize}>
          {isMinimized ? '▲' : '▼'}
        </button>
      </div>
      {!isMinimized && (
        <>
          <div style={styles.chatLogs}>
            {messages.map((message, index) => (
              <div key={index} style={styles.chatMessage}>
                <strong>{message.sender}:</strong> {message.text}
              </div>
            ))}
          </div>
          <input
            style={styles.inputBox}
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button style={styles.button} onClick={sendMessage}>
            Send
          </button>
        </>
      )}
    </div>
  );
};

export default ChatBot;