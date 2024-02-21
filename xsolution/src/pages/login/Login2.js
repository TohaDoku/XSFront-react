import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css';
import logo from '../../img/icons/mini_logo.svg';

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = new URLSearchParams(location.search).get('phone');
  const [countdown, setCountdown] = useState(45);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(prevCountdown => prevCountdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const resendCode = () => {
    setCountdown(45);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    if (values.code === '11111') {
      navigate('/main-page');
    } else {
      // Если код неверный, выполните действия или выведите сообщение об ошибке
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
          <h2>Введите код</h2>
          <p>Вы отправили код подтверждения на номер: {phone}</p>
          <Formik
            initialValues={{ code: '' }}
            validationSchema={Yup.object().shape({
              code: Yup.string()
                .required('Код обязателен')
                .matches(/^[0-9]{5}$/, 'Код должен состоять из 5 цифр')
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="code"></label>
                    <Field name="code">
                      {({ field, form, meta }) => (
                        <input
                          {...field}
                          maxLength={5} // Установка максимальной длины в 5 символов
                          className={`floating-input ${meta.error && meta.touched ? 'input-error' : ''}`}
                          placeholder='Введите код'
                        />
                      )}
                    </Field>
                  <ErrorMessage name="code" component="div" className="error-message" />
                </div>
                {countdown > 0 ? (
                  <p>Отправим код повторно через {countdown} секунд</p>
                ) : (
                  <button type="button" onClick={resendCode}>Отправить повторно</button>
                )}
                <button type="submit" disabled={isSubmitting}>Отправить</button>
              </Form>
            )}
          </Formik>
        </div>
        <img className='bg-logo' src={logo} alt="Background Logo" />
      </main>
    </>
  );
};

export default SuccessPage;
