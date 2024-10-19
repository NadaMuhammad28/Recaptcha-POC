import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainForm from '../../pages/MainForm';

jest.mock('../../components/Recaptcha', () => {
  return ({ onChange }: any) => (
    <button onClick={() => onChange('test-token')}>Verify Recaptcha</button>
  );
});

describe('MainForm', () => {
  it.skip('renders the form elements', () => {
    render(<MainForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it.skip('updates form state on input change', () => {
    render(<MainForm />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });

    // expect(emailInput.value).toEqual('test@example.com');
    // expect(passwordInput.value).toEqual('password123');
    // expect(confirmPasswordInput.value).toEqual('password123');
  });

  it.skip('calls onSubmit with form data when the form is submitted', async () => {
    const onSubmit = jest.fn();
    render(<MainForm onSubmit={onSubmit} />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    const recaptchaButton = screen.getByText('Verify Recaptcha');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });
    fireEvent.click(recaptchaButton);
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      recaptchaToken: 'test-token',
    });
  });
});
