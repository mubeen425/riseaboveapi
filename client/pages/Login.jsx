import Link from 'next/link';
import styles from './login.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();

    const loginHandler = () => {
        router.push('/Subscriptions');
    }

    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.form}`}>
            <h1>Login</h1>
                <input className={`${styles.input}`} type="text" placeholder='Email' name='email' />
                <input className={`${styles.input}`} type="password" placeholder='Password' name='password' />
                <button className={`${styles.button}`} onClick={loginHandler}>Log In</button>
                <Link href='/Signup'>Don't have an account?</Link>
            </div>
        </div>
    )
}