import React, { Component } from 'react'
import Header from '../../components/header/Header'

export class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container text-center'>
          <h2 className='p-3'>Мой профиль</h2>
        </div>
      </>
    )
  }
}

export default Profile