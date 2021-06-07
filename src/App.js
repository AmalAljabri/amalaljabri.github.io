import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>   
        <Header />
        <Switch>
        <Route exact path ='/' render={About}/>
        <Route exact path ='/projects' render={Projects}/>
        <Route exact path ='/contact' render={Contact}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
