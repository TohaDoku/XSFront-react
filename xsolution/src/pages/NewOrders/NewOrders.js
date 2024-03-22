import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { GoChecklist } from "react-icons/go";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from 'react-router-dom';

import API_URL from '../../config'; // Импорт адреса API

class NewOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  async componentDidMount() {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Токен доступа, замените на свой
      // Отправка запроса для получения новых заказов
      const newOrdersResponse = await fetch(`${API_URL}/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ value: "new" })
      });
      if (!newOrdersResponse.ok) {
        throw new Error(`Failed to fetch new orders: ${newOrdersResponse.statusText}`);
      }
      const newOrdersData = await newOrdersResponse.json();

      // Отправка запроса для получения архивных заказов
      const oldOrdersResponse = await fetch(`${API_URL}/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ value: "old" }) // Тело запроса для архивных заказов
      });
      if (!oldOrdersResponse.ok) {
        throw new Error(`Failed to fetch old orders: ${oldOrdersResponse.statusText}`);
      }
      const oldOrdersData = await oldOrdersResponse.json();

      // Обновление состояния компонента с полученными данными
      this.setState({
        orders: newOrdersData.orders,
        oldOrders: oldOrdersData.orders
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  }

  render() {
    const { orders, oldOrders } = this.state;

    return (
        <>
          <Header />
          <div className='container header-padding'>
            <h2 className='mt-3 mb-3'>Новые заказы</h2>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-4"
            >
              <Tab eventKey="home" title="Новые">
                {orders.length === 0 ? (
                    <>
                      <h3 className='mb-4'>У вас пока нет активных заказов</h3>

                      <div className='sale-block'>
                        <div className='sale-block-one'>
                          <div>
                            <h5>Получите скидку 30%</h5>
                            <p>Если вы впервые делаете у нас заказ, мы проведём вам скидку в размере 30% от стоимости заказа</p>
                          </div>
                          <GoChecklist />
                        </div>
                        <div className='sale-block-two'>
                          <NavLink to='/new-order'>
                            Сделать заказ
                          </NavLink>
                        </div>
                      </div>
                    </>
                ) : (
                    <ul className='order-list'>
                      {orders.map(order => (
                          <li key={order.order_id}>
                            <div>
                              <GoChecklist />
                              <p>{order.order_id}</p>
                            </div>
                            <p>{order.status}</p>
                            <p>{order.date}</p>
                            <NavLink to={`/order/${order.order_id}`}>
                              Посмотреть
                            </NavLink>
                          </li>
                      ))}
                    </ul>
                )}
              </Tab>
              <Tab eventKey="profile" title="Архив">
                {oldOrders && oldOrders.length === 0 ? (
                    <h3 className='mb-4'>У вас пока нет архивных заказов</h3>
                ) : (
                    <ul className='order-list'>
                      {oldOrders && oldOrders.map(order => (
                          <li key={order.order_id}>
                            <div>
                              <GoChecklist />
                              <p>{order.order_id}</p>
                            </div>
                            <p>{order.status}</p>
                            <p>{order.date}</p>
                            <NavLink to={`/order/${order.order_id}`}>
                              Посмотреть
                            </NavLink>
                          </li>
                      ))}
                    </ul>
                )}
              </Tab>
            </Tabs>
          </div>
        </>
    );
  }
}

export default NewOrders;
