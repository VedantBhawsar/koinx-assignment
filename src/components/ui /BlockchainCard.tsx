import React from "react";
import Image from "next/image";

interface IItem {
  name: string;
  large: string;
  data: {
    price: number;
    price_change_percentage_24h: {
      usd: number;
    };
    sparkline: string;
  };
  item?: {
    name: string;
  };
}

interface IBlockchainCard {
  item: IItem;
}

const BlockchainCard = ({ item }: IBlockchainCard) => {
  const isPositive = item.data.price_change_percentage_24h.usd > 0;

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:shadow-sm mb-10">
      <div className="flex items-center gap-2 mb-3">
        <Image
          src={item.large}
          alt={`${item.item?.name} icon`}
          width={24}
          height={24}
          className="rounded-full"
        />

        <h1 className="font-semibold text-base line-clamp-1">{item.name}</h1>
        <p
          className={`text-sm px-2 py-0.5  rounded-md ${
            isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          }`}
        >
          {item.data.price_change_percentage_24h.usd.toFixed(2)}%
        </p>
      </div>

      <p className="font-bold text-2xl mb-4">
        {item.data.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          roundingMode: "trunc",
        })}
      </p>

      <div className="relative h-14 w-full">
        <Image
          alt="charts"
          src={item.data.sparkline}
          className="w-full h-14"
          fill
        />
      </div>
    </div>
  );
};

export default BlockchainCard;
