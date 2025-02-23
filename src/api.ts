import axios from 'axios';
import { Cryptocurrency } from './types';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptocurrencies = async (): Promise<Cryptocurrency[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
};