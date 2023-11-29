import { useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const cleanFormState = () => {
    setState(initState)
  }

  const checkEmptyField = (form: T): boolean => {
    let isEmpty: boolean = false;
    for (const key in form) {
      if (form[key] === '') {
        isEmpty = true
      }
    }
    return isEmpty;
  }

  return {
    ...state,
    form: state,
    onChange,
    checkEmptyField,
    cleanFormState,
  };
};
