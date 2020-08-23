import styled from 'styled-components';

export const Container = styled.div`
    height: 8vh;
    background-color: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

export const Title = styled.h1`
	
    @media(max-width: 768px){
        font-size: 15px;
    }
`;