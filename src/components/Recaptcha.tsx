import { useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const sitekey = process.env.REACT_APP_RECAPTCHA_SITE_KEY!;

export default function Recaptcha({
  onChange,
}: {
  onChange: (token: string | null) => void;
}) {
  const onRecaptchaChange = useCallback(
    (token: string | null) => {
      onChange(token);
    },
    [onChange]
  );
  return (
    <>
      <ReCAPTCHA
        className=' w-full'
        sitekey={sitekey}
        onChange={onRecaptchaChange}
      />
    </>
  );
}
