import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedCoffee from "../components/FeaturedCoffee/FeaturedCoffee";
import Categories from "../components/Categories/Categories";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Newsletter from "../components/Newsletter/Newsletter";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#2C1810]">
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <FeaturedCoffee />

        <Categories />

        <WhyChooseUs />

        <Testimonials />

        <Gallery />

        <Newsletter />
      </main>

      <ScrollToTop />
    </div>
  );
}