import React, { useEffect, useState } from 'react';

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
}

export const CoinList: React.FC = () => {
  const [marketData, setMarketData] = useState<CryptoCurrency[]>([]);

  const API_KEY = import.meta.env.VITE_COIN_GEKO_KEY

  const fetchMarketData = async () => {
    // crypto market data
    try {
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          console.log(data, 'data')
          setMarketData(data)
        })
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMarketData()
  }, [])

  if (!marketData || marketData.length === 0) return <p>No data available</p>;

  return (
    <table>
      <tr>
        <th>name</th>
        <th>symbol/USD</th>
        <th>current_price</th>
        <th>market_cap</th>
        <th>total_volume</th>
        <th>price_change_percentage_24h</th>
        <th>circulating_supply</th>
        <th>total_supply</th>
        <th>ath</th>
        <th>ath_change_percentage</th>
        <th>ath_date</th>
        <th>last_updated</th>
      </tr>
      {marketData.map(coin => (
        <tr key={coin.id}>
          <td>{coin.name}</td>
          <td>{coin.symbol.toUpperCase()}/USD</td>
          <td>{coin.current_price}</td>
          <td>{coin.market_cap}</td>
          <td>{coin.total_volume}</td>
          <td>{coin.price_change_percentage_24h}</td>
          <td>{coin.circulating_supply}</td>
          <td>{coin.total_supply}</td>
          <td>{coin.ath}</td>
          <td>{coin.ath_change_percentage}</td>
          <td>{coin.ath_date}</td>
          <td>{coin.last_updated}</td>
        </tr>
      ))}
    </table>
  )
}

