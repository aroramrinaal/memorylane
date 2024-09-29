import React, { useState } from 'react';
import axios from 'axios';

// Define the TypeScript interface for the expected OpenAI response
interface OpenAIResponse {
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
}

const styles: { [key: string]: React.CSSProperties } = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '20px', // Positioned on the bottom-left corner
    width: '350px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    zIndex: 1000,
  },
  header: {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  toggleButton: {
    backgroundColor: '#333333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '0 10px',
  },
  chatArea: {
    height: '400px',
    padding: '15px',
    overflowY: 'auto',
    backgroundColor: '#f5f5f5',
    color: '#000000',
  },
  minimizedChat: {
    display: 'none',
  },
  userMessage: {
    textAlign: 'right',
    margin: '5px 0',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#000000',
    borderRadius: '10px',
    display: 'inline-block',
  },
  botMessage: {
    textAlign: 'left',
    margin: '5px 0',
    padding: '10px',
    backgroundColor: '#e0e0e0',
    color: '#000000',
    borderRadius: '10px',
    display: 'inline-block',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #dddddd',
    padding: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #cccccc',
    borderRadius: '5px',
    outline: 'none',
    color: '#000000',
  },
  sendButton: {
    padding: '10px',
    backgroundColor: '#333333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message to chat
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userInput }]);

    // Send message to OpenAI
    const botResponse = await getBotResponse(userInput);

    // Add bot message to chat
    setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    setUserInput(''); // Clear input field
  };

  // Function to get a response from OpenAI's API
  const getBotResponse = async (message: string) => {
    try {
      const response = await axios.post<OpenAIResponse>(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return 'Sorry, I am currently unable to respond. Please try again later.';
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      {/* Chat Header with Minimize/Maximize Button */}
      <div style={styles.header} onClick={() => setIsMinimized(!isMinimized)}>
        Memory Lane Assistant
        <button style={styles.toggleButton}>{isMinimized ? '▲' : '▼'}</button>
      </div>

      {/* Chat Area */}
      <div style={isMinimized ? styles.minimizedChat : styles.chatArea}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={message.sender === 'user' ? styles.userMessage : styles.botMessage}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input Area (hidden when minimized) */}
      {!isMinimized && (
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button style={styles.sendButton} onClick={handleSendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;