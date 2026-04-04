import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sermons from "./components/Sermons";
import Events from "./components/Events";
import Connect from "./components/Connect";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Sermons />
      <Events />
      <Connect />
      <Donate />
      <Footer />
    </>
  );
}

export default App;
