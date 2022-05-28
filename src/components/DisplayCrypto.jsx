import React from "react";
import { Link } from "react-router-dom";
import Crypto from "./Crypto";
import DisplayCryptoSingle from "./routes/DisplayCryptoSingle";
const DisplayCrypto = ({ coins }) => {
  return (
    <div className="container flex flex-col items-center  w-full mt-[2rem]">
      <Crypto />
      {coins.map((coin, indx) => {
        return (
          <Link
            to={`coin/${coin.id}`}
            element={<DisplayCryptoSingle />}
            key={indx}
            className="flex justify-around w-full text-center items-center hover:scale-90 list-none hover:cursor-pointer transition-all ease-in  duration-300 bg-sky-700 rounded-lg text-white p-3 text-[1.2rem] m-2"
          >
            <li className="text-center">{indx + 1}</li>
            <img
              src={coin?.image}
              alt=""
              style={{ width: "30px", borderRadius: "50%" }}
            />
            <li>{coin?.name}</li>
            <li>{coin?.market_cap_rank}</li>
            <li>{coin?.high_24h}</li>
            <li className="hidden sm:flex">
              {coin?.market_cap.toLocaleString()}
            </li>
            <li className="hidden sm:flex">
              {coin?.total_volume.toLocaleString()}
            </li>
          </Link>
        );
      })}
    </div>
  );
};

export default DisplayCrypto;
