import { useState } from 'react';
import { validateFormData } from './utilities';

function useSignUpDialog() {
  const initFormValues = {
    lastName: '',
    firstName: '',
    email: '',
    password: '',
  };

  // STATES
  const [formValues, setFormValues] = useState(initFormValues);
  const [emailError, setEmailError] = useState('');
  const [isSucces, setIsSucces] = useState(false);

  //HANDLES CHANGE IN FORM FIELD VALUES
  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // THIS FUNCTION VALIDATE THE FORM DATES AND THEN INITIATE THE DISPLAY OF THE "Sign up successful" Page.
  function handleSubmit(e: any) {
    e.preventDefault();

    const isValid: string = validateFormData(formValues.email) || '';
    setEmailError(isValid);
    if (!isValid) {
      displaySuccessPage();
    }
  }
  //THIS FUNCTION INITIATE THE DISPLAY OF THE "Sign up successful" Page
  function displaySuccessPage() {
    setIsSucces(true);
  }

  return {
    formValues,
    emailError,
    isSucces,
    handleChange,
    handleSubmit,
    displaySuccessPage,
  };
}

export default useSignUpDialog;
