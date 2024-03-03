import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollTopButton from "@/components/scroll-top-button/ScrollTopButton";

export const metadata = {
  title: "Sample nextjs 14",
  description: "Sample for projects by nextjs 14",
};

export const viewport = {
  themeColor: "#F5F5F5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <Header />
        {children}
        <ScrollTopButton />
        <Footer />
      </body>
    </html>
  );
}
