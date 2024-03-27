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
                <h2 className='mt-3 mb-3'>Архивный заказ № {id ? id : 'Loading...'}</h2>

                {order && (order.status === "Архив") && (
                    <>
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
                        <div>
                            <p>Ваш заказ находится в архиве, позвоните нам, чтобы его восставновить, звонок бесплатный: <a
                                href="tel:84954870177">8 (495) 487-01-77</a></p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default NewOrderPage;
