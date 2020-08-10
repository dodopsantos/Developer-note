import React from 'react';
import { Container } from './styles';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function SideBar() {
    return (
        <Container>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>
                    <SubMenu title="Components">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </Container>
    );
}

export default SideBar;