import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cryptoData = {
  solana: "solUSD",
  ethereum: "ethUSD",
  bitcoin: "btcUSD",
  cardano: "adaUSD",
  polkadot: "dotUSD",
  avalanche: "avaxUSD",
  binancecoin: "bnbUSD",
  ripple: "xrpUSD",
  dogecoin: "dogeUSD",
  litecoin: "ltcUSD",
  chainlink: "linkUSD",
  stellar: "xlmUSD",
  tron: "trxUSD",
  cosmos: "atomUSD",
  polygon: "maticUSD",
  tezos: "xtzUSD",
  filecoin: "filUSD",
  algorand: "algoUSD",
  vechain: "vetUSD",
};

export const cryptoIcons: Record<string, string> = {
  solana: "/images/crypto/solana.png",
  ethereum: "/images/crypto/ethereum.png",
  bitcoin: "/images/crypto/bitcoin.png",
  cardano: "/images/crypto/cardano.webp",
  polkadot: "/images/crypto/polkadot.png",
  avalanche: "/images/crypto/avalanche.png",
  binancecoin: "/images/crypto/binance.png",
  ripple: "/images/crypto/ripple.webp",
  dogecoin: "/images/crypto/dogecoin.png",
  litecoin: "/images/crypto/litecoin.jpg",
  chainlink: "/images/crypto/chainlink.png",
  stellar: "/images/crypto/stellar.png",
  tron: "/images/crypto/tron.png",
  cosmos: "/images/crypto/cosmos.webp",
  polygon: "/images/crypto/polygon.png",
  tezos: "/images/crypto/tezos.png",
  filecoin: "/images/crypto/filecoin.png",
  algorand: "/images/crypto/algorand.webp",
  vechain: "/images/crypto/vechain.png",
};

const BlockchainGrid = () => {
  const capitalizeFirstLetter = (crypto: string) => {
    return crypto.charAt(0).toUpperCase() + crypto.slice(1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-blue-600">
        Popular Cryptocurrencies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {Object.entries(cryptoData).map(([crypto, symbol]) => (
          <Link
            href={`/${crypto}`}
            key={crypto}
            className="bg-white rounded-lg p-3 sm:p-4 lg:p-5 border border-blue-100 hover:border-blue-300 
                      shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative rounded-full bg-blue-50 flex items-center justify-center">
                  <Image
                    src={cryptoIcons[crypto]}
                    alt={`${crypto} icon`}
                    fill
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900">
                    {capitalizeFirstLetter(crypto)}
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-600 mt-0.5 sm:mt-1">
                    {symbol}
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-1.5 sm:p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 group-hover:text-blue-600" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlockchainGrid;