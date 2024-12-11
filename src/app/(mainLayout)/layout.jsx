import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata = {
  title: "MenuMoi - La solution tout-en-un pour la gestion de restaurant",
  description: "MenuMoi transforme l'expérience des restaurants avec un menu digital personnalisable, la gestion des commandes, et la réservation de tables.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "menu digital, gestion de restaurant, QR code, gestion des commandes, réservation de table, application cuisine, MenuMoi",
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
