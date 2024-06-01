import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

export default function Home() {
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('sepolia'); // Default to Sepolia
  const [contractCode, setContractCode] = useState('');
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/contract`, {
        params: { address, network },
      });
      setContractCode(res.data.SourceCode);
      setError('');
    } catch (err) {
      setError('Failed to fetch contract data');
      setContractCode('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., send data to an API
    setResponse(`You selected: ${selectedOption}, with message: ${query}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-gray-300 border-b border-gray-600 text-white p-4 text-center">
        <h1 className="text-2xl text-center">BLOCK CLARITY</h1>
      </header>
      <div className="flex flex-1">
        <Sidebar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          network={network}
          setNetwork={setNetwork}
          address={address}
          setAddress={setAddress}
          handleSearch={handleSearch}
        />
        <MainContent
          contractCode={contractCode}
          error={error}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          response={response}
        />
      </div>
    </div>
  );
}
