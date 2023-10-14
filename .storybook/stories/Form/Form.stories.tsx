import React from 'react';
import Form from "./TextInputForm";

const FormMeta = {
    title: 'Form',
    component: Form,
    decorators: [
        Story => (
            <>
                <Form   
                    title='First Name'
                    titleStyle={{color:'#000'}}
                    textInputStyle={{color:'#fff'}}
                /> 
            </>
        ),
    ],
};

export default FormMeta;
export const Basic = {};