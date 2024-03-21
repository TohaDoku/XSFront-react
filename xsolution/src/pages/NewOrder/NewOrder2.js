import React, { Component } from 'react';
import Header from '../../components/header/Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { NavLink } from 'react-router-dom';
import FileInput from '../../components/FileInput/FileInput';

export class NewOrder2 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container header-padding text-center'>
          <h2 className='p-3 mt-4'>Сделать новый заказ</h2>

        <div className='form-block'>
          <Row className="">

            <Col md={{ span: 6, offset: 3 }}>
              <span className="percent-complete">
                  <span className="complete">Уже заполнено</span>
                  <span className="percent">60%</span>
              </span>
            </Col>

            <Col md={{ span: 6, offset: 3 }}>
              <ProgressBar variant="success" now={60} />
            </Col>

            <Col className='mb-3' md={{ span: 6, offset: 3 }}>
              <span className="complete">+70% за контактную информацию</span>
            </Col>

            <Col md={{ span: 6, offset: 3 }}>
              <h3 className='text-center h4'><b>Обучение проходит в личном кабинете?</b></h3>
            </Col>

            <Col md={{ span: 6, offset: 3 }}>
                  <span className="main-radio-span mb-3">
                      <label className="main-radio-span-one">
                          <input id="yesRadio" className="custom-input" type="radio" name="showFields" value="yes" />
                          <span className="input-span-text">Да</span>
                      </label>
                      <label className="main-radio-span-two">
                          <input id="noRadio" className="custom-input" type="radio" name="showFields" value="no" />
                          <span className="input-span-text">Нет</span>
                      </label>
                  </span>
            </Col>

            <Col md={{ span: 6, offset: 3 }}>
              <FloatingLabel
                controlId="floatingInput"
                label="Логин от личного кабинета"
                className="mb-3"
              >
                <Form.Control className="custom-input-main" type="text" placeholder="ВУЗ" />
              </FloatingLabel>
            </Col>

            <Col md={{ span: 6, offset: 3 }}>
              <FloatingLabel
                controlId="floatingInput"
                label="Пароль от личного кабинета"
                className="mb-3"
              >
                <Form.Control className="custom-input-main" type="text" placeholder="ВУЗ" />
              </FloatingLabel>
            </Col>

           <Col md={{ span: 6, offset: 3 }}>
                <FloatingLabel controlId="floatingTextarea2" label="Пожелания">
                    <Form.Control
                     className="custom-input-main mb-3"
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Col>

            <Col className='mb-3' md={{ span: 6, offset: 3 }}>
              <FileInput />
            </Col>


            <Col className='mb-5' md={{ span: 6, offset: 3 }}>
                <NavLink to='/new-orders'>
                    <Button className='w-100' variant="warning">Оформить заказ</Button>
                </NavLink>
            </Col>

          </Row>
        </div>
        </div>
      </>
    )
  }
}

export default NewOrder2