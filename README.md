# Crypto Dashboard

A modern, real-time cryptocurrency dashboard built with React and TypeScript. Track cryptocurrency prices, market caps, and detailed statistics with a beautiful dark-themed interface.

![Crypto Dashboard Preview](https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=1200&h=600)

## Features

- 🚀 Real-time cryptocurrency data updates
- 🔍 Search functionality for quick access to specific cryptocurrencies
- 📊 Comprehensive market statistics and metrics
- 📱 Fully responsive design
- 🌙 Modern dark theme interface
- ⚡ Live price updates every 60 seconds
- 📈 Detailed view with additional statistics
- 💫 Smooth animations and transitions

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Axios
- Lucide React Icons
- CoinGecko API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd crypto-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── CryptoCard.tsx    # Individual cryptocurrency card
│   ├── CryptoDetail.tsx  # Detailed view component
│   └── Modal.tsx         # Reusable modal component
├── api.ts             # API integration with CoinGecko
├── types.ts           # TypeScript interfaces
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Features in Detail

### Real-time Data
- Fetches live cryptocurrency data from CoinGecko API
- Automatic updates every 60 seconds
- Displays current prices, market caps, and 24h changes

### Detailed Statistics
- Comprehensive market data
- Price information (current, 24h high/low)
- Supply information (circulating, total, max)
- All-time statistics (ATH, ATL with dates)

### Search Functionality
- Instant search through cryptocurrencies
- Search by name or symbol
- Real-time filtering

### Responsive Design
- Optimized for all screen sizes
- Mobile-first approach
- Consistent experience across devices

## API Integration

The dashboard uses the CoinGecko API v3 for cryptocurrency data. The integration:
- Fetches top 100 cryptocurrencies by market cap
- Includes price changes, market data, and volume
- Handles rate limiting and error cases

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data provided by [CoinGecko](https://www.coingecko.com/en/api)
- Icons by [Lucide](https://lucide.dev/)