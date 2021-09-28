import React from "react";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className='flex justify-center items-center '>
      <div className='flex flex-row  h-20 max-w-4xl justify-start items-center font-medium  border-b-2 border-gray-300   '>
        <div className='flex p-8 items-center font-bold text-sm min-w-min '>
          <img src={image} alt='crypto' className='h-6 w-6 mr-2 ' />
          <h1 className=' tracking-wide mr-10 w-36'>{name}</h1>
          <p className=' uppercase'>{symbol}</p>
        </div>
        <div className='flex justify-between items-center max-w-full text-sm'>
          <p className=' w-28 '>₹{price}</p>
          <p className=' w-48'>₹{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='text-red-400 w-20'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='text-green-400 w-20'>{priceChange.toFixed(2)}%</p>
          )}
          <p className=' w-60'>
            {" "}
            <span className='text-gray-500 font-bold'>Mkt Cap : </span> ₹
            {marketcap.toLocaleString()}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
