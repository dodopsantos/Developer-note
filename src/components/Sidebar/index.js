import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import img from '../../assets/images/bg1.74aaeeb9.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAnchor } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { 
    Container,
    Title,
    ToggleBtn
} from './styles';

function SideBar() {
    const [toggle, setToggle] = useState(true);

    function handleToggle() {
        toggle ? setToggle(false) : setToggle(true);
    }

    return (
        <Container>
            <ProSidebar breakPoint="md" toggled={toggle} onToggle={handleToggle} image={img}>
                <SidebarHeader>
                    <Title>React JS</Title>
                </SidebarHeader>
                <SidebarContent>
                <Menu iconShape="round">
                    <MenuItem icon={<FontAwesomeIcon icon={faPlay} />} >Iniciando Projeto</MenuItem>
                    <SubMenu title="Hook" icon={<FontAwesomeIcon icon={faAnchor}/>}>
                    <MenuItem>useState</MenuItem>
                    <MenuItem>useEffect</MenuItem>
                    </SubMenu>
                </Menu>
                </SidebarContent>
                <SidebarFooter>
                    {/* <Flex> */}
                        <a href="https://github.com/dodopsantos" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                    {/* </Flex> */}
                </SidebarFooter>
            </ProSidebar>
            <ToggleBtn onClick={handleToggle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></ToggleBtn>
        </Container>
    );
}

export default SideBar;