import React, { Component } from 'react'
import Header from '../../components/header/Header'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import './Profile.css'
import profile from './profile.png'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";

export class Profile2 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container profile-container'>

                    <Row>

                        <Col className='main-profile-block' md={{ span: 12 }}>

                            <div className="dop-block">
                                <img src={profile} alt=""/>
                                <h2>Докучаев Антон<br/>Олегович</h2>
                            </div>

                            <NavLink className="btn-outline-success" to='/profile'>
                                Сохранить
                            </NavLink>

                        </Col>

                        <h4>Общая информация:</h4>
                        <Col className="mb-3" md={{ span: 4 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Фамилия"
                            >
                                <Form.Control type="text" value='Докучаев' />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 4 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Имя"
                            >
                                <Form.Control type="text" value='Антон' />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span:4 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Отчество"
                            >
                                <Form.Control type="text" value='Олегович' />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 8 }}>
                            <h5>Телефон</h5>
                            <p>Телефон нужен, чтобы подтверждать операции и настройки счета</p>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Номер телефона"
                            >
                                <Form.Control type="text" value='89229270146' placeholder="name@example.com" required />
                            </FloatingLabel>
                            <p>Чтобы привязать новый телефон, позвоните нам: 8 (495) 487-01-77. Звонок бесплатный</p>
                        </Col>

                        <Col className="mb-3" md={{ span: 12 }}>
                            <h4>Учебно заведение:</h4>
                            <p>Укажите ВУЗ, группу, ссылку на личный кабинет, данные от личного кабинета и почту с отзывами преподавателей.</p>
                        </Col>

                        <Col className="mb-3" md={{ span: 4 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="ВУЗ"
                            >
                                <Form.Control type="text" value='ВА РВСН им. Петра великого' placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 4 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Ссылка на ВУЗ"
                            >
                                <Form.Control type="text" value='http://localhost:3000/profile' placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 4 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Группа"
                            >
                                <Form.Control type="text" value='К 02-16' placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 6 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="ЛК логин"
                            >
                                <Form.Control type="text" value='Логин ЛК' placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 6 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="ЛК пароль"
                            >
                                <Form.Control type="text" value='Пароль ЛК' placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 6 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Логин от почты"
                            >
                                <Form.Control type="text" value='antontdp@ya.ru' placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3" md={{ span: 6 }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Пароль от почты"
                            >
                                <Form.Control type="text" value='111111' placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>

                    </Row>

                </div>
            </>
        )
    }
}

export default Profile2