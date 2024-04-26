import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import SideBar from "./component/sidbar/Sidebar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body suppressHydrationWarning={true}>
        <div className="font-sans">
          <Navbar />
          <div className="grid grid-cols-12">
            <div className="col-span-2 border-r-2 bg-bg-red border-red-300 h-svh">
              {/* <Navbar /> */}
              <SideBar />
            </div>
            <div className="col-span-10">
              <div className="xl:container mx-auto p-10">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}