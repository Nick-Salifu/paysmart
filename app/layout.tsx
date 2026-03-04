import type { Metadata } from "next";
import { Chakra_Petch, Inter, Poppins, Sora, Unbounded } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakraPetch",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-unbounded",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PaySmart - Online Payment Platform",
  description: "Carry out your online transaction with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} ${inter.variable} ${poppins.variable} ${unbounded.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
