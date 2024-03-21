import React, { Component } from 'react'
import Header from '../../components/header/Header'
import { GoChecklist } from "react-icons/go";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from 'react-router-dom';

export class NewOrders extends Component {
  render() {
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

              </Tab>

              <Tab eventKey="profile" title="Архив">
                <ul className='order-list'>
                  <li>
                    <div>
                      <GoChecklist />
                      <p>#4423</p>
                    </div>
                    <p>Ожидает оплаты</p>
                    <p>29 сентября 2019 в 17:00</p>
                    <NavLink to='/order'>
                      Посмотреть
                    </NavLink>
                  </li>
                  <li>
                    <div>
                      <GoChecklist />
                      <p>#4423</p>
                    </div>
                    <p>Ожидает оплаты</p>
                    <p>29 сентября 2019 в 17:00</p>
                    <NavLink to='/order'>
                      Посмотреть
                    </NavLink>
                  </li>
                  <li>
                    <div>
                      <GoChecklist />
                      <p>#4423</p>
                    </div>
                    <p>Ожидает оплаты</p>
                    <p>29 сентября 2019 в 17:00</p>
                    <NavLink to='/order'>
                      Посмотреть
                    </NavLink>
                  </li>
                  <li>
                    <div>
                      <GoChecklist />
                      <p>#4423</p>
                    </div>
                    <p>Ожидает оплаты</p>
                    <p>29 сентября 2019 в 17:00</p>
                    <NavLink to='/order'>
                      Посмотреть
                    </NavLink>
                  </li>
                </ul>

              </Tab>
            </Tabs>

          </div>

      </>
    )
  }
}

export default NewOrders