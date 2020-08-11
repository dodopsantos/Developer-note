import React from 'react';
import Code from '../../../components/Cards/Codes';

import {
  Container
} from './styles';

function Reactjs () {
  const yarn = `yarn create react-app my-app`;
  
  return (    
    
    <Container>      
      <h1 className="reveal-from-bottom" data-reveal-delay="200">
        Get Started
      </h1>
      <Code 
        codeString={yarn}
      />
    </Container>    
  );
}

export default Reactjs;