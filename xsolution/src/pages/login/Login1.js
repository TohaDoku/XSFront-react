import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom'; // Импорт из react-router-dom
import logo from '../../img/icons/mini_logo.svg';
import './style.css';
import { IoClose } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";

const Login1 = () => {
  const navigate = useNavigate(); // Получаем функцию для редиректа

  // Определение мобильного телефона
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  const isMobile = isMobileDevice();

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
                .matches(/^\+7\d{10}$/, 'Неверный формат телефона')
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              // После успешной отправки формы выполняем редирект на новую страницу
              navigate(`/success?phone=${values.phone}`);
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
                            mask="+7\9999999999"
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
