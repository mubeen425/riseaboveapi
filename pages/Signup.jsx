import Link from 'next/link';
import styles from './login.module.css';

export default function Signup() {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.form}`}>
                <h1>Signup</h1>
                <input className={`${styles.input}`} type="text" placeholder='Username' name='username' />
                <input className={`${styles.input}`} type="text" placeholder='Email' name='email' />
                <input className={`${styles.input}`} type="password" placeholder='Password' name='password' />
                <input className={`${styles.input}`} type="password" placeholder='Confirm Password' name='confirmPassword' />
                <button className={`${styles.button}`}>Sign Up</button>
                <Link href='/Login'>Already have an account?</Link>
            </div>
        </div>
    )
}