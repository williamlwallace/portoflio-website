import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import useDarkMode from 'use-dark-mode';

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <Header darkMode={darkMode}/>
      <Home darkMode={darkMode}></Home>
      <About></About>
      <Projects darkMode={darkMode}></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
