import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { api } from "@/lib/api";
import Image from "next/image";

interface IPriceChangePercentage {
  usd: number;
  inr: number;
}

interface ICoinData {
  price: number;
  price_btc: string;
  price_change_percentage_24h: IPriceChangePercentage;
  market_cap: string;
  market_cap_btc: string;
  total_volume: string;
  total_volume_btc: string;
  sparkline: string;
  content: null | string;
}

export interface ICoinItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: ICoinData;
}

export interface ITrendingCoin {
  item: ICoinItem;
}

const TrendingCoinsSection = () => {
  const [trendingCoins, setTrendingCoins] = useState<ITrendingCoin[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      api
        .get("/search/trending")
        .then(({ data }) => setTrendingCoins(data.coins))
        .catch((error) => console.log(error.message));
    }
    fetchTrending();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl border"
    >
      <h3 className="text-xl font-bold mb-4">Trending Coins (24h)</h3>
      <div className="space-y-4">
        {trendingCoins.map((coin, index) => {
          const change = coin.item.data.price_change_percentage_24h.usd;
          return (
            <motion.div
              key={`${coin.item.name}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 relative rounded-full bg-gray-200 flex items-center justify-center">
                  <Image
                    fill
                    src={coin.item.large}
                    alt={coin.item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="font-medium">
                  {coin.item.name} ({coin.item.symbol})
                </span>
              </div>

              <div
                className={`flex items-center gap-1 ${
                  change < 0 ? "bg-red-50" : "bg-green-50"
                } px-2 py-1 rounded-md`}
              >
                {change < 0 ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-red-500 fill-current"
                  >
                    <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-green-500 fill-current"
                  >
                    <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
                  </svg>
                )}
                <span
                  className={`font-medium ${
                    change < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {change.toFixed(2)}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TrendingCoinsSection;
