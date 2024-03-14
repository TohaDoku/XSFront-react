import React, { Component } from 'react'
import Header from '../../components/header/Header'

export class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container'>
          <p>МОИ ЗАКАЗЫ</p>
          Основная страница Сюда юзер попадает если уже зареган
        </div>
      </>
    )
  }
}

export default Main