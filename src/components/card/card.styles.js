import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    margin: 1rem;
`;

export const CardHeader = styled.div`
    background-color: #f8f9fa;
    padding: 10px 0 10px 20px;

    span {
        background-color: #17a2b8;
        border-radius: 5px;
    }

    img {
        padding-left: 5px;
    }
`;

export const NameLink = styled(Link)`
    text-decoration: none;
    color: #007bff;

    &:hover {
        text-decoration: underline;
    }
`;