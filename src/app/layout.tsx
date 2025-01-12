import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "KoinX Assignments",
  description: "KoinX Assignments - Your Cryptocurrency Analysis Platform",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`
          ${poppins.className} 
          antialiased 
          bg-[#EFF2F5] 
          min-h-screen 
          flex 
          flex-col
        `}
      >
        <Header />
        <main className="flex-grow">
          <div
            className=" 
            mx-auto 
            px-4 
            sm:px-6 
            lg:px-0 
            py-4 
            sm:py-6 
            lg:py-8 
            max-w-7xl
            min-h-[calc(100vh-theme(spacing.32))]
          "
          >
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
