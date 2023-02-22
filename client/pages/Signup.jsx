import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import styles from './login.module.css';
import { registerUser } from 'store/authSlice';
import { toast } from 'react-toastify';

export default function Signup() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const changeHandler = (event) => {
        if(event.target.name === 'username') {
            setUser({
                ...user,
                username: event.target.value
            })
        }
        else if(event.target.name === 'email') {
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
        else if(event.target.name === 'confirmPassword') {
            setUser({
                ...user,
                confirmPassword: event.target.value
            })
        }
    }

    const signupHandler = () => {
        if(user.password === user.confirmPassword) {
            dispatch(registerUser({
                name: user.username,
                password: user.password,
                email: user.email
            }, router))
        }
        else {
            toast.error("Passwords do not match", {
                position: "bottom-left"
            })
        }
    }

    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.form}`}>
                <h1>Signup</h1>
                <input onChange={changeHandler} value={user.username} className={`${styles.input}`} type="text" placeholder='Username' name='username' />
                <input onChange={changeHandler} value={user.email} className={`${styles.input}`} type="text" placeholder='Email' name='email' />
                <input onChange={changeHandler} value={user.password} className={`${styles.input}`} type="password" placeholder='Password' name='password' />
                <input onChange={changeHandler} value={user.confirmPassword} className={`${styles.input}`} type="password" placeholder='Confirm Password' name='confirmPassword' />
                <button className={`${styles.button}`} onClick={signupHandler}>Sign Up</button>
                <Link href='/Login'>Already have an account?</Link>
            </div>
        </div>
    )
}