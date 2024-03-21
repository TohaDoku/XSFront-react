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
      orders: []
    };
  }

  async componentDidMount() {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Токен доступа, замени на свой
      const ordersResponse = await fetch(`${API_URL}/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ value: "current" })
      });
      if (ordersResponse.ok) {
        const ordersData = await ordersResponse.json();
        this.setState({ orders: ordersData.orders });
      } else {
        console.error('Failed to fetch orders:', ordersResponse.statusText);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  }

  render() {
    const { orders } = this.state;

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
                  {orders.map(order => (
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
                <h3 className='mb-4'>У вас пока нет закрытых заказов</h3>
              </Tab>
            </Tabs>
          </div>
        </>
    );
  }
}

export default Main;
