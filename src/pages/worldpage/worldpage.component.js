import React, { useState } from 'react';

import Map from '../../components/map/map.component';
import MapInformation from '../../components/map-Information/map-Information.component';

import { Td } from './worldpage.styles';

const worldPosition1 = [
    0, 0, 0, 0, 'ice_dun04.png', 0, 'ice_dun03.png', 0, 0, 0, 0, 0, 0, 0, 'tha_scene01.png', 0, 0, 0, 0, 0, 0, 0,
];

const worldPosition2 = [
    0, 0, 0, 0, 0, 0, 'ice_dun02.png', 0, 0, 0, 0, 0, 0, 0, 'hu_fild01.png', 'hu_fild02.png', 0, 'hugel.png', 0, 0, 0, 0,
]

const WorldPage = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [view, setView] = useState(false);

    return (
        <div>
            <table>
                <tbody>
                    <tr >
                        {worldPosition1.map(world => world !== 0 ? (<Map map={world} onPosition={position => setPosition(position)} onView={() => setView(!view)} />) : (<Td />))}
                    </tr>
                    <tr >
                        {worldPosition2.map(world => world !== 0 ? (<Map map={world} onPosition={position => setPosition(position)} onView={() => setView(!view)} />) : (<Td />))}
                    </tr>
                </tbody>
                {view !== false ? <MapInformation pos={position}></MapInformation> : null}
            </table>
        </div>
    );
};

export default WorldPage;