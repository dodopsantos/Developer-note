import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import logo from '../../assets/images/Screenshot_2.png';

import {
    Container,
    Title
} from './styles';

function Header({ toggletheme }){

    const { colors, title } = useContext(ThemeContext);
   
    return(
        <Container>
            <Link to="/"><img src={logo} width={96} height={60}></img></Link>
            <Title>Developer Note</Title>
            <Switch 
                onChange={toggletheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.2, colors.secundary)}
                onColor={colors.secundary}
            />
        </Container>
    );
}

export default Header;