import React from 'react';

import {
  Container
} from './styles';


function Home () {

  return (
    <Container>
      <h1 className="reveal-from-bottom" data-reveal-delay="200">
        Landing template for <span>startups</span>
      </h1>   
    </Container>
  );
}

export default Home;