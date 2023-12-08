'use client';
import { signupSchema } from '@/security/validations/zod/user-schema';
import { toastError, toastSuccess } from '@/config/toast';
import { AUTH_ROUTES } from '@/constants/routes/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { API_ROUTES } from '@/constants/routes/api';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './SignupForm.module.css';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signupSchema) });
  const [error, setError] = useState(null);
  const router = useRouter()

  const onSubmit = async (data) => {
    const res = await fetch(API_ROUTES.auth.registerUser, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }); 

    if (!res.ok) {
      if (res.status === 400) {
        return setError((await res.json()).message)
      } else {
        return toastError('An error occurred during your sign up')
      }
    }

    toastSuccess('Your sign up was successful');
    return router.push(AUTH_ROUTES.login);
  }
  
  return (
    <form className={styles.signinForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        {...register("username")}
      />
      { errors.username && <p>{errors.username.message}</p> }
      <input
        type="text"
        placeholder="Full name"
        {...register("fullName")}
      />
      { errors.fullName && <p>{errors.fullName.message}</p> }
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      { errors.email && <p>{errors.email.message}</p> }
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      { errors.password && <p>{errors.password.message}</p> }

      <input
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword")}
      />
      { errors.confirmPassword && <p>{errors.confirmPassword.message}</p> }
      { error && <span>{error}</span> }
      <button type='submit' disabled={isSubmitting} className={styles.submitBtn}>Sign up</button>
    </form>
  );
}
