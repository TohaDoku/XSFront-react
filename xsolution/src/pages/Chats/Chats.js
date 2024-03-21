import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Используйте правильный импорт для компонента Link
import { IoClose } from "react-icons/io5";

export class Chats extends Component {
    render() {
        // Предположим, что у вас есть массив объектов с данными о чатах
        const chats = [
            {
                id: 1,
                image: 'https://x-solution.ru/media/Profiles/2024-01-18/yellow.jpg',
                name: 'X-solution | Менеджер',
                lastMessage: 'Привет, как дела?',
                lastMessageDate: '1.11.2023',
                link: '/chat/1' // Путь к чату
            },
            {
                id: 2,
                image: 'https://x-solution.ru/media/uploads/identifications/2024-03-19/SPSg9ymmU5c.jpg',
                name: 'X-solution | Исполнитель',
                lastMessage: 'Привет, как дела?',
                lastMessageDate: '1.11.2023',
                link: '/chat/1' // Путь к чату
            },
        ];

        return (
            <>
                <div className="chats-header">
                    <h4>Чат</h4>
                    <Link to="/main-page">
                        <IoClose className='svg-close' />
                    </Link>
                </div>
                <div className="chats-body">
                    <ul className="chat-list">
                        {chats.map(chat => (
                            <li key={chat.id} className="chat-item">
                                <Link to={chat.link} className="chat-link"> {/* Используйте Link вместо обычного ссылка */}
                                    <div className="chat-details">
                                        <span className="chat-details-span">
                                            <img src={chat.image} alt={chat.name} className="chat-image" />
                                            <span>
                                                <span className="chat-name">{chat.name}</span>
                                                <br />
                                                <span className="last-message">{chat.lastMessage}</span>
                                            </span>
                                        </span>
                                        <div className="last-message-date">
                                            {chat.lastMessageDate}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default Chats;
