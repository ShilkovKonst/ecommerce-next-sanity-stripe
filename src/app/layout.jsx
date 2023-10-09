import { Footer, Navbar } from "@/_components";
import "./globals.css";
import { Inter } from "next/font/google";
import { StateContext } from "@/_context/StateContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "Accueil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <StateContext>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </StateContext>
      </body>
    </html>
  );
}
