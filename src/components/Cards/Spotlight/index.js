import React from 'react';

import {
    Container
} from './styles';

function Spotlight (props) {

    return (
        <Container >
            {props.data}
        </Container>
    )
};

export default Spotlight;