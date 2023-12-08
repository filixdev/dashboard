import React, { useEffect, useState } from 'react';
import { CoinLogo, CoinName, CoinNameWrap, Input, Table, TableD, TableH, TableR } from './style';
import { priceColor } from '../../Utils';

export interface CryptoCurrency {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: null
  last_updated: string
  price_change_percentage_1h_in_currency: number
  price_change_percentage_24h_in_currency: number
  price_change_percentage_7d_in_currency: number
}

export const CoinTable: React.FC = () => {
  const [marketData, setMarketData] = useState<CryptoCurrency[]>([]);
  const [search, setSearch] = useState('')

  const API_KEY = import.meta.env.VITE_COIN_GEKO_KEY

  const fetchMarketData = async () => {
    try {
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_demo_api_key=${API_KEY}`)
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

  const handleChage = (e: { preventDefault: () => void; target: { value: string; }; }) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const filteredCoins = marketData.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <form>
        <Input type="text" placeholder='Search coin' onChange={handleChage} />
      </form>
      <Table>
        <tr>
          <TableH>#</TableH>
          <TableH>Name</TableH>
          <TableH>Symbol</TableH>
          <TableH>Price</TableH>
          <TableH>Price 24</TableH>
          <TableH>1h</TableH>
          <TableH>24h</TableH>
          <TableH>7d</TableH>
          <TableH>Price 24 %</TableH>
          <TableH>Market Cup</TableH>
          <TableH>Total Volume</TableH>
          <TableH>Cirtulating Supply</TableH>
          <TableH>Total Supply</TableH>
          <TableH>ATH</TableH>
          <TableH>ATH %</TableH>
        </tr>
        {filteredCoins.map(coin => (
          <TableR key={coin.id}>
            <TableD>{coin.market_cap_rank}</TableD>
            <TableD>
              <CoinNameWrap>
                <CoinLogo src={coin.image} alt='coin logo' />
                <CoinName>
                  {coin.name}
                </CoinName>
              </CoinNameWrap>
            </TableD>
            <TableD>{coin.symbol.toUpperCase()}</TableD>
            <TableD>${coin.current_price.toFixed(2)}</TableD>
            <TableD>{coin.price_change_24h.toFixed(2)}</TableD>
            <TableD priceChangeColor={priceColor(coin.price_change_percentage_1h_in_currency)}>{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</TableD>
            <TableD priceChangeColor={priceColor(coin.price_change_percentage_24h_in_currency)}>{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</TableD>
            <TableD priceChangeColor={priceColor(coin.price_change_percentage_7d_in_currency)}>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</TableD>
            <TableD priceChangeColor={priceColor(coin.price_change_percentage_24h)}>{coin.price_change_percentage_24h.toFixed(2)}%</TableD>
            <TableD>${coin.market_cap}</TableD>
            <TableD>${coin.total_volume}</TableD>
            <TableD>{coin.circulating_supply} {coin.symbol.toUpperCase()}</TableD>
            <TableD>{coin.total_supply} {coin.symbol.toUpperCase()}</TableD>
            <TableD>${coin.ath}</TableD>
            <TableD>{coin.ath_change_percentage}%</TableD>
          </TableR>
        ))}
      </Table>
    </>
  )
}

