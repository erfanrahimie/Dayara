import { AUTH_ROUTES } from '@/constants/routes/auth';
import SigninForm from '@/components/forms/signin-form/SigninForm'
import styles from "./page.module.css";
import React from 'react'
import Link from 'next/link';

export default async function Signin() {

  return (
    <main className={styles.container}>
      <section className={styles.signinContainer}>
        <section className={styles.signinBox}>
          <div className={styles.infoBox}>
            <h1>sign in</h1>
            <p>welcome back</p>
          </div>
          <div className={styles.formBox}>
            <SigninForm />
          </div>
          <div className={styles.otherOption}>
            <Link href={'/'}>Forget password</Link>
            <p>Don't have an account? <Link href={AUTH_ROUTES.register}>Sign up</Link></p>
          </div>
        </section>
      </section>
    </main>
  )
}
