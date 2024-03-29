import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.webp'
import profile from './profile.png'

export class Header extends Component {
  render() {
    return (
      <>
          <Navbar expand="md" className="bg-body-tertiary">
              <Container>
                  <NavLink className='navbar-brand' to='/main-page'>
                      <img className='logo-img' src={logo} />
                  </NavLink>
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <NavLink className="nav-link" to='/main-page'>
                          Мои заказы
                      </NavLink>
                      <NavLink className="nav-link" to='/new-orders'>
                          Новые заказы
                      </NavLink>
                      <NavLink className="nav-link" to='/new-order'>
                          Новый заказ
                      </NavLink>
                      <NavLink className="nav-link" to='/chats'>
                          Чаты
                      </NavLink>
                      <NavLink className="nav-link" to='/bonus'>
                          Бонусы
                      </NavLink>
                  </Nav>

                  <Dropdown className=" mx-2" autoClose={false}>
                      <Dropdown.Toggle id="dropdown-autoclose-false">
                          <p className='profile-name'>Антон</p> <img src={profile} alt="" className="profile-img"/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <NavLink className='dropdown-item' to='/profile'>Профиль</NavLink>
                          <Dropdown.Divider />
                          <NavLink className='dropdown-item' to='/'>Выход</NavLink>
                      </Dropdown.Menu>
                  </Dropdown>
              </Container>
          </Navbar>

        <div className='mobile-menu'>
            <ul className='logo-nav-wrapper'>
                <li>
                  <NavLink to='/main-page'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><defs><linearGradient id="dsId_rFplq5syIN0_linear_1524_1627" x1="14.5" y1="6" x2="22.725" y2="19.595" gradientUnits="userSpaceOnUse"><stop ></stop><stop offset="1" ></stop></linearGradient></defs><path   d="M1.5 8.5a4 4 0 0 1 4-4H18l-4 15H1.5v-11Zm4.5 6a2 2 0 0 0-2 2h3.5a2 2 0 0 0 2-2H6Z" fill="currentColor"></path><path d="M18 4.5h4.5v11a4 4 0 0 1-4 4H14l4-15Z" fill="url(#dsId_rFplq5syIN0_linear_1524_1627)"></path></svg>
                    <p className='mobile-menu-text'>Мои заказы</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/new-orders'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path opacity=".85"   d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9 4.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Z" fill="currentColor"></path><circle opacity=".35" cx="12" cy="12" r="4.75" fill="currentColor"></circle></svg>
                    <p className='mobile-menu-text'>Новые заказы</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/new-order'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><defs><linearGradient id="dsId_n1IIiZDgFb0_linear_34655_63529" x1="21" y1="12" x2="6.357" y2="19.995" gradientUnits="userSpaceOnUse"><stop  ></stop><stop offset="1" ></stop></linearGradient></defs><path d="M3 12h18l-2.587 6.714a2 2 0 0 1-1.867 1.281H7.287a2 2 0 0 1-1.881-1.321L3 12Z" fill="url(#dsId_n1IIiZDgFb0_linear_34655_63529)"></path><path d="M1.5 10a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v2h-21v-2Z" fill="currentColor"></path><path d="M9.21 7.322A2.5 2.5 0 0 0 8 4L5.67 9h2.758l.782-1.678ZM18.327 9h-2.759l-.783-1.68a2.5 2.5 0 0 1 1.21-3.322L18.326 9Z" fill="currentColor"></path></svg>
                    <p className='mobile-menu-text'>Новый заказ</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/chats'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><defs><linearGradient id="dsId_8hlAA4YFJG0_linear_1525_566" x1="11.75" y1="4.5" x2="22.689" y2="22.583" gradientUnits="userSpaceOnUse"><stop ></stop><stop offset="1" ></stop></linearGradient></defs><path   d="M1.5 4.5h16A4.5 4.5 0 0 1 22 9v14l-2.244-2.409A5 5 0 0 0 16.098 19H6a4.5 4.5 0 0 1-4.5-4.5v-10ZM6 11a3 3 0 0 1 3-3h8a3 3 0 0 1-3 3H6Zm3 2a3 3 0 0 0-3 3h4a3 3 0 0 0 3-3H9Z" fill="url(#dsId_8hlAA4YFJG0_linear_1525_566)"></path><path opacity=".3" d="M6 16a3 3 0 0 1 3-3h4a3 3 0 0 1-3 3H6Z" fill="currentColor"></path></svg>
                    <p className='mobile-menu-text'>Чаты</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/bonus'> 
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path opacity=".6" d="M1 11a3 3 0 0 1 6 0v1a3 3 0 0 1-3 3H1v-4Z" fill="currentColor"></path><path opacity=".75" d="M9 11a3 3 0 1 1 6 0v1a3 3 0 0 1-3 3H9v-4Z" fill="currentColor"></path><path d="M17 11a3 3 0 1 1 6 0v1a3 3 0 0 1-3 3h-3v-4Z" fill="currentColor"></path></svg>
                    <p className='mobile-menu-text'>Бонусы</p>
                  </NavLink>
                </li>
            </ul>
        </div>

      </>
    )
  }
}

export default Header