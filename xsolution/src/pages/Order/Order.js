import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { GoChecklist } from "react-icons/go";
import { NavLink } from 'react-router-dom';

class Order extends Component {
    render() {
        const { match } = this.props;
        const orderId = match ? match.params.orderId : null; // Проверяем наличие match перед чтением params

        return (
            <>
                <Header />
                <div className='container header-padding'>
                    <h2 className='mt-3 mb-3'>Заказ #{orderId}</h2>
                    <ul className='order-list'>
                        <li>
                            <div>
                                <GoChecklist />
                                <p>Математика</p>
                            </div>
                            <p>Зачет</p>
                            <NavLink to={`/order-works/${orderId}`}>
                                Посмотреть
                            </NavLink>
                        </li>
                        {/* Другие элементы заказа */}
                    </ul>
                </div>
            </>
        );
    }
}

export default Order;