import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

interface Performance {
  market_data: {
    current_price: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    price_change_percentage_7d: number;
    total_volume: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    market_cap_change_percentage_24h: number;
  };
  market_cap_rank: number;
  tickers: {
    converted_volume: {
      usd: number;
    };
  }[];
}

const PerformanceSection = () => {
  const { blockchainId } = useParams();
  const [performance, setPerformance] = useState<Performance | null>(null);

  useEffect(() => {
    async function fetchPerformance() {
      api
        .get(
          `/coins/${blockchainId}?localization=false&tickers=true&community_data=false&developer_data=false&sparkline=false`
        )
        .then(({ data }) => setPerformance(data))
        .catch((error) => console.log(error));
    }
    if (blockchainId) fetchPerformance();
  }, [blockchainId]);

  if (!performance) {
    return <>loading</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-sm max-w-full"
    >
      {/* Performance Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Performance</h2>
        </div>

        {/* Today's Range */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <div className="flex items-center gap-2">
              <span>Today&apos;s Low</span>
            </div>
            <span>Today&apos;s High</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">46,930.22</span>
            <div className="flex-1 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded relative">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-black"></div>
              </div>
            </div>
            <span className="text-sm">{}</span>
          </div>
          <div className="text-center text-sm mt-1">$</div>
        </div>

        {/* 52W Range */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">16,930.22</span>
            <div className="flex-1 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded"></div>
            <span className="text-sm">49,743.83</span>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-xl font-semibold">Fundamentals</h3>
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-gray-100 rounded-full">
            i
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Bitcoin Price</span>
              <span className="font-medium">
                {formatToUSD(performance?.market_data?.current_price.usd)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">24h Low / 24h High</span>
              <span className="font-medium">
                {formatToUSD(performance?.market_data?.low_24h.usd) +
                  " / " +
                  formatToUSD(performance?.market_data?.high_24h.usd)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">7d Low / 7d High</span>
              <span className="font-medium">
                {performance?.market_data?.price_change_percentage_7d}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Trading Volume</span>
              <span className="font-medium">
                {formatToUSD(performance?.market_data?.total_volume.usd)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Market Cap Rank</span>
              <span className="font-medium">
                #{performance?.market_cap_rank}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Market Cap</span>
              <span className="font-medium">
                {formatToUSD(performance?.market_data?.market_cap?.usd)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Market Cap Dominance</span>
              <span className="font-medium">
                {performance?.market_data?.market_cap_change_percentage_24h.toFixed(
                  2
                )}
                %
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Volume / Market Cap</span>
              <span className="font-medium">
                {performance.tickers &&
                  formatToUSD(performance?.tickers[0]?.converted_volume.usd)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">All-Time High</span>
              <div className="text-right">
                <div className="flex justify-end gap-1 items-center">
                  <div className="font-medium">
                    ${(69044.77).toLocaleString()}
                  </div>
                  <div className="text-red-500 text-sm">-75.6%</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">All-Time Low</span>
              <div className="text-right">
                <div className="flex justify-end gap-1 items-center">
                  <div className="font-medium">${(67.81).toLocaleString()}</div>
                  <div className="text-green-500 text-sm">29.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceSection;

function formatToUSD(number: number) {
  if (isNaN(number)) {
    return "Invalid input";
  }
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    roundingMode: "trunc",
  });
}
