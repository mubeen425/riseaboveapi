import Link from 'next/link';
import styles from './login.module.css';

export default function Login() {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.form}`}>
            <h1>Login</h1>
                <input className={`${styles.input}`} type="text" placeholder='Email' name='email' />
                <input className={`${styles.input}`} type="password" placeholder='Password' name='password' />
                <button className={`${styles.button}`}>Log In</button>
                <Link href='/Signup'>Don't have an account?</Link>
            </div>
        </div>
    )
}