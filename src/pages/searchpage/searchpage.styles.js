import styled from 'styled-components';

/*
export const SearchPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    
    p {
        padding: 1rem;
        text-align: justify;
    }
`;*/


export const SearchPageContainer = styled.div`
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    margin: auto;

    p {
        padding: 1rem;
    }

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 414px) {
        grid-template-columns: 1fr;
    }
`;
