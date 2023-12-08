'use client';
import { signinSchema } from '@/security/validations/zod/user-schema';
import { toastError, toastSuccess } from '@/config/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROOT_ROUTES } from '@/constants/routes/root';
import { API_ROUTES } from '@/constants/routes/api';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './SigninForm.module.css';

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signinSchema) });
  const [error, setError] = useState(null);
  const router = useRouter();

  const onSubmit = async (data) => {
    const res = await fetch(API_ROUTES.auth.loginUser, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }); 

    if (!res.ok) {
      if (res.status === 401) {
        return setError('The username or password is incorrect')
      } else {
        return toastError('There was a problem sign in')
      }
    }

    reset();
    toastSuccess(`Welcome back ${data.username}`)
    return router.replace(ROOT_ROUTES.dashboard.index);
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
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      { errors.password && <p>{errors.password.message}</p> }
      { error && <span>{error}</span> }
      <button type='submit' disabled={isSubmitting} className={styles.submitBtn}>Sign in</button>
    </form>
  );
}
