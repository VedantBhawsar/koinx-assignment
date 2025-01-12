import { useParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { cryptoIcons } from "./BlockchainGrid";
import Image from "next/image";

const cryptoNameMap: Record<string, string> = {
  solana: "Solana",
  ethereum: "Ethereum",
  bitcoin: "Bitcoin",
  cardano: "Cardano",
  polkadot: "Polkadot",
  avalanche: "Avalanche",
  binancecoin: "Binance Coin",
  ripple: "Ripple",
  dogecoin: "Dogecoin",
  litecoin: "Litecoin",
  chainlink: "Chainlink",
  stellar: "Stellar",
  tron: "TRON",
  cosmos: "Cosmos",
  polygon: "Polygon",
  tezos: "Tezos",
  filecoin: "Filecoin",
  algorand: "Algorand",
  vechain: "VeChain",
};

function convertToUSD(symbol: string): string | null {
  const conversions: Record<string, string> = {
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

  return conversions[symbol.toLowerCase()] || null;
}

function TradingViewWidget() {
  const { blockchainId } = useParams() as { blockchainId: string };
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTradingViewWidget = () => {
      const symbol = convertToUSD(blockchainId);
      if (!symbol) {
        console.error(`Invalid blockchain ID: ${blockchainId}`);
        return;
      }

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        if (typeof window.TradingView !== "undefined" && containerRef.current) {
          new window.TradingView.widget({
            container_id: "tradingview_widget",
            symbol: `BITSTAMP:${symbol}`,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "2",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            save_image: false,
            height: "100%",
            width: "100%",
            hide_side_toolbar: window.innerWidth < 768,
            hide_volume: window.innerWidth < 480,
          });
        }
      };

      document.head.appendChild(script);

      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        const existingScript = document.querySelector(
          'script[src="https://s3.tradingview.com/tv.js"]'
        );
        if (existingScript) {
          existingScript.remove();
        }
      };
    };

    loadTradingViewWidget();
    
    const handleResize = () => {
      loadTradingViewWidget();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [blockchainId]);

  const displayName = cryptoNameMap[blockchainId.toLowerCase()] || blockchainId;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-3 sm:p-4 lg:p-5">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="relative w-6 h-6 sm:w-8 sm:h-8">
            <Image
              src={cryptoIcons[blockchainId]}
              alt={`${displayName} logo`}
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="font-bold text-lg sm:text-xl lg:text-2xl capitalize">
            {displayName}
          </h1>
        </div>
        
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              id="tradingview_widget"
              ref={containerRef}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    TradingView: any;
  }
}

export default TradingViewWidget;