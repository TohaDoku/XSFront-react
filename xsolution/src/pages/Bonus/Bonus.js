import React, { Component } from 'react';
import Header from '../../components/header/Header';
import './Bonus.css';

class Bonus extends Component {
  constructor(props) {
    super(props);
    this.inviteLinkRef = React.createRef(); // создаем ссылку на элемент для копирования
    this.state = {
      invitedFriends: ["Арсен Арустамян", "Илья Пучнин", "Владимир Павлов"], // тестовые данные для приглашенных друзей
      copied: false, // флаг для отображения сообщения о скопированной ссылке
    };
  }

  // Функция для копирования ссылки
  copyLink = () => {
    // Примерная реферальная ссылка
    const referralLink = "https://x-solution.com/referral?user_id=123";

    // Копируем ссылку в буфер обмена
    navigator.clipboard.writeText(referralLink).then(() => {
      // Если копирование прошло успешно, устанавливаем флаг copied в true
      this.setState({ copied: true });

      // Симулируем сброс флага через 2 секунды
      setTimeout(() => {
        this.setState({ copied: false });
      }, 2000);
    }).catch(error => {
      // Обработка ошибок копирования
      console.error('Ошибка копирования:', error);
    });
  }

  render() {
    return (
        <>
          <Header />
          <div className='container'>
            <h2>Пригласи друга</h2>
            <p>Распишите здесь условия бонусов и дайте ссылку для приглашения друзей.</p>
            {/* Ссылка для копирования */}
            <a href="#" ref={this.inviteLinkRef} onClick={this.copyLink}>Скопировать ссылку</a>
            {/* Оповещение о скопированной ссылке */}
            {this.state.copied && <p>Ссылка скопирована!</p>}
            <h3>Приглашенные друзья:</h3>
            <ul>
              {/* Отображение списка приглашенных друзей */}
              {this.state.invitedFriends.map((friend, index) => (
                  <li key={index}>{friend}</li>
              ))}
            </ul>
          </div>
        </>
    );
  }
}

export default Bonus;
