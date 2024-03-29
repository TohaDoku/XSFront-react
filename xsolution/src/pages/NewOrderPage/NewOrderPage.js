import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { GoChecklist } from "react-icons/go";
import { useParams } from 'react-router-dom';
import customFetch from "../../utils/RefreshToken";
import API_URL from "../../config";

const NewOrderPage = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null); // Состояние для хранения данных о заказе
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await customFetch(`${API_URL}/order/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({ id: id })
                });
                // Проверяем, что ответ успешный
                if (response.ok) {
                    // Преобразуем ответ в формат JSON
                    const data = await response.json();
                    // Обновляем состояние с данными о заказе
                    setOrder(data);
                    // Выводим данные в консоль
                    console.log(data);
                } else {
                    // Выводим сообщение об ошибке, если ответ не успешный
                    console.error('Failed to fetch orders:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        fetchOrders();
    }, [id]); // Добавляем зависимость от id, чтобы срабатывал useEffect при изменении id

    console.log(order)
    return (
        <>
            <Header />
            <div className='container header-padding'>
                <h2 className='mt-3 mb-3'>Новый заказ № {id ? id : 'Loading...'}</h2>
                {order && order.status === "Необходим расчет" && (
                    <p>Менеджер уже занимается Вашим заказом и скоро свяжется для подробных уточнений</p>
                )}
                {order && (order.status === "Расчет произведен") && (
                    <>
                        <p>Производится расчет по дисциплинам:</p>
                        <ul className='order-list'>
                            {order.disciplines && order.disciplines.length > 0 && order.disciplines.map((discipline) => (
                                <li key={discipline.discipline_id}>
                                    <div>
                                        <GoChecklist />
                                        <p>{discipline.name}</p>
                                    </div>
                                    <p>{discipline.status}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {order && (order.status === "Счет выставлен") && (
                    <>
                        <p>Счет на уточнении:</p>
                        <ul className='order-list'>
                            {order.disciplines && order.disciplines.length > 0 && order.disciplines.map((discipline) => (
                                <li key={discipline.discipline_id}>
                                    <div>
                                        <GoChecklist />
                                        <p>{discipline.name}</p>
                                    </div>
                                    <p>{discipline.status}</p>
                                </li>
                            ))}
                        </ul>
                        <hr/>
                        <div className="payment-block">
                            <div className="payment-info">
                                <div className="payment-info-one"><p className="payment-info-description">Стоимость заказа: </p><p><s>100500 ₽</s></p></div>
                                <div className="payment-info-two"><p className="payment-info-description">С учетом скидки: </p><p>{order.billing_price} ₽</p></div>
                                <div className="payment-info-free"><p className="payment-info-description">Скидка: </p><p>20500 ₽</p></div>
                            </div>
                            <div className="payment-link-block">
                                <button className="btn-warning payment-link">Перейти к оплате</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default NewOrderPage;
