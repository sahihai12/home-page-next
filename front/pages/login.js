import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import api from '../utils/axios';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [errMsg , setErrMsg] = useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await api.post('/auth/login', values);
        localStorage.setItem('token', response.data.token);
        localStorage.getItem('token')
        router.push('/');
      } catch (err) {
        setErrMsg(err?.response?.data?.message || 'Something Wrong!')
        console.error('Login failed', err.response.data.message);
      }
    },
  });

  return (
    <section className='auth-container'>
      <div className='auth-wrap'>
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
          <h2>Login</h2>

          <div className='field-wrap'>
            <label htmlFor='email'>Enter Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Sahil'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && <div className='err'>{formik.errors.email}</div>}
          </div>

          <div className='field-wrap'>
            <label htmlFor='password'>Enter password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='mail@gmail.com'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && <div className='err'>{formik.errors.password}</div>}
          </div>


          <div className='action'>
            <button type="submit" className='btn btn-submit'>Login</button>
            <Link className='info-text' href={'/signup'}>Don't have Account!</Link>
          </div>
          {errMsg && <div className='err'>{errMsg}</div>}
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
