import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bestseller from "./components/Bestseller";
import Schedule from "./components/Schedule";
// import InstagramFeed from "./components/Instagramfeed";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import About from "./components/About";
import RealHome from  "./components/RealHome";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bestseller />
      <Schedule />
      <About/>
      <RealHome/>
      {/* <InstagramFeed /> */}
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;