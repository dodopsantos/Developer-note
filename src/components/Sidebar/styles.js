import styled from 'styled-components';

export const Container = styled.div`    
    height: 100%;

    .pro-sidebar-footer {
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
            color: white;
            font-size: 30px;
        }  
    }

    @media(max-width: 768px){
        .pro-sidebar{
            height: 92%;
        }        
    }
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: #00d8ff;
`;

export const ToggleBtn = styled.button`
    position: fixed;
    z-index: 1;
    width: 35px;
    height: 35px;
    background: #353535;
    color: #fff;
    text-align: center;
    border-radius: 50%;    
    align-items: center;
    justify-content: center;
    font-size: 15px;
    display: none;
    margin: 10px;

    @media(max-width: 768px){
        display: flex;
    }
`;