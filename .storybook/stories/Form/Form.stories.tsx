import React from 'react';
import Form from './Form';

const FromMeta = {
    title: 'Form',
    component: Form,
    decorators: [
        Story => (
            <>
                <Form />
            </>
        ),
    ],
};

export default FromMeta;
export const Basic = {};