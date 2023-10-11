import React from 'react';
import Map from './Map';

const MapMeta = {
    title: 'Map',
    component: Map,
    decorators: [
        Story => (
            <>
                <Map />
            </>
        ),
    ],
};

export default MapMeta;
export const Basic = {};