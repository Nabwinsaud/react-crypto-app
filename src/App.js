import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Crypto from "./components/Crypto";
import DisplayCrypto from "./components/DisplayCrypto";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCryptoSingle from "./components/routes/DisplayCryptoSingle";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });
  return (
    <>
      <Navbar />
      <div className="container max-w-1200px w-full mx-auto mt-[5rem]">
        {/* <DisplayCrypto coins={coins} /> */}
        {/* so we are passing the nested Route so when user click the certain route then only load the content other wise go back to normal link */}
        <Routes>
          <Route path="/" element={<DisplayCrypto coins={coins} />} />
          <Route path="/coin" element={<DisplayCryptoSingle />}>
            <Route path=":coinid" element={<DisplayCryptoSingle />} />
            <Route
              path="*"
              element={
                <h2 className="mt-[15rem] p-[4rem] text-3xl text-center uppercase tracking-widest text-blue-500 animate-bounce">
                  404 Page not found
                </h2>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
