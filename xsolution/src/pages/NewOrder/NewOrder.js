import React, { Component } from 'react';
import Header from '../../components/header/Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { NavLink } from 'react-router-dom';

class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServiceType: '',
      selectedService: '',
    };
  }

  handleServiceTypeChange = (event) => {
    this.setState({ selectedServiceType: event.target.value });
  }

  handleServiceChange = (event) => {
    this.setState({ selectedService: event.target.value });
  }

  render() {
    const { selectedServiceType } = this.state;

    let serviceOptions;
    if (selectedServiceType === '1') { // Комплексная помощь
      serviceOptions = (
        <>
          <option value="Комплексное закрытие сессии">Комплексное закрытие сессии</option>
          <option value="Ликвидация задолженностей">Ликвидация задолженностей</option>
          <option value="Закрытие отдельных дисциплин">Закрытие отдельных дисциплин</option>
          <option value="Практика">Практика</option>
          <option value="Дипломная работа">Дипломная работа</option>
          <option value="Отдельные работы">Отдельные работы</option>
        </>
      );
    } else if (selectedServiceType === '2') { // Отдельные работы и дисциплины
      serviceOptions = (
        <>
          <option value="Дипломная работа">Дипломная работа</option>
          <option value="Курсовая работа">Курсовая работа</option>
          <option value="Практика">Практика</option>
          <option value="Контрольная работа">Контрольная работа</option>
          <option value="Лабораторная работа">Лабораторная работа</option>
          <option value="Практическая работа">Практическая работа</option>
          <option value="Тестирование">Тестирование</option>
          <option value="Помощь специалиста">Помощь специалиста</option>
          <option value="Научная статья">Научная статья</option>
          <option value="Реферат">Реферат</option>
          <option value="Чертеж">Чертеж</option>
          <option value="Безнес план">Безнес план</option>
          <option value="Другое">Другое</option>
        </>
      );
    } else if (selectedServiceType === '3') { // Репетиторство и онлайн помощь
      serviceOptions = (
        <>
          <option value="Репетиторство">Репетиторство</option>
          <option value="Онлайн-помощь">Онлайн-помощь</option>
        </>
      );
    } else {
      serviceOptions = (
        <option>Выберите услугу</option>
      );
    }

    return (
      <>
        <Header />
        <div className='container text-center'>
          <h2 className='p-3 mt-4'>Сделать новый заказ</h2>
        </div>
        <div className='form-block'>
          <Row className="">

          <Col md={{ span: 6, offset: 3 }}>
            <span className="percent-complete">
                <span className="complete">Уже заполнено</span>
                <span className="percent">30%</span>
            </span>
          </Col>

          <Col md={{ span: 6, offset: 3 }}>
            <ProgressBar variant="success" now={30} />
          </Col>

          <Col className='mb-3' md={{ span: 6, offset: 3 }}>
            <span className="complete">+70% за контактную информацию</span>
          </Col>

          <Col md={{ span: 6, offset: 3 }}>
            <FloatingLabel
              controlId="floatingInput"
              label="Имя"
              className="mb-3 custom-input-main"
            >
              <Form.Control className="custom-input-main" type="text" placeholder="ВУЗ" />
            </FloatingLabel>
          </Col>

          <Col md={{ span: 6, offset: 3 }}>
            <FloatingLabel
              controlId="floatingInput"
              label="ВУЗ"
              className="mb-3"
            >
              <Form.Control className="custom-input-main" type="text" placeholder="ВУЗ" />
            </FloatingLabel>
          </Col>

            <Col md={{ span: 6, offset: 3 }}>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Тип услуги"
                className="mb-3"
              >
                <Form.Select className="custom-input-main" aria-label="Floating label select example" onChange={this.handleServiceTypeChange}>
                  <option>Выберите тип услуги</option>
                  <option value="1">Комплексная помощь</option>
                  <option value="2">Отдельные работы и дисциплины</option>
                  <option value="3">Репетиторство и онлайн помощь</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

            <Col md={{ span: 6, offset: 3 }}>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Услуга"
                className="mb-3"
              >
                <Form.Select className="custom-input-main" aria-label="Floating label select example" onChange={this.handleServiceChange}>
                  {serviceOptions}
                </Form.Select>
              </FloatingLabel>
            </Col>

            <Col md={{ span: 6, offset: 3 }}>
              <NavLink to='/new-order-next'>
              <Button className='w-100' variant="warning">Продолжить</Button></NavLink>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default NewOrder;
