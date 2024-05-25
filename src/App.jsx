import Navbar from "./Components/Navbar";
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import WorkFlow from './Components/WorkFlow';
import PrizeCards from './Components/PrizeCards';
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <WorkFlow/>
      <PrizeCards />
      
    </div>
  );
}

export default App;
