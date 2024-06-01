// components/Sidebar.js
export default function Sidebar({
  selectedOption,
  setSelectedOption,
  network,
  setNetwork,
  address,
  setAddress,
  handleSearch,
}) {
  return (
    <aside className="w-1/4 bg-gray-900 text-white p-6 border-r border-gray-600 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl mb-4 font-semibold">Options</h2>
        <div className="radio-buttons">
          <label className="block mb-4 flex items-center cursor-pointer">
            <input
              type="radio"
              name="option"
              value="Option 1"
              checked={selectedOption === 'Option 1'}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="hidden"
            />
            <span className="custom-radio mr-3"></span>
            <span className="text-lg">Transaction Details</span>
          </label>
          <label className="block mb-4 flex items-center cursor-pointer">
            <input
              type="radio"
              name="option"
              value="Option 2"
              checked={selectedOption === 'Option 2'}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="hidden"
            />
            <span className="custom-radio mr-3"></span>
            <span className="text-lg">Block Analysis</span>
          </label>
          
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium">Choose the option:</label>
        <select
          className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-gray-500"
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
        >
          <option value="sepolia">Ethereum Sepolia</option>
          <option value="goerli">Ethereum Goerli</option>
          <option value="galadriel">Galadriel Devnet</option>
        </select>
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
          placeholder="Enter smart contract address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        onClick={handleSearch}
        className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded transition duration-300"
      >
        Search
      </button>
    </aside>
  );
}
