import React from "react";

const Crypto = () => {
  return (
    <div className="container flex flex-col items-center  w-full">
      <ul className="flex  justify-around items-center text-center w-full bg-sky-700 rounded-lg text-white p-3 text-[1.2rem]">
        <li>SN</li>
        <li>Icon</li>
        <li>Crypto</li>
        <li>Rank</li>
        <li>24hrs</li>
        <li className="hidden sm:flex">Market_cap</li>
        <li className="hidden sm:flex">Volume</li>
      </ul>
    </div>
  );
};

export default Crypto;
