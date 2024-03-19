import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/icons/mini_logo.svg';
import './style.css';
import { IoClose } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";

const Login1 = () => {
  const navigate = useNavigate();

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  const isMobile = isMobileDevice();

  const sendData = async (values) => {
    try {
      const data = new URLSearchParams();
      data.append('phone_number', values.phone);
  
      const response = await fetch('https://www.bigozo.ru/api/verify-phone/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      } else {
        console.error('Ошибка при отправке данных');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <>
      <main className='login-container'>
        <div className='login-header'>
          <div className="login-id">
            <img src={logo} alt="Logo" />
            <p>ID</p>
          </div>
          <a href='/'>
            <div className="login-close">
              <IoClose />
            </div>
          </a>
        </div>
        <div className='login-main-block'>
          <Formik
            initialValues={{ phone: '' }}
            validationSchema={Yup.object().shape({
              phone: Yup.string()
                .required('Телефон обязателен')
                .matches(/^7\d{10}$/, 'Неверный формат телефона')
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                console.log(values);
                await sendData(values);
                navigate(`/success?phone=${values.phone}`);
              } catch (error) {
                console.error('Ошибка при отправке данных:', error);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <h3>Вход в X-Solution</h3>
                <div className='form-inline'>
                  <div className='form-group'>
                    <label htmlFor="phone"></label>
                    <Field name="phone">
                      {({ field, form, meta }) => (
                        <InputMask
                          mask="7\9999999999"
                          maskChar="_"
                          className={`floating-input ${meta.error && meta.touched ? 'input-error' : ''}`}
                          placeholder='Телефон'
                          value={field.value}
                          onChange={(e) => {
                            form.setFieldValue('phone', e.target.value);
                          }}
                        />
                      )}
                    </Field>
                    <ErrorMessage name="phone" component="div" className="error-message" />
                  </div>
                  <button type='submit' className='btn-login' disabled={isSubmitting}>
                    {isMobile ? 'Продолжить' : <SlArrowRight />}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <img className='bg-logo' src={logo} alt="Background Logo" />
      </main>
    </>
  );
};

export default Login1;
