import React, { useState } from 'react';
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

// Since the chatbox is removed, you can clean up unused styles.
const styles: { [key: string]: React.CSSProperties } = {};

// Define the ChatBot component without the chatbox UI
const ChatBot: React.FC = () => {
  return (
    <div>
      <h2>Memory Lane Assistant has been removed from this component.</h2>
    </div>
  );
};

export default ChatBot;
