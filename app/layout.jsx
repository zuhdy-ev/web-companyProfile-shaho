import "../styles/globals.css";
import Footer from "../components/Footer";
import logoShahoMin from "@/public/logo/logoShahoMin.png";

export const metadata = {
  title: "Batik Shaho",
  description: "Batik Shaho 2023",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shotcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
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
