import React from "react";
import { Car as ChartIcon, Info, TrendingUpIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const SentimentDashboard = () => {
  const eventCards = [
    {
      icon: <ChartIcon size={20} />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      icon: <TrendingUpIcon size={20} />,
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-500",
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm"
    >
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            Sentiment
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
              Key Events
            </h3>
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="w-full"
              >
                {eventCards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`${card.bgColor} p-4 sm:p-6 rounded-xl h-full`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 ${card.iconBg} rounded-lg text-white mt-1`}
                        >
                          {card.icon}
                        </div>
                        <div>
                          <p className="font-medium text-sm sm:text-base mb-2">
                            {card.title}
                          </p>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold">
              Analyst Estimates
            </h3>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center justify-center w-5 h-5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full cursor-help transition-colors"
            >
              <Info className="w-3 h-3" />
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-emerald-50 flex items-center justify-center shrink-0"
            >
              <span className="text-2xl sm:text-3xl font-semibold text-emerald-500">
                76<span className="text-xl">%</span>
              </span>
            </motion.div>

            <div className="flex-1 w-full">
              <div className="space-y-3 sm:space-y-4 w-full">
                <div className="flex items-center gap-4">
                  <span className="w-10 text-sm sm:text-base">Buy</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "76%" }}
                    transition={{ duration: 0.5 }}
                    className="h-2 bg-emerald-500 rounded flex-1 max-w-[76%]"
                  />
                  <span className="text-sm sm:text-base w-12">76%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 text-sm sm:text-base">Hold</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8%" }}
                    transition={{ duration: 0.5 }}
                    className="h-2 bg-gray-200 rounded flex-1 max-w-[8%]"
                  />
                  <span className="text-sm sm:text-base w-12">8%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 text-sm sm:text-base">Sell</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "16%" }}
                    transition={{ duration: 0.5 }}
                    className="h-2 bg-red-500 rounded flex-1 max-w-[16%]"
                  />
                  <span className="text-sm sm:text-base w-12">16%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SentimentDashboard;
