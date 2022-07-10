import { useState } from "react";



export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const onChange = (event) => {
        let eName = event.target.name;
        let eValue = event.target.value;
        eValue = eValue.trim().replace(/\s\s+/g, ' ');
        setValues({ ...values, [eName]: eValue });
        console.log(values);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    }


    return {
        onChange, onSubmit, values
    }
}