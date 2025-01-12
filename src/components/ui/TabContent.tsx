"use client";
import AboutSection from "@/components/ui/AboutSection";
import TradingViewWidget from "@/components/ui/TradingViewWidget";
import PerformanceSection from "@/components/ui/PerformanceSection";
import SubSectionTabs, { ActiveTabType } from "@/components/ui/SubSectionTabs";
import GetStartedCard from "@/components/ui/GetStartedCard";
import SentimentDashboard from "@/components/ui/SentimentDashboard";
import TeamSection from "@/components/ui/TeamSection";
import Tokenomics from "@/components/ui/Tokenomics";
import { motion } from "framer-motion";
import React, { useState } from "react";

const TabContent = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export default TabContent;
