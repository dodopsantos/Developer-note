import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import routes from "./routes";
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './Styles/global';
import ScrollReveal from './utils/ScrollReveal';
import { ThemeProvider } from 'styled-components';

import light from './Styles/themes/light';
import dark from './Styles/themes/dark';

import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    
  }, [location]);

  function toggletheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (    
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggletheme={toggletheme}/>
        
        <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            {routes.map((route, key) => <Route key={key}  exact path={route.path} component={route.component} />)}
          </Switch>
        )} />
      </ThemeProvider>
    </Router>
  );
}

export default App;