import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { api } from "@/lib/api";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import Image from "next/image";

interface IBlockchain {
  id: string;
  name: string;
  description: {
    en: string;
  };
}

const AboutSection = ({}) => {
  const [coin, setCoin] = useState<IBlockchain | null>(null);
  const { blockchainId } = useParams() as {
    blockchainId: string;
  };

  useEffect(() => {
    async function fetchCoin() {
      api
        .get(
          `/coins/${blockchainId}?localization=true&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true`
        )
        .then(({ data }) => setCoin(data))
        .catch((error) => {
          console.log(error);
        });
    }
    if (blockchainId) fetchCoin();
  }, [blockchainId]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
          About {coin?.name}
        </h2>

        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
              What is {coin?.name}?
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg mb-4 sm:mb-6 text-sm sm:text-base text-gray-700 prose prose-sm sm:prose-base max-w-none"
            >
              {!coin ? (
                <Skeleton count={15} className="h-4 sm:h-5" />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: coin?.description?.en,
                  }}
                />
              )}
            </motion.div>
          </div>

          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-4">
              Already Holding {coin?.name}?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 sm:p-6 rounded-xl text-white">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0">
                    <Image
                      src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIpcdewbeHvpF0MrAHY9Lvoj0pca~n77kDxgd55mI~LL6DhUVkQkiHr5pBEMM7AtTgJ3r50AD5rDtCXdoDGT56v03G1oM0r4wyjQQsqlRn7plrafv4xMISOsNszaNThUXSJrUlWt~XLXr7r86YIkB5PwI3lVDyklbGy~48E2qc86bk25uWBfyp2yk-BGZORYlvmG4DNJRnQ8qtcIJ8nj1kxPzIKT4O676Cdkfd09WRDGFQLhBevRjdipHN7UW6y1LZz651u9k7qWHX-nCLWNBhpwzx4i0aH4FddzREaKCwnmK~DAkruz1qAfUnsFZLCClIobUtEFP58DdJkB8Iyc1A__"
                      fill
                      alt="Calculate Profits"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-4 sm:gap-0 text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-semibold mb-5">
                      Calculate your Profits
                    </h4>
                    <button className="bg-white text-black px-4 py-2 w-fit rounded-lg font-medium flex items-center gap-2 mx-auto sm:mx-0 hover:bg-gray-50 transition-colors">
                      Check Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 sm:p-6 rounded-xl text-white">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0">
                    <Image
                      src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4l6utWlIkrTQzqt77v9j0~gF~vbeJRrczq6KNeIyXwZT~GK~Lf~qi4wM95eBzMG3moI5HEb268uf2MKQuKUD6wweZBgLLHTk6QZsDSs8nG7Nz7CiR-h5Iw79zDhEU19rKCbLW~hJ1zjAjS0~-knfUlYgUq6TKJUUkaU0x3gNR0JFYjAUFYU5mGq~tfgaFpijbiNjl5z4AC4OllIoyuSrVGxTQu6~FX2-Fuzr8K3235R65bN7rlrzduhg6fIoYkkdy4zWD2~fnmekMZ5soQX0Vk~S3eDEs8YmPn5A6xFzi~MiO53Xe2K6bBVVtGA-eY-urXUeeYJHhrTlxAmvlSIyA__"
                      alt="Calculate Tax"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-4 sm:gap-0 text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-semibold mb-5">
                      Calculate your Tax
                    </h4>
                    <button className="bg-white w-fit text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2 mx-auto sm:mx-0 hover:bg-gray-50 transition-colors">
                      Check Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
