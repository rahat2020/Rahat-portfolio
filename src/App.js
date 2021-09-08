import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Portfolio from './components/Portfolio/Portfolio';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {

  return (
    <div className="App">
       
      <Router>
        <MessengerCustomerChat
          pageId="101340032265864"
          appId="180668834020407"
        />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
