import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TrendingCoinsSection from "./TrendingCoinsSection";
import Image from "next/image";

const GetStartedCard = () => {
  return (
    <div className=" space-y-6">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0052FE] text-white p-8 rounded-2xl text-center"
      >
        <motion.h2
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get Started with KoinX
        </motion.h2>
        <motion.h3
          className="text-xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          for FREE
        </motion.h3>
        <motion.p
          className="text-gray-100 mb-8 max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </motion.p>

        {/* Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mb-8 relative w-48 h-48 mx-auto"
        >
          <Image
            src="/sidebar-img.png"
            fill
            alt="Tax Report Illustration"
            className=" w-48 h-48"
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto"
        >
          Get Started for FREE
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
      <TrendingCoinsSection />
    </div>
  );
};

export default GetStartedCard;
