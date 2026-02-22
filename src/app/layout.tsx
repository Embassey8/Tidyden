import { Poppins , Montserrat_Alternates} from "next/font/google";

import type React from "react"; // Import React
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TidyDen",
  description: "TidyDen - Your Clean Service Partner",
 
 
};

const poppins = Poppins({
  subsets: ["latin"],
  //from 300
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserratalternates = Montserrat_Alternates({
  subsets: ["latin"],

  variable: "--font-montserrat-alternates",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans ${montserratalternates.variable} font-montserrat-alternates`}>{children}</body>
    </html>
  );
}
