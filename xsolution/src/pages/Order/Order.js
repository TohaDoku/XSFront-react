import React, { Component } from 'react'
import Header from '../../components/header/Header'
import { GoChecklist } from "react-icons/go";

import { NavLink } from 'react-router-dom';


export class Order extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <h2 className='mt-3 mb-3'>Заказ №9438</h2>
                        <ul className='order-list'>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Математика</p>
                                </div>
                                <p>Зачет</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Физика</p>
                                </div>
                                <p>Экзамен</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Химия</p>
                                </div>
                                <p>Практика</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Информатика</p>
                                </div>
                                <p>Курсовая</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Математика</p>
                                </div>
                                <p>Зачет</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Физика</p>
                                </div>
                                <p>Экзамен</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Химия</p>
                                </div>
                                <p>Практика</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <GoChecklist />
                                    <p>Информатика</p>
                                </div>
                                <p>Курсовая</p>
                                <NavLink to='/order-works'>
                                    Посмотреть
                                </NavLink>
                            </li>
                        </ul>

                </div>
            </>
        )
    }
}

export default Order