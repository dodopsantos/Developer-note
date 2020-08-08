import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import routes from "./routes";
import './App.css';
import ScrollReveal from './utils/ScrollReveal';

import Header from './components/Header';

function App() {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    
  }, [location]);

  return (
    <Router>
      <Header />
      
      <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          {routes.map((route, key) => <Route key={key}  exact path={route.path} component={route.component} />)}
        </Switch>
      )} />
    </Router>
  );
}

export default App;