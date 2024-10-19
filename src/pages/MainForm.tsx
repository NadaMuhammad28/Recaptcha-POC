import { TextField, Typography } from '@mui/material';
import { useSignInForm } from '../hooks/useSignInForm';
import Recaptcha from '../components/Recaptcha';
import LoadingButton from '@mui/lab/LoadingButton';

export default function MainForm() {
  const {
    form,
    setForm,
    handleFieldChange,
    onSubmit,
    isSubmitting,
    validateForm,
  } = useSignInForm();

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col  h-[100%] items-center py-4 px-2s gap-4'
    >
      <Typography className='!mb-5' variant='h4'>
        Welcome Back!
      </Typography>
      <TextField
        label='Email'
        type='email'
        name='email'
        value={form.email}
        onChange={handleFieldChange}
        fullWidth
      />
      <TextField
        label='Password'
        type='password'
        name='password'
        value={form.password}
        onChange={handleFieldChange}
        fullWidth
      />

      <Recaptcha
        onChange={(token) =>
          setForm((form) => ({ ...form, recaptchaToken: token }))
        }
      />
      <LoadingButton
        type='submit'
        variant='contained'
        disabled={!validateForm()}
        loading={isSubmitting}
      >
        Submit
      </LoadingButton>
    </form>
  );
}
