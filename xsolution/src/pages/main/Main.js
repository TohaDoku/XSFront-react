import React, { Component } from 'react'
import Header from '../../components/header/Header'
import { GoChecklist } from "react-icons/go";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from 'react-router-dom';


export class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container'>
          <h2 className='mt-3 mb-3'>Мои заказы</h2>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-4"
          >
            <Tab eventKey="home" title="Активные">
              
              <ul className='order-list'>
                <li>
                  <div>
                    <GoChecklist />
                    <p>#4423</p>
                  </div>
                  <p>Первичная обработка</p>
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
                  <p>Регулярная работа</p>
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
                  <p>Заказ в работе</p>
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
                  <p>Ожидает закрытия</p>
                  <p>29 сентября 2019 в 17:00</p>
                  <NavLink to='/order'>
                    Посмотреть
                  </NavLink>
                </li>
              </ul>
              
            </Tab>

            <Tab eventKey="profile" title="Закрытые">
              <h3 className='mb-4'>У вас пока нет закрытых заказов</h3>
            </Tab>
          </Tabs>
          
        </div>
      </>
    )
  }
}

export default Main