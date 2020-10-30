import styled from 'styled-components';

export const WarningContainer = styled.div`
    background-color: #f5c6cb;
    margin: 50px 40px 40px 30px;
    border: 1px solid transparent;
    padding: 0.75rem 1.25rem;

    @media (max-width: 768px) {
        margin: 150px auto;
        width: 80%;
        
    }
`;

export const Title = styled.h2`
    color: #721c24;
`;

export const P = styled.p`
    color: #721c24;
    font-size: 1.25rem;
`;