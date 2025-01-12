import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BlockchainCard from "./BlockchainCard";
import { ITrendingCoin } from "./TrendingCoinsSection";

interface BlockchainSlideProps {
  data: ITrendingCoin[];
  title: string;
}

const BlockchainSlider = ({ title, data }: BlockchainSlideProps) => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6">{title}</h2>

      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {data.map((crypto, index) => (
            <SwiperSlide key={index} className="h-full">
              <BlockchainCard item={crypto.item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination mt-4" />
      </div>
    </div>
  );
};

export default BlockchainSlider;
