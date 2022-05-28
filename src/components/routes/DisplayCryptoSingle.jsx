import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
const DisplayCryptoSingle = () => {
  // const params = useParams();
  let { coinid } = useParams();
  // we can directly destruct or initilize it, look line 5 and 6
  // we need dynamic id to generate unique id to all the links
  // const url = `https://api.coingecko.com/api/v3/coins/bitcoin`;
  // const url = `https://api.coingecko.com/api/v3/coins/${params.coinid}`;
  const url = `https://api.coingecko.com/api/v3/coins/${coinid}`;

  const [singleDisplay, setSingleDisplay] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => {
      setSingleDisplay(res.data);
    });
    // console.log(singleDisplay?.tickers[0]?.target);
  }, [url]);
  return (
    <div className="container w-full max-w-3xl mx-auto mt-20">
      <div className="sm:flex-row flex flex-col sm:items-center  sm:justify-between justify-start p-4 sm:border-[.5px] sm:border-slate-500 rounded-lg">
        <p className="text-center text-3xl whitespace-nowrap">
          <span className="text-slate-500">Rank:</span>
          <span className="text-4xl text-sky-600 font-bold">#</span>
          <span className="text-5xl  tracking-widest text-indigo-500 font-extrabold">
            {singleDisplay?.market_cap_rank}
          </span>
        </p>
        <h3 className="text-3xl text-center my-4 text-indigo-500 tracking-wide uppercase ">
          {singleDisplay?.name}
        </h3>
        {/* <span>
        
        price_change_24h": -589.3420937408,
    "price_change_percentage_24h": -1.98893,
    "price_change_percentage_7d": -4.41272,
    "price_change_percentage_14d": -0.28978,
    "price_change_percentage_30d": -23.84342,
    "price_change_percentage_60d": -37.8323,
    "price_change_percentage_200
        </span> */}
      </div>
      <div className="flex  sm:flex-row flex-col items-center justify-between space-x-3 px-2 my-5 space-y-5 ">
        {/* <p className="text-center text-3xl tracking-wider uppercase">
          {singleDisplay.id}
        </p> */}
        <div className="img items-center flex">
          <img src={singleDisplay.image?.small} alt="img" />
        </div>
        <div className="flex items-center mt-3">
          <p className="text-2xl text-center">
            {singleDisplay?.name}
            <span className="uppercase ml-1">
              ({singleDisplay?.symbol} / {singleDisplay?.tickers[0]?.target})
            </span>
          </p>
        </div>
        <div className="flex">
          <p className="text-3xl font-bold text-slate-600">
            {singleDisplay?.market_data?.current_price?.usd.toLocaleString()}$
          </p>
        </div>
      </div>

      {/* table data */}
      <div className="sm:flex hidden">
        <table className="table-auto w-full text-center overflow-scroll scrollbar-hide">
          <thead className="border-b border-indigo-300">
            <tr className="sm:text-2xl text-black sm:mt-4 sm:p-2 text-[1rem] ">
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>60d</th>
              <th>1yrs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="sm:text-[1.1rem] text-black sm:mt-4 sm:p-2 text-[1rem] whitespace-nowrap mx-[3px]">
              <td>
                {singleDisplay?.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(
                  2
                )}
                {" % "}
              </td>
              <td>
                {singleDisplay?.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(
                  2
                )}
                {" % "}
              </td>
              <td>
                {singleDisplay?.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(
                  2
                )}
                {"% "}
              </td>
              <td>
                {" "}
                {singleDisplay?.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(
                  2
                )}
                {"% "}
              </td>
              <td>
                {singleDisplay?.market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(
                  2
                )}
                {"% "}
              </td>
              <td>
                {singleDisplay?.market_data?.price_change_percentage_60d_in_currency?.usd.toFixed(
                  2
                )}
                {"%"}
              </td>
              <td>
                {singleDisplay?.market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(
                  2
                )}{" "}
                {"%"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-3 my-6 sm:grid-cols-2">
        <div>
          <div className="flex justify-around  items-center text-[1.1rem] border-b  border-slate-400">
            <p>24hours low:</p>
            <span>
              {singleDisplay?.market_data?.low_24h?.usd.toLocaleString()}
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-around  items-center text-[1.1rem] border-b border-slate-400">
            <p>24hours high:</p>
            <span>
              {singleDisplay?.market_data?.high_24h?.usd.toLocaleString()}
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center text-[1.1rem] border-b border-slate-400">
            <p>Market cap:</p>
            <span>
              {singleDisplay?.market_data?.market_cap?.usd.toLocaleString()}
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center text-[1.1rem] border-b border-slate-400">
            <p>Total volume:</p>
            <span>
              {singleDisplay?.market_data?.total_volume?.usd.toLocaleString()}
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center text-[1.1rem] border-b border-slate-400">
            <p>developer score:</p>
            <span>{singleDisplay?.developer_score?.toFixed(2)}</span>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center text-[1.1rem] border-b border-slate-400">
            <p>Community score:</p>
            <span>{singleDisplay?.community_score?.toFixed(2)}</span>
          </div>
        </div>
        {/* <div>
          <div className="flex justify-around items-center text-[1.1rem] border-b border-slate-400">
            <p>Last traded:</p>
            <span>{singleDisplay?.tickers[0]?.last_traded_at}</span>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center text-[1.1rem] border-b border-slate-400">
            <p>Trust score:</p>
            <span>{singleDisplay?.tickers[0]?.trust_score}</span>
          </div>
        </div> */}
      </div>
      {/* about section description */}
      <div className="sm:flex sm:w-full w-[90%] mx-auto">
        <p
          className="text-gray-800 my-3 sm:leading-7 text-[1rem]"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(singleDisplay?.description?.en),
          }}
        ></p>
      </div>
    </div>
  );
};

export default DisplayCryptoSingle;
