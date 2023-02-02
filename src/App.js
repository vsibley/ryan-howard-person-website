import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Videos from './components/Videos';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reviews />
      <AboutMe />
      <Videos />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
