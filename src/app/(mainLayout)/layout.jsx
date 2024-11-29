import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata = {
  title: "menumoi",
  description: "menumoi",
  icons: "./favicon.ico",
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
