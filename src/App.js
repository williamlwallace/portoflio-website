import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesBg from "particles-bg";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ParticlesBg
        color={"#434343"}
        type="cobweb"
        bg={true}
        className="particles"
      />
      <Header />
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
