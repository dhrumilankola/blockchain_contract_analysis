// components/MainContent.js
import { FiSend } from 'react-icons/fi';

export default function MainContent({
  contractCode,
  error,
  query,
  setQuery,
  handleSubmit,
  response,
}) {
  return (
    <main className="flex-1 flex flex-col bg-gray-900 text-white p-6 shadow-lg">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {contractCode && (
        <div className="w-full mb-6 flex-grow">
          <pre className="bg-gray-800 text-white border border-gray-700 rounded-lg h-64 overflow-y-auto w-full">
            {contractCode}
          </pre>
        </div>
      )}
      <div className="mt-auto w-full">
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <div className="flex-grow">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
      {response && (
        <div className="w-full mt-4">
          <div className="response-area bg-gray-800 p-4 border border-gray-700 rounded-lg w-full">
            <h2 className="text-xl font-bold mb-4">Response</h2>
            <p>{response}</p>
          </div>
        </div>
      )}
    </main>
  );
}
