import React, { useRef } from 'react';

const Map = ({ map, onPosition, onView}) => {
    const mapRef = useRef();

    const handlePosition = () => {
        const { x, y } = mapRef.current.getBoundingClientRect()
        onPosition({x, y});
    };

    return(
        <td onClick={() => {
            handlePosition();
            onView();
        }} ref={mapRef}>
            <img src={'images/world/' + map} alt="map" />
        </td>
    )
};

export default Map;