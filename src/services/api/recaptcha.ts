import axios, { AxiosResponse } from 'axios';

const RECAPTCHA_API_URL = `${process.env.REACT_APP_API_URL}/verify-recaptcha`;

export const validateRecaptchaToken = async (token: string) => {
  const payload = {
    token,
  };
  // const payload = {
  //   token: `${token}dddec`,
  // };
  try {
    const res: AxiosResponse<{ success: boolean }> = await axios.post(
      RECAPTCHA_API_URL,
      payload
    );
    return res.data.success;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      console.error('Axios Error:', error.message);
      // You can access error details like status code and response data
      console.error('Error Details:', error.response);
    }
    return false;
  }
};
