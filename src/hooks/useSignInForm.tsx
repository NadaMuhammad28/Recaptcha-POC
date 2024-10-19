import { useState } from 'react';
import { validateRecaptchaToken } from '../services/api/recaptcha';
import { useNavigate } from 'react-router-dom';
export interface UserData {
  email: string;
  password: string;
  recaptchaToken: string | null;
}
export const useSignInForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<UserData>({
    email: '',
    password: '',
    recaptchaToken: null,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleFieldChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (): boolean => {
    const { email, password, recaptchaToken } = form;
    if (!email || !password || !recaptchaToken) {
      return false;
    }
    return true;
  };

  const validateRecaptcha = async (recaptchaToken: string) => {
    const response = await validateRecaptchaToken(recaptchaToken);
    return response;
  };
  const onSubmit = async (e: any) => {
    try {
      setIsSubmitting(true);
      e.preventDefault();
      const { recaptchaToken } = form;
      if (recaptchaToken) {
        const isValidRecaptcha = await validateRecaptcha(recaptchaToken);

        if (isValidRecaptcha) {
          navigate('/home');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return {
    form,
    setForm,
    handleFieldChange,
    onSubmit,
    isSubmitting,
    validateForm,
  };
};
