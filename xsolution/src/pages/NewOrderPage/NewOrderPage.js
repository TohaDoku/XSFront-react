import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { GoChecklist } from "react-icons/go";

class NewOrderPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container header-padding'>
                    <h2 className='mt-3 mb-3'>Новый заказ № </h2>
                    <ul className='order-list'>
                        <li>
                            <div>
                                <GoChecklist />
                                <p>Математика</p>
                            </div>
                            <p>Зачет</p>

                        </li>
                        {/* Другие элементы заказа */}
                    </ul>
                </div>
            </>
        );
    }
}

export default NewOrderPage;