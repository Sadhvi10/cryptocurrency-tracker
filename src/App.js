import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => alert("Yo error"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  //bg-[#111827] min-h-screen flex justify-center items-center
  // font-black bg-gradient-to-r from-blue-200 via-purple-500 to-red-600 text-transparent bg-clip-text text-4xl
  //
  return (
    <div className=' box-border font-black bg-[#111827] text-white min-h-screen '>
      <div className='flex flex-col items-center justify-center'>
        <h1 className=' py-12  bg-gradient-to-r from-blue-200 via-purple-500 to-red-600 text-transparent bg-clip-text  text-5xl'>
          Search a currency
        </h1>
        <form>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Search...'
            className=' placeholder-white px-2 py-1 mb-12 -mt-6  bg-gradient-to-r from-blue-500  via-blue-600 to-blue-700 rounded-md focus:outline-none  '
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
