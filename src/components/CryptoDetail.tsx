import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Cryptocurrency } from '../types';

interface CryptoDetailProps {
  crypto: Cryptocurrency;
}

export const CryptoDetail: React.FC<CryptoDetailProps> = ({ crypto }) => {
  const isPositive = crypto.price_change_percentage_24h > 0;
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <img src={crypto.image} alt={crypto.name} className="w-16 h-16 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-white">{crypto.name}</h2>
          <span className="text-gray-400 uppercase">{crypto.symbol}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Price Information</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Price</span>
                <span className="text-white">${crypto.current_price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">24h Change</span>
                <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {isPositive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                  {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">24h High</span>
                <span className="text-white">${crypto.high_24h?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">24h Low</span>
                <span className="text-white">${crypto.low_24h?.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Market Data</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Market Cap</span>
                <span className="text-white">${crypto.market_cap.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Volume (24h)</span>
                <span className="text-white">${crypto.total_volume.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Market Cap Rank</span>
                <span className="text-white">#{crypto.market_cap_rank}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Supply Information</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Circulating Supply</span>
                <span className="text-white">{crypto.circulating_supply?.toLocaleString()} {crypto.symbol.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Supply</span>
                <span className="text-white">{crypto.total_supply?.toLocaleString() || 'N/A'} {crypto.symbol.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Supply</span>
                <span className="text-white">{crypto.max_supply?.toLocaleString() || 'N/A'} {crypto.symbol.toUpperCase()}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">All-Time Statistics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">All-Time High</span>
                <span className="text-white">${crypto.ath?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ATH Date</span>
                <span className="text-white">{crypto.ath_date ? formatDate(crypto.ath_date) : 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">All-Time Low</span>
                <span className="text-white">${crypto.atl?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ATL Date</span>
                <span className="text-white">{crypto.atl_date ? formatDate(crypto.atl_date) : 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};