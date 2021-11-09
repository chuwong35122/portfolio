import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Contracts from "../components/Contracts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900 h-screen">
      <Contracts />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
