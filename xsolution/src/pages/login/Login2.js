import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css';
import logo from '../../img/icons/mini_logo.svg';
import { SlArrowRight } from "react-icons/sl";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = new URLSearchParams(location.search).get('phone');
  const [countdown, setCountdown] = useState(45);
  const [error, setError] = useState('');

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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new URLSearchParams();
      formData.append('phone_number', phone);
      formData.append('verification_code', values.code);
  
      console.log(phone)
      console.log(values.code)
  
      const response = await fetch('https://www.bigozo.ru/api/verify-code/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
  
      console.log(response)
  
      if (response.status === 200) {
        const responseData = await response.json(); // Получаем данные из тела ответа
  
        if (responseData.message) {
          console.log('Сообщение от сервера:', responseData);
        }
        navigate('/main-page');
      } else {
        setError('Неверный код');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      setError('Неверный код');
    } finally {
      setSubmitting(false);
    }
  };

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
          <h3>Введите код</h3>
          <p className='number'>Отправили код подтверждения на номер: +{phone}</p>
          <Formik
            initialValues={{ code: '' }}
            validationSchema={Yup.object().shape({
              code: Yup.string()
                .required('Код обязателен')
                .matches(/^[0-9]{6}$/, 'Код должен состоять из 6 цифр')
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='form-inline'>
                  <div className='form-group'>
                    <label htmlFor="code"></label>
                      <Field name="code">
                        {({ field, form, meta }) => (
                          <input
                            {...field}
                            maxLength={6} // Установка максимальной длины в 5 символов
                            className={`floating-input ${meta.error && meta.touched ? 'input-error' : ''}`}
                            placeholder='Введите код'
                          />
                        )}
                      </Field>
                    <ErrorMessage name="code" component="div" className="error-message" />
                  </div>  
                  <button type="submit" className={`btn-login ${isSubmitting ? 'disabled' : ''}`}>
                      {isMobile ? 'Продолжить' : <SlArrowRight />}
                  </button>
                </div>
                {countdown > 0 ? (
                  <p className='countdown'>Отправим код повторно через {countdown} секунд</p>
                ) : (
                  <button type="button" className='countdown-send' onClick={resendCode}>Отправить повторно</button>
                )}
                
                {error && <div className="error-message">{error}</div>}
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
