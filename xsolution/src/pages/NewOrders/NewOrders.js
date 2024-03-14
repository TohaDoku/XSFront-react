import React, { Component } from 'react'
import Header from '../../components/header/Header'
import { GoChecklist } from "react-icons/go";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export class NewOrders extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container'>
          <h2 className='mt-5'>Новые заказы</h2>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Новые">
              НОВЫЕ ЗАКАЗЫЫЫЫЫЫЫЫЫЫЫЫЫ
            </Tab>

            <Tab eventKey="profile" title="Архив">
              <ul className='order-list'>
                <li>
                  <div>
                    <GoChecklist />
                    #4423
                  </div>
                  
                  <p>Ожидает оплаты</p>
                  <p>29 сентября 2019 в 17:00</p>
                  <a>Посмотреть</a>
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