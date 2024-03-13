import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Header from '../../components/header/Header';

class NewOrder extends Component {
  render() {
    return (
      <>
        <Header />
        <hr /> 
        <div className='container text-center'>
          <h2 className='p-3'>Сделать новый заказ</h2>
        </div>
        <div className='form-block'>
          
        </div>
      </>
    );
  }
}

export default NewOrder;
