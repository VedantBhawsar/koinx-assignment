"use client";
import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ITrendingCoin } from "./ui/TrendingCoinsSection";
import BlockchainSlider from "./ui/BlockchainSlider";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";

const Footer = () => {
  const [trendingCoins, setTrendingCoins] = useState<ITrendingCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrending() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await api.get("/search/trending");
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error("Failed to fetch trending coins:", error);
        setError("Failed to load trending coins. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchTrending();
  }, []);

  const reverseTrendingCoins = [...(trendingCoins || [])].reverse();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white border-t"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {error ? (
          <div className="text-center text-red-500 py-4">{error}</div>
        ) : loading ? (
          <div className="space-y-8">
            <div>
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-32" />
            </div>
            <div>
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-32" />
            </div>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <BlockchainSlider
                title="You May Also Like"
                data={reverseTrendingCoins}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <BlockchainSlider title="Trending Coins" data={trendingCoins} />
            </motion.div>
          </div>
        )}
      </div>
    </motion.footer>
  );
};

export default Footer;
