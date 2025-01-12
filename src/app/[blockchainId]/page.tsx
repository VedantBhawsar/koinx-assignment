"use client";
import AboutSection from "@/components/ui/AboutSection";
import TradingViewWidget from "@/components/ui/TradingViewWidget";
import PerformanceSection from "@/components/ui/PerformanceSection";
import SubSectionTabs, { ActiveTabType } from "@/components/ui/SubSectionTabs";
import GetStartedCard from "@/components/ui/GetStartedCard";
import SentimentDashboard from "@/components/ui/SentimentDashboard";
import TeamSection from "@/components/ui/TeamSection";
import Tokenomics from "@/components/ui/Tokenomics";
import React, { useState } from "react";
import TabContent from "@/components/ui/TabContent";

export default function BlockchainId() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Overview");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-4 sm:py-0 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
        <div className="col-span-1 lg:col-span-4 space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <TradingViewWidget />
          </div>

          <div className="sticky top-0 z-10 bg-gray-50">
            <SubSectionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          {activeTab === "Overview" && (
            <TabContent>
              <AboutSection />
            </TabContent>
          )}

          {activeTab === "Fundamentals" && (
            <TabContent>
              <div className="bg-white rounded-lg p-4 sm:p-6">Coming Soon</div>
            </TabContent>
          )}

          {activeTab === "News Insights" && (
            <TabContent>
              <div className="bg-white rounded-lg p-4 sm:p-6">Coming Soon</div>
            </TabContent>
          )}

          {activeTab === "Sentiments" && (
            <TabContent>
              <SentimentDashboard />
            </TabContent>
          )}

          {activeTab === "Team" && (
            <TabContent>
              <TeamSection />
            </TabContent>
          )}

          {activeTab === "Technicals" && (
            <TabContent>
              <PerformanceSection />
            </TabContent>
          )}

          {activeTab === "Tokenomics" && (
            <TabContent>
              <Tokenomics />
            </TabContent>
          )}
        </div>
        <div className="col-span-1 lg:col-span-2">
          <div className="lg:sticky lg:top-4">
            <GetStartedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
