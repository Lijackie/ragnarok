import React from 'react';

import { MapInformationContainer } from './map-Information.styles';

const MapInformation = ({ pos }) => {
    return (
        <MapInformationContainer pos={pos}>
            Hello
        </MapInformationContainer>
    );
};

export default MapInformation;