import { B2BservicesSection } from "./pages/b2bservices";
import { HeroPage } from "./pages/hero";
import { TestimonialsSection } from "./pages/testimonials";
import Header from "./components/inhome/header";
import { Footer } from "./components/inhome/footer";
import { ValuePage } from "./pages/values";
import Head from "next/head";
import { GServices } from "./pages/gservices";
import Popup from "./components/inhome/popups/temporary-popup";

export default function Home() {
  return (
    <>
      <Popup />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroPage />
      <ValuePage />
      <GServices />
      <B2BservicesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
