import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/">   
        <Header />
        <Switch>
        <Route exact path = {process.env.PUBLIC_URL + '/'} render={About}/>
        <Route exact path = {process.env.PUBLIC_URL +'/projects'} render={Projects}/>
        <Route exact path = {process.env.PUBLIC_URL +'/contact'} render={Contact}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
