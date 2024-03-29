import { B2BservicesSection } from "./pages/b2bservices";
import { HeroPage } from "./pages/hero";
import { TestimonialsSection } from "./pages/testimonials";
import { GeneralServices } from "./pages/gservices";
import Header from "./components/inhome/header";
import { Footer } from "./components/inhome/footer";
import { ValuePage } from "./pages/values";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroPage />
      <ValuePage />
      <GeneralServices />
      <B2BservicesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
