import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './login.module.css';
import { loginUser } from 'store/authSlice';

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        if(event.target.name === 'email') {
            setUser({
              ...user,
                email: event.target.value
            })
        }
        else if(event.target.name === 'password') {
            setUser({
             ...user,
                password: event.target.value
            })
        }
    }

    const loginHandler = () => {
        dispatch(loginUser(user, router));
    }

    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.form}`}>
            <h1>Login</h1>
                <input onChange={changeHandler} value={user.email} className={`${styles.input}`} type="text" placeholder='Email' name='email' />
                <input onChange={changeHandler} value={user.password} className={`${styles.input}`} type="password" placeholder='Password' name='password' />
                <button className={`${styles.button}`} onClick={loginHandler}>Log In</button>
                <Link href='/Signup'>Don't have an account?</Link>
            </div>
        </div>
    )
}