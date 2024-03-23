import { B2BservicesSection } from "./pages/b2bservices";
import { HeroPage } from "./pages/hero";
import { TestimonialsSection } from "./pages/testimonials";
import { ValuesSection } from "./pages/values";
import Header from "./components/inhome/header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroPage></HeroPage>
      <ValuesSection />
      <B2BservicesSection />
      <TestimonialsSection></TestimonialsSection>
    </>
  );
}
