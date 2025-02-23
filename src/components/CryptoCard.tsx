import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Cryptocurrency } from '../types';

interface CryptoCardProps {
  crypto: Cryptocurrency;
  onClick: () => void;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({ crypto, onClick }) => {
  const isPositive = crypto.price_change_percentage_24h > 0;

  return (
    <div 
      className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border border-gray-800 hover:border-blue-500"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={crypto.image} alt={crypto.name} className="w-10 h-10 mr-3" />
          <div>
            <h3 className="font-semibold text-lg text-white">{crypto.name}</h3>
            <span className="text-gray-400 uppercase">{crypto.symbol}</span>
          </div>
        </div>
        <span className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded">
          Rank #{crypto.market_cap_rank}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Price</span>
          <span className="font-medium text-white">${crypto.current_price.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">24h Change</span>
          <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Market Cap</span>
          <span className="font-medium text-white">${crypto.market_cap.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Volume (24h)</span>
          <span className="font-medium text-white">${crypto.total_volume.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};