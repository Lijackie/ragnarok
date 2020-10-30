import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const inlineCSS = css`
    margin-right: 10px;
    border-radius: 10px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    background-color: #343a40;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    height: 3.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Div = styled.div`
    display: flex;
    padding-left: 1rem;
    align-items: center;
`;

export const P = styled.p`
    padding-left: 10px;
    color: white;
    margin: auto;
`;

export const LinkIcon = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
        color: white;
    }
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
`;

export const Form = styled.form`
    
    @media (max-width: 769px) {
        margin: 30px;
        display: flex;
        flex-direction: column;
        width: 80%;
    }
`;

export const Input = styled.input`
    ${inlineCSS};
`;

export const StyledSelect = styled.select`
    ${inlineCSS};

`;

export const ButtonSubmit = styled.button`
    ${inlineCSS};

`;