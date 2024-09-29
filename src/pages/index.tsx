import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import localFont from 'next/font/local';

// Custom local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  // State variables for the chatbot
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false); // Control chatbot visibility

  // Function to handle message submission
  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user's message to the chat log
    const userMessage = { sender: 'User', text: inputMessage };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage('');
    setLoading(true);

    try {
      // Make POST request to the Next.js API route
      const response = await axios.post('/api/generate', { prompt: userMessage.text });

      // Add bot's response to the chat log
      const botMessage = { sender: 'Bot', text: response.data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'Bot', text: 'Sorry, I am currently unable to respond. Please try again later.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Navigation Link to Contacts Page */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/Emergency/contacts">
            <button className="rounded-full bg-[#121212] text-[#ffffff] border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#080707] dark:hover:bg-[#1c1c1c] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              <span className="text-white font-semibold">Go to Contacts Page</span>
            </button>
          </Link>
          {/* Existing Button Links */}
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        {/* Chatbot UI */}
        {showChatBot && (
          <div className="w-full max-w-xl border rounded-lg p-4 mt-8 bg-white shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-4">Memory Lane Chatbot</h2>
            <div className="max-h-64 overflow-y-auto p-4 border rounded-lg bg-gray-100 mb-4 text-black">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'User' ? 'text-right' : 'text-left'}`}>
                  <strong>{message.sender}:</strong> {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="flex flex-col gap-4">
              <textarea
                className="w-full border rounded-lg p-2"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                type="submit"
                className={`w-full p-2 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        )}

        {/* Toggle Button for the Chatbot */}
        <button
          onClick={() => setShowChatBot((prev) => !prev)}
          className="fixed bottom-5 left-5 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        >
          💬 {showChatBot ? 'Close Chat' : 'Open Chat'}
        </button>
      </main>
    </div>
  );
}
