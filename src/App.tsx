import React, { useEffect, useState } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import { fetchCryptocurrencies } from './api';
import { CryptoCard } from './components/CryptoCard';
import { Modal } from './components/Modal';
import { CryptoDetail } from './components/CryptoDetail';
import type { Cryptocurrency } from './types';

function App() {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState<Cryptocurrency | null>(null);

  const loadCryptocurrencies = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchCryptocurrencies();
      setCryptocurrencies(data);
    } catch (err) {
      setError('Failed to load cryptocurrency data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCryptocurrencies();
    const interval = setInterval(loadCryptocurrencies, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const filteredCryptos = cryptocurrencies.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">
            Cryptocurrency Dashboard
          </h1>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search cryptocurrencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg bg-gray-900 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            
            <button
              onClick={loadCryptocurrencies}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw size={20} className="mr-2" />
              Refresh
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-100 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCryptos.map(crypto => (
              <CryptoCard 
                key={crypto.id} 
                crypto={crypto} 
                onClick={() => setSelectedCrypto(crypto)}
              />
            ))}
          </div>
        )}

        <Modal 
          isOpen={!!selectedCrypto} 
          onClose={() => setSelectedCrypto(null)}
        >
          {selectedCrypto && <CryptoDetail crypto={selectedCrypto} />}
        </Modal>
      </div>
    </div>
  );
}

export default App;