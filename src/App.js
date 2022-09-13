import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App =() => {
  return (
    <div className="bg-[#f6f8fa] dark:bg-[#010409] h-screen">
    <Router>   
        <Header />
        <Switch>
        <Route exact path ="/" render={About}/>
        <Route exact path ="/projects" render={Projects}/>
        <Route exact path ="/contact" render={Contact}/>
        </Switch>
        <Footer/>
    </Router>
    
  </div>
  );
}

export default App;
