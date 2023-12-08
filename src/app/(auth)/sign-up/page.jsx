import { AUTH_ROUTES } from '@/constants/routes/auth';
import SignupForm from '@/components/forms/signup-form/SignupForm'
import styles from "./page.module.css";
import React from 'react'
import Link from 'next/link';

export default async function Signin() {

  return (
    <main className={styles.container}>
      <section className={styles.signinContainer}>
        <section className={styles.signinBox}>
          <div className={styles.infoBox}>
            <h1>sign up</h1>
            <p>Thank you for joining us</p>
          </div>
          <div className={styles.formBox}>
            <SignupForm />
          </div>
          <div className={styles.otherOption}>
            <p>Do you have an account? <Link href={AUTH_ROUTES.login}>Sign in</Link></p>
          </div>
        </section>
      </section>
    </main>
  )
}
