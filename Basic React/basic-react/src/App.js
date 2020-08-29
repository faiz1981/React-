import React from 'react';
import './App.css';
import About from './Components/About';
import Shop from './Components/Shop';
import Contact from './Components/contactus';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './Components/Home';
import Item from './Components/Item';



function App() {
  return (
   <Router>
      <div className='App' >
       <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Shop" exact component={Shop}/>
        <Route path="/contact-us" component={Contact}/>
        <Route path="/Shop/:id" component={Item}/> 
        <Route path="*" component={()=><h1>404 Page not found</h1>} />           
        </Switch>
     </div>
     
    </Router>
  );
}

export default App;
