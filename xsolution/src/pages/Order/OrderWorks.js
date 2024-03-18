import React, { Component } from 'react'
import Header from '../../components/header/Header'
import { GoChecklist } from "react-icons/go";

import { NavLink } from 'react-router-dom';


export class OrderWorks extends Component {
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
                                <p>Контрольная работа №1</p>
                            </div>
                            <p>Не принято</p>
                            <p><u>К работе</u></p>
                            <a href="#">
                                Скачать
                            </a>
                        </li>
                        <li>
                            <div>
                                <GoChecklist />
                                <p>Контрольная работа №2</p>
                            </div>
                            <p>Выполнено</p>
                            <p><u>К работе</u></p>
                            <a href="#">
                                Скачать
                            </a>
                        </li>
                        <li>
                            <div>
                                <GoChecklist />
                                <p>Практическая работа №1,2,3,4</p>
                            </div>
                            <p>Выполнено</p>
                            <p><u>К работе</u></p>
                            <a href="#">
                                Скачать
                            </a>
                        </li>
                        <li>
                            <div>
                                <GoChecklist />
                                <p>Итоговое тестирование 2</p>
                            </div>
                            <p>Не выполнено</p>
                            <p><u>К работе</u></p>
                            <a href="#">
                                Скачать
                            </a>
                        </li>
                    </ul>

                </div>
            </>
        )
    }
}

export default OrderWorks