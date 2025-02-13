"use client"
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { validateLogin, validateRegister } from '@/helpers/validate';
import { loginPropError, registerPropError, userSession } from '@/types/types';
import { LoginAuth, RegisterAuth } from '@/helpers/auth.helpers';
import { useRouter } from 'next/navigation';

const AuthForm = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [userData, setUserData] = useState<userSession>();


  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData: userSession = JSON.parse(localStorage.getItem('UserSession')!)
      setUserData(userData)
      userData?.token && alert('You are already logged in')
      userData?.token && router.push('/') 
  }

  }, [])

  //* Logica del registro


  const [dataRegister, setdataRegister] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const [errorRegister, setErrorRegister] = useState<registerPropError>({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });
  const toggleClass = () => {
    setActive(!active);
  };

  const handleChangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setdataRegister({ ...dataRegister, [name]: value });
    const errors = validateRegister(dataRegister)
    setErrorRegister(errors)
  }
  const handleSubmitRegister = async () => {
    try {
      const res = await RegisterAuth(dataRegister)
      console.log(res)
      alert('Register successful');
    } catch (error: any) {
      throw new Error(error);
    }

  }

  //* Logica del login

  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState<loginPropError>({
    email: '',
    password: '',
  });

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setDataLogin({ ...dataLogin, [name]: value });
    const error = validateLogin(dataLogin)
    setError(error)
  }
  const handleSubmitLogin = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const res = await LoginAuth(dataLogin);
      const { token, user } = await res;
      localStorage.setItem('UserSession', JSON.stringify({ token, userData: user }));
      alert('Login successful');
      router.push('/')
    } catch (error: any) {
      throw new Error(error);
    }
  }
  return (
    <div className={styles.padre}>
      <div className={`${styles.container} ${active ? styles.active : ''}`} id="container">
        <div className={`${styles['form-container']} ${styles['sign-up']}`}>
          <form onSubmit={handleSubmitRegister}>
            <h1 className={styles.title}>Create Account</h1>
            <div className={styles['social-icons']}>
              <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            {errorRegister.email && <q className={styles.error}>{errorRegister.email}</q>}
            <input
              id='email'
              name='email'
              value={dataRegister.email}
              onChange={handleChangeRegister}
              type='email'
              placeholder='Email' />
            {errorRegister.password && <q className={styles.error}>{errorRegister.password}</q>}
            <input
              id='password'
              name='password'
              value={dataRegister.password}
              onChange={handleChangeRegister}
              type='password'
              placeholder='Password' />
            {errorRegister.name && <q className={styles.error}>{errorRegister.name}</q>}
            <input
              id='name'
              name='name'
              value={dataRegister.name}
              onChange={handleChangeRegister}
              type='text'
              placeholder='Name' />
            {errorRegister.address && <q className={styles.error}>{errorRegister.address}</q>}
            <input
              id='address'
              name='address'
              value={dataRegister.address}
              onChange={handleChangeRegister}
              type='text'
              placeholder='Address' />
            {errorRegister.phone && <q className={styles.error}>{errorRegister.phone}</q>}
            <input
              id='phone'
              name='phone'
              value={dataRegister.phone}
              onChange={handleChangeRegister}
              type='tel'
              placeholder='Phone' />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className={`${styles['form-container']} ${styles['sign-in']}`}>
          <form onSubmit={handleSubmitLogin}>
            <h1 className={styles.title}>Sign In</h1>
            <div className={styles['social-icons']}>
              <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for password</span>
            {error.email && <q className={styles.error}>{error.email}</q>}
            <input
              id='emailLogin'
              name='email'
              value={dataLogin.email}
              onChange={handleChangeLogin}
              type='email'
              placeholder='Email' />
            {error.password && <q className={styles.error}>{error.password}</q>}
            <input
              id='passwordLogin'
              name='password'
              value={dataLogin.password}
              onChange={handleChangeLogin}
              type='password'
              placeholder='Password' />
            <a href="#">Forget Your Password?</a>
            <button type='submit'>Sign In</button>
          </form>
        </div>
        <div className={styles['toggle-container']}>
          <div className={styles.toggle}>
            <div className={`${styles['toggle-panel']} ${styles['toggle-left']}`}>
              <h1 className={styles.welcome}>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className={styles.hidden} onClick={toggleClass}>Sign In</button>
            </div>
            <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
              <h1 className={styles.welcome} >Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className={styles.hidden} onClick={toggleClass}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
