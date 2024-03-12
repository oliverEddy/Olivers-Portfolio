
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";

import "aos/dist/aos.css";


function App() {
  

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;