import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { GoChecklist } from "react-icons/go";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from 'react-router-dom';

import API_URL from '../../config'; // Импорт адреса API

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOrders: [],
      closedOrders: []
    };
  }

  async componentDidMount() {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Токен доступа, замени на свой

      // Получение активных заказов
      const activeOrdersResponse = await fetch(`${API_URL}/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ value: "current" })
      });

      if (activeOrdersResponse.ok) {
        const activeOrdersData = await activeOrdersResponse.json();
        this.setState({ activeOrders: activeOrdersData.orders });
      } else {
        console.error('Failed to fetch active orders:', activeOrdersResponse.statusText);
      }

      // Получение закрытых заказов
      const closedOrdersResponse = await fetch(`${API_URL}/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ value: "closed" })
      });

      if (closedOrdersResponse.ok) {
        const closedOrdersData = await closedOrdersResponse.json();
        this.setState({ closedOrders: closedOrdersData.orders });
      } else {
        console.error('Failed to fetch closed orders:', closedOrdersResponse.statusText);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  }

  render() {
    const { activeOrders, closedOrders } = this.state;

    return (
        <>
          <Header />
          <div className='container header-padding'>
            <h2 className='mt-3 mb-3'>Мои заказы</h2>

            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-4"
            >
              <Tab eventKey="home" title="Активные">
                <ul className='order-list'>
                  {activeOrders.map(order => (
                      <li key={order.order_id}>
                        <div>
                          <GoChecklist />
                          <p>#{order.order_id}</p>
                        </div>
                        <p>{order.status}</p>
                        <p>{order.date_created}</p>
                        <NavLink to={`/order/${order.order_id}`}>
                          Посмотреть
                        </NavLink>
                      </li>
                  ))}
                </ul>
              </Tab>

              <Tab eventKey="profile" title="Закрытые">
                {closedOrders.length === 0 ? (
                    <h3 className='mb-4'>У вас пока нет закрытых заказов</h3>
                ) : (
                    <ul className='order-list'>
                      {closedOrders.map(order => (
                          <li key={order.order_id}>
                            <div>
                              <GoChecklist />
                              <p>#{order.order_id}</p>
                            </div>
                            <p>{order.status}</p>
                            <p>{order.date_created}</p>
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

export default Main;
