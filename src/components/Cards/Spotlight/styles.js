import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    padding: 1px 5px;
    margin: 0 10px;
    border-radius: 3px;
`;