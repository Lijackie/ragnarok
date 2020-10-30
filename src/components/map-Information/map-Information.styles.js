import styled from 'styled-components';

export const MapInformationContainer = styled.div`
    position: absolute;
    width: 550px;
    background: #6c757d;
    left: ${props => props.pos.x}px;
    top: ${props => props.pos.y}px;
    margin: 55px 0px 0px -225px;
    padding-left: 10px;
`;