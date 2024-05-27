import Navbar from "./Components/Navbar";
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import WorkFlow from './Components/WorkFlow';
import PrizeCards from './Components/PrizeCards';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <WorkFlow/>
      <PrizeCards />
      <Testimonials />
      <Footer/>
      
    </div>
  );
}

export default App;
