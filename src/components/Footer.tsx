"use client";
import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ITrendingCoin } from "./ui /TrendingCoinsSection";
import BlockchainSlider from "./ui /BlockchainSlider";

const Footer = () => {
  const [trendingCoins, setTrendingCoins] = useState<ITrendingCoin[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const { data } = await api.get(
          "/search/trending"
        );
        setTrendingCoins(data.coins);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrending();
  }, []);

  const reverseTrendingCoins = [...trendingCoins].reverse();
  return (
    <div className="bg-white px-5 md:px-0">
      <div className="max-w-7xl mx-auto py-5 md:py-10">
        <BlockchainSlider
          title="You May Also Like"
          data={reverseTrendingCoins}
        />
        <BlockchainSlider title="Trending Coins" data={trendingCoins} />
      </div>
    </div>
  );
};

export default Footer;
