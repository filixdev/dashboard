import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { priceColor } from '../Utils'
import { ArrowDropDownIcon, ArrowDropUpIcon } from '../Icons/Icons'

interface CoinTicker {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    high_24h: number
    low_24h: number
    price_change_percentage_24h: number
    price_change_percentage_1h_in_currency: number
    price_change_percentage_24h_in_currency: number
    price_change_percentage_7d_in_currency: number
}

const BtcContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid orange;
    padding: 1rem;
    width: 10rem;
    border-radius: 5px;
    font-size: 1.2rem;
    gap: 0.3rem;
    background-color: #ffa600eb;
`

const Logo = styled.img`
    width: 2rem;
`

const CoinName = styled.p`
    margin: 0;
`

const CoinPrice = styled.p`
    font-weight: bold;
    margin: 0;
`

const CoinPercentage = styled.p`
    font-size: 1.2rem;
    margin: 0;
`

const PriceContainer = styled.div<{ priceChangeColor: string }>`
    display: flex;
    align-items: center;
    color: ${({ priceChangeColor }) => priceChangeColor};
`

export const BtcWidget = () => {
    const [coin, setCoin] = useState<CoinTicker[]>([])

    const API_KEY = import.meta.env.VITE_COIN_GEKO_KEY

    const fetchBtcData = async () => {
        try {
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_demo_api_key=${API_KEY}
            `)
                .then(response => response.json())
                .then(data => {
                    console.log(data, 'dataBTC')
                    setCoin(data)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBtcData()
    }, [])

    const btc = coin.filter(coin => coin.id === 'bitcoin')

    const renderPriceChange = (priceColor: string) => {
        return priceColor === 'green' ? (<ArrowDropUpIcon fill={priceColor}/>) : (<ArrowDropDownIcon fill={priceColor}/>)
    }


    return (
        <>
            {btc.map(coin => (
                <BtcContainer key={coin.id}>
                    <Logo src={coin.image} alt="btc" />
                    <CoinName>{coin.name}</CoinName>
                    <CoinPrice>${coin.current_price}</CoinPrice>
                    <PriceContainer priceChangeColor={priceColor(coin.price_change_percentage_24h)}>
                        {renderPriceChange(priceColor(coin.price_change_percentage_24h))}
                        <CoinPercentage>{coin.price_change_percentage_24h.toFixed(2)}%</CoinPercentage>
                    </PriceContainer>
                </BtcContainer>
            ))}
        </>
    )
}
