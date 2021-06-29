import Intro from "./components/Intro";
import About from "./components/About";
import Dev from "./components/Dev";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Nav />
      <div>
        <Intro />
        <About />
        <Dev />
        <Contact />
      </div>
    </div>
  );
}

export default App;
