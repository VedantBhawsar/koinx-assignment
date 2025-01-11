"use client";
import AboutSection from "@/components/ui /AboutSection";
import TradingViewWidget from "@/components/ui /TradingViewWidget";
import PerformanceSection from "@/components/ui /PerformanceSection";
import SubSectionTabs, { ActiveTabType } from "@/components/ui /SubSectionTabs";
import GetStartedCard from "@/components/ui /GetStartedCard";
import SentimentDashboard from "@/components/ui /SentimentDashboard";
import TeamSection from "@/components/ui /TeamSection";
import Tokenomics from "@/components/ui /Tokenomics";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function BlockchainId() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Overview");
  return (
    <div className="px-4 md:px-0 py-2">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="col-span-1 md:col-span-4 flex gap-4 flex-col">
          <TradingViewWidget />
          <SubSectionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "Overview" && <AboutSection />}
          {activeTab === "Fundamentals" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-3"
            >
              comming up
            </motion.div>
          )}
          {activeTab === "News Insights" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-3"
            >
              comming up
            </motion.div>
          )}
          {activeTab === "Sentiments" && <SentimentDashboard />}
          {activeTab === "Team" && <TeamSection />}
          {activeTab === "Technicals" && <PerformanceSection />}
          {activeTab === "Tokenomics" && <Tokenomics />}
        </div>
        <div className="md:col-span-2">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
