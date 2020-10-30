import styled from 'styled-components';

export const HomeImageContainer = styled.nav`
    width: 54rem;
    height: 32rem;
    margin: 10px auto;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
        z-index: 10;
        padding: 0 10px;
        color: #fff;
        cursor: pointer;
    }
`;

export const Img = styled.img`
    z-index: -1;
    position: absolute;
    width: 100%;
`;