import React from 'react';
import Code from '../../../components/Cards/Codes';
import Spotlight from '../../../components/Cards/Spotlight';
import Commands from '../../../components/Cards/Commands';

import {
  Container,
  Title,
  SubTitle,
  Center,
  Section
  
} from './styles';

function Reactjs () {
  const yarn = `yarn create react-app my-app`;
  
  return (    
    
    <Container>
      <Center>
        <Title className="reveal-from-bottom" data-reveal-delay="200">
          Iniciando projeto
        </Title>
      </Center>
      <SubTitle className="reveal-from-bottom" data-reveal-delay="200">Windows</SubTitle>
      <Section>
        1º Passo: Instalar o Chocolatey → Execute o comando<Spotlight data="Get-ExecutionPolicy"/> Se ele retornar "Restricted", execute<Spotlight data="Set-ExecutionPolicy Bypass -Scope Process"/>
      </Section>
      <Section>     
        
      </Section>
      {/* <Center>
        <Code
          codeString={yarn}
        />
      </Center> */}
    </Container>    
  );
}

export default Reactjs;