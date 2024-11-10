import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../utils/axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

const SignupPage = () => {
  const router = useRouter();
  const [errMsg , setErrMsg] = useState('')

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post('/auth/signup', values);
        router.push('/login');
      } catch (err) {
        setErrMsg(err?.response?.data?.message || 'Something Wrong!')
        console.error('Signup failed', err.response.data.message);
      }
    },
  });

  return (
    <section className='auth-container'>
      <div className='auth-wrap'>
        <form onSubmit={formik.handleSubmit}>
          <h2>Create Account</h2>

          <div className='field-wrap'>
            <label htmlFor='name'>Enter Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder='Sahil Kumar'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && <div className='err'>{formik.errors.name}</div>}
          </div>

          <div className='field-wrap'>
            <label htmlFor='email'>Enter Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='mail@gmail.com'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && <div className='err'>{formik.errors.email}</div>}
          </div>

          <div className='field-wrap'>
            <label htmlFor='phone'>Enter Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && <div className='err'>{formik.errors.phone}</div>}
          </div>

          <div className='field-wrap'>
            <label htmlFor='password'>Enter Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && <div className='err'>{formik.errors.password}</div>}
          </div>

          <div className='field-wrap'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className='err'>{formik.errors.confirmPassword}</div>}
          </div>

          <div className='action'>
            <button type="submit" className='btn btn-submit'>Sign Up</button>
            <Link className='info-text' href={'/login'}>Already have an Account!</Link>
          </div>
          {errMsg && <div className='err'>{errMsg}</div>}
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
