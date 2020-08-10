import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
    Container
} from './styles';

function Code (props) {

    return (
        <Container >
            <SyntaxHighlighter language="javascript" style={tomorrow}>
                {props.codeString}
            </SyntaxHighlighter>
        </Container>
    )
};

export default Code;