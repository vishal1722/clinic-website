import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Doctors from "../components/Doctors";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Services />
      {/* <WhyChooseUs /> */}
      <Doctors />
      <CTA />
      <Footer />
    </>
  );
}
