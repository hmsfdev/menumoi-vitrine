import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata = {
  title: "MenuMoi - Simplifiez vos menus",
  description: "Transformez vos menus en expériences numériques modernes avec MenuMoi.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "menu digital, restaurant, QR code, gestion de commandes, MenuMoi,reservation,manger,uber",
  author: "MenuMoi",
};


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
