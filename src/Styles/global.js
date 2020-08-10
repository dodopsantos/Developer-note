import { createGlobalStyle, styled } from 'styled-components';
import img from '../assets/images/illustration-section-01.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    outline: 0;
    box-sizing: border-box;
  }

  body {    
    background-color: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center top;
  }  
`;