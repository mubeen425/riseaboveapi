import Link from 'next/link';
import styles from './login.module.css';

export default function Login() {
    return (
        <div className={`${styles.main}`}>
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1676898007~exp=1676898607~hmac=4a3f542556fbe2967611d8116fe5701bb5e893d19e137a3713b47adc18606751" className={`${styles.img}`} alt="login" />
            <div className={`${styles.form}`}>
                <input className={`${styles.input}`} type="text" placeholder='Email' name='email' />
                <input className={`${styles.input}`} type="password" placeholder='Password' name='password' />
                <button className={`${styles.button}`}>Log In</button>
                <Link href='/Signup'>Don't have an account?</Link>
            </div>
        </div>
    )
}