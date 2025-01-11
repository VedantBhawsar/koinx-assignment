import React from "react";
import { Car as ChartIcon, TrendingUpIcon } from "lucide-react";
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
      className="p-6 bg-white rounded-lg shadow-sm max-w-full mx-auto"
    >
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sentiment</h2>

        {/* Key Events Section */}
        <h3 className="font-semibold text-xl mb-4">Key Events</h3>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="w-full"
          >
            {eventCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`${card.bgColor} p-4 rounded-lg h-full`}>
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 ${card.iconBg} rounded-lg text-white mt-1`}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <p className="font-medium mb-2">{card.title}</p>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-medium">Analyst Estimates</h3>
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-gray-100 rounded-full">
            i
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center">
            <span className="text-3xl font-semibold text-emerald-500">
              76<span className="text-xl">%</span>
            </span>
          </div>

          <div className="flex-1">
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-4">
                <span className="w-10 text-sm">Buy</span>
                <div
                  className="h-2 bg-emerald-500 rounded "
                  style={{ width: "76%" }}
                ></div>
                <span className="text-sm">76%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 text-sm">Hold</span>
                <div
                  className="h-2 bg-gray-200 rounded"
                  style={{ width: "8%" }}
                ></div>
                <span className="w-12 text-sm">8%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 text-sm">Sell</span>
                <div
                  className="h-2 bg-red-500 rounded"
                  style={{ width: "16%" }}
                ></div>
                <span className="w-12 text-sm">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SentimentDashboard;
