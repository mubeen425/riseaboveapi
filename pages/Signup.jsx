import Link from 'next/link';
import styles from './login.module.css';

export default function Signup() {
    return (
        <div className={`${styles.main}`}>
            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?t=st=1676901489~exp=1676902089~hmac=a418818d23858cb4f7a8f43bc5147ea4236e96a0c1c6dd643cfd76b9e6b8e678" className={`${styles.img}`} alt="login" />
            <div className={`${styles.form}`}>
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