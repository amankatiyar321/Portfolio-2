import { useContext } from "react";
// import { Navbar } from "react-bootstrap";
import './App.css'
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
// import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Project from "./components/project/Project";
// import Intro from "./components/intro/Intro";
// import ProductList from "./components/productList/ProductList";
import Navbar from "./components/home/Home";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar/>



      <br/>
      <Toggle />
      <Header/>
      <br/>
      <br/>
      <About />
      <br/>
      <br/>
      <Product/>
      <br/>
      <Project/>
      <br/>
      <Contact />
    </div>
  );
};

export default App;
