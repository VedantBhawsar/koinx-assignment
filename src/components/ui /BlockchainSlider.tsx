import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlockchainCard from "./BlockchainCard";
import {  ITrendingCoin } from "./TrendingCoinsSection";

interface BlockchainSlideProps {
  data: ITrendingCoin[];
  title: string;
}

const BlockchainSlider = ({ title, data }: BlockchainSlideProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
          pagination={true}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          className="crypto-swiper relative "
        >
          {data.map((crypto, index: number) => (
            <SwiperSlide key={index}>
              <BlockchainCard item={crypto.item} />
            </SwiperSlide>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button-prev absolute left-0 top-1/3 z-10 bg-white shadow-lg rounded-full p-2 "
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button-next absolute right-0 top-1/3 z-10 bg-white shadow-lg rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </Swiper>
      </div>
    </div>
  );
};

export default BlockchainSlider;
