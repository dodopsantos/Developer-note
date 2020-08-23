import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 25px 30px;
    padding: 0 15px;
    width: 35%;
    color: '#fff';
    tab-size: 1.5em;
    background: rgb(45,45,45);
    border-radius: 10px;
    overflow: auto;

    @media(max-width: 768px){
        width: 100%;
    }
`;