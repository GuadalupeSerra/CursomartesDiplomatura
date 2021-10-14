
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import './App.css';

import ContactPage from '../src/pages/ContactPage'
import HomePage from '../src/pages/HomePage';
import NosotrosPage from '../src/pages/NosotrosPage';
import ProductosPage from '../src/pages/ProductosPage';
import Footer from '../src/components/layout/Footer';
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';




function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/productos" exact component={ProductosPage} />
        <Route path="/contacto" exact component={ContactPage} />
      </Switch>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
