import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import {
    Container
} from './styles';

function Header({ toggletheme }){

    const { colors, title } = useContext(ThemeContext);
   
    return(
        <Container>            
            <h1>Hello World</h1>
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