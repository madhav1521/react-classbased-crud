import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik'
import React from 'react'

type TextFieldProps = {
    label:string;
    name:string;
    type:string;
}
function FormComponents({label,name,type}:TextFieldProps) {
    return (
        <div className="form-fields">
            <label htmlFor={label}>{name}</label>
            <Field label={label} type={type} name={label} />
            <ErrorMessage name={label} component="div" className="error" />
        </div>
    )
}

export default FormComponents
