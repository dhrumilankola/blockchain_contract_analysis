// components/MainContent.js
import { useState, useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi';

export default function MainContent({
  contractCode,
  error,
  query,
  setQuery,
  handleSubmit,
  response,
}) {
  const [chatLog, setChatLog] = useState([]);
  const [showContract, setShowContract] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (response) {
      const responseMessage = { type: 'bot', text: response };
      setChatLog((prevChatLog) => [...prevChatLog, responseMessage]);
    }
  }, [response]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  const handleNewMessage = async (e) => {
    e.preventDefault();
    const newMessage = { type: 'user', text: query };
    setChatLog((prevChatLog) => [...prevChatLog, newMessage]);
    setQuery('');
    await handleSubmit(e); // Ensure handleSubmit is awaited if it's an async function
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNewMessage(e);
    }
  };

  const toggleContractDisplay = () => {
    setShowContract(!showContract);
  };

  return (
    <main className="flex-1 flex flex-col bg-gray-900 text-white p-6 shadow-lg">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {contractCode && (
        <div className="flex-grow w-full mb-6">
          <button
            onClick={toggleContractDisplay}
            className="bg-gray-700 text-white p-2 rounded mb-4"
          >
            {showContract ? 'Hide Smart Contract' : 'Show Smart Contract'}
          </button>
          {showContract && (
            <div className="bg-gray-800 text-white p-4 border border-gray-700 rounded-lg h-64 overflow-y-auto w-full">
              <pre className="bg-gray-800 text-white">{contractCode}</pre>
            </div>
          )}
        </div>
      )}
      <div
        className="flex-grow w-full mb-4 overflow-y-auto flex flex-col space-y-4 h-64"
        ref={chatContainerRef}
      >
        {chatLog.map((message, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-lg max-w-xs ${
              message.type === 'user'
                ? 'bg-blue-600 text-white self-end'
                : 'bg-gray-700 text-white self-start'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="mt-auto w-full">
        <form onSubmit={handleNewMessage} className="flex items-center space-x-4">
          <div className="flex-grow">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask follow-up questions"
              className="w-full p-3 border border-gray-700 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
              rows="1"
            />
          </div>
          <button
            type="submit"
            className="flex-none w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-full transition duration-300"
          >
            <FiSend size={24} />
          </button>
        </form>
      </div>
    </main>
  );
}
