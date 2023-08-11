import "../styles/globals.css";
// import { Inter } from "next/font/google";
import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Batik Shaho",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

// className={inter.className}
