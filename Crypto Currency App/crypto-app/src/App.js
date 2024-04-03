import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            vs_currency: 'usd',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Cryptocurrency Market</h1>
      <ul>
        {cryptoData.map((crypto, index) => (
          <li key={index}>
            <p className="crypto-name">{crypto.name}</p>
            <p className="crypto-symbol">{crypto.symbol}</p>
            <p className="crypto-price">Price: ${crypto.current_price}</p>
            <p className="crypto-market-cap">Market Cap: ${crypto.market_cap.toLocaleString()}</p>
            <p className={`crypto-change ${crypto.price_change_percentage_24h >= 0 ? 'positive-change' : 'negative-change'}`}>
              24h Change: {crypto.price_change_percentage_24h}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
