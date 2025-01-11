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
        // @ts-expect-error This will show the undefined
        if (typeof TradingView !== "undefined" && containerRef.current) {
          // @ts-expect-error This will show the undefined
          new TradingView.widget({
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
          });
        }
      };

      document.head.appendChild(script);

      return () => {
        // Cleanup
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
  }, [blockchainId]);

  const displayName = cryptoNameMap[blockchainId.toLowerCase()] || blockchainId;

  return (
    <div className="w-full bg-white rounded-lg p-5 shadow-sm pb-16">
      <div className="flex gap-3 items-center mb-4">
        <Image
          src={cryptoIcons[blockchainId]}
          alt="logo"
          height={24}
          width={24}
          className="rounded-full"
        />
        <h1 className="font-bold  text-xl capitalize">{displayName}</h1>
      </div>
      <div className="w-full min-h-[400px] h-[400px]">
        <div
          id="tradingview_widget"
          ref={containerRef}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default TradingViewWidget;
