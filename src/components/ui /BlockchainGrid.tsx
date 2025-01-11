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
    <div className="pb-10 ">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        Popular Cryptocurrencies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(cryptoData).map(([crypto, symbol]) => (
          <Link
            href={`/${crypto}`}
            key={crypto}
            className="bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-300 
                  shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 relative rounded-full bg-blue-50 flex items-center justify-center">
                  <Image
                    src={cryptoIcons[crypto]}
                    alt={`${crypto} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-blue-900">
                    {capitalizeFirstLetter(crypto)}
                  </h2>
                  <p className="text-sm text-blue-600 mt-1">{symbol}</p>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <ArrowUpRight className="h-4 w-4 text-blue-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlockchainGrid;
