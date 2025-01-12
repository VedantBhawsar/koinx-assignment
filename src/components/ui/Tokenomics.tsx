import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

interface TokenDistribution {
  name: string;
  value: number;
  color: string;
}

interface RenderLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

const Tokenomics = () => {
  const distributionData: TokenDistribution[] = [
    { name: "Crowdsale investors", value: 80, color: "#0082FF" },
    { name: "Foundation", value: 20, color: "#FFA500" },
  ];


  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: RenderLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
        Tokenomics
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Initial Distribution
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-[300px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    innerRadius={60}
                    dataKey="value"
                    stroke="none"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </Pie>
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                <h4 className="font-semibold mb-2">Distribution Details</h4>
                <p className="text-sm text-gray-600">
                  The initial token distribution was designed to ensure a fair
                  and balanced allocation, with 80% allocated to crowdsale
                  investors to promote decentralization, while 20% was reserved
                  for the foundation to support ongoing development and
                  ecosystem growth.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-4 sm:p-6">
                <h4 className="font-semibold mb-2">Vesting Schedule</h4>
                <p className="text-sm text-gray-600">
                  Foundation tokens are subject to a 4-year vesting schedule
                  with a 1-year cliff, ensuring long-term alignment of
                  interests. Crowdsale tokens were distributed immediately after
                  the ICO.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">
            Token Utility & Governance
          </h3>
          <div className="text-gray-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
              ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
              bibendum amet enim sit eget leo amet. At metus orci augue fusce
              eleifend lectus eu fusce adipiscing.
            </p>
            <p>
              Volutpat ultrices nibh sodales massa habitasse urna felis augue.
              Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
              aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in
              at curabitur sem posuere facilisis vitae.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tokenomics;
