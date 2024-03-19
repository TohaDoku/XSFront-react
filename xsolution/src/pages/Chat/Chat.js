import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { HiOutlinePaperClip } from "react-icons/hi";
import { IoIosArrowRoundUp } from "react-icons/io";
import './Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.chatBodyRef = React.createRef();
        this.state = {
            messages: [
                { id: 1, text: 'Привет!', sender: 'user', timestamp: '2024-03-19T12:30:00Z' },
                { id: 2, text: 'Привет! У меня все отлично. Как у тебя?', sender: 'other', timestamp: '2024-03-19T12:32:00Z' },
                { id: 3, text: 'У меня тоже все хорошо, спасибо!', sender: 'user', timestamp: '2024-03-19T12:35:00Z' },
                { id: 4, text: 'Это замечательно. Чем занимаешься сегодня?', sender: 'other', timestamp: '2024-03-19T12:37:00Z' },
                { id: 5, text: 'Сегодня у меня свободный день, так что планирую почитать книгу.', sender: 'user', timestamp: '2024-03-19T12:40:00Z' },
                { id: 6, text: 'Какой интересный выбор! Что будешь читать?', sender: 'other', timestamp: '2024-03-19T12:42:00Z' },
                { id: 7, text: 'Я думаю начать с нового романа Стивена Кинга.', sender: 'user', timestamp: '2024-03-19T12:45:00Z' },
                { id: 8, text: 'О, это звучит захватывающе! У меня тоже есть его книги, но я еще не прочитал.', sender: 'other', timestamp: '2024-03-19T12:48:00Z' },
                { id: 9, text: 'Они действительно увлекательны. Ты можешь попробовать прочитать его.', sender: 'user', timestamp: '2024-03-19T12:50:00Z' },
                { id: 10, text: 'Спасибо за рекомендацию! Я обязательно попробую.', sender: 'other', timestamp: '2024-03-19T12:53:00Z' },
                { id: 11, text: 'Как проходит твой день?', sender: 'user', timestamp: '2024-03-19T12:55:00Z' },
                { id: 12, text: 'Мой день проходит довольно хорошо. Просто отвлекся на некоторое время, чтобы пообщаться с тобой.', sender: 'other', timestamp: '2024-03-19T12:58:00Z' },
                { id: 13, text: 'Это здорово, что у тебя есть время для общения. Я всегда рад пообщаться с тобой.', sender: 'user', timestamp: '2024-03-19T13:00:00Z' },
                { id: 14, text: 'Да, общение с тобой приносит мне удовольствие. Мы всегда находим темы для интересных разговоров.', sender: 'other', timestamp: '2024-03-19T13:03:00Z' },
                { id: 15, text: 'Точно! Это одна из причин, почему я так ценю наше общение.', sender: 'user', timestamp: '2024-03-19T13:05:00Z' },
                { id: 16, text: 'Давай оставим это на следующий раз. У меня сейчас есть важные дела, которые мне нужно сделать.', sender: 'other', timestamp: '2024-03-19T13:08:00Z' },
                { id: 17, text: 'Конечно, понимаю. Удачи с твоими делами! Давай поговорим позже.', sender: 'user', timestamp: '2024-03-19T13:10:00Z' },
            ],
            newMessage: '' // состояние для хранения нового сообщения
        };
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatBodyRef.current.scrollTop = this.chatBodyRef.current.scrollHeight;
    }

    handleInputChange = (event) => {
        this.setState({ newMessage: event.target.value });
    }

    handleSendMessage = () => {
        const { newMessage } = this.state;
        if (newMessage.trim() !== '') {
            // Отправка сообщения на сервер или другие действия
            // В данном примере добавляем новое сообщение в состояние
            const newMessageObj = {
                id: this.state.messages.length + 1,
                text: newMessage,
                sender: 'user', // предположим, что пользователь отправляет сообщение
                timestamp: new Date().toISOString() // текущее время
            };
            this.setState(prevState => ({
                messages: [...prevState.messages, newMessageObj],
                newMessage: '' // очищаем поле ввода
            }));
        }
    }

    render() {
        const { messages, newMessage } = this.state;

        return (
            <div className='main-chat-div'>
                <div className="chat-header">

                    <div className='chats-header-logo'>

                        <Link to="/chats">
                            <FaArrowLeft />
                        </Link>
                        <img src="https://x-solution.ru/media/Profiles/2024-01-18/yellow.jpg" alt=""/>
                        <span>
                                <h5 className='link-chat-p'>X-Solution | Менеджер</h5>
                                <p className='link-chat-p'>На связи 24/7</p>
                            </span>

                    </div>

                    <Link to="/main-page">
                        <IoClose className='svg-close' />
                    </Link>
                </div>
                <div className="chat-body" ref={this.chatBodyRef}>
                    <ul className="message-list">
                        {messages.map(message => (
                            <li key={message.id} className={`message ${message.sender}`}>
                                <div className="message-text">{message.text}</div>
                                <div className="message-timestamp">{new Date(message.timestamp).toLocaleString()}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="chat-footer">
    <span className="chat-file">
        <HiOutlinePaperClip />
    </span>
                    <span className="chat-input">
        <input
            placeholder="Напишите сообщение..."
            type="text"
            value={newMessage}
            onChange={this.handleInputChange}
        />
    </span>
                    <span className="chat-send" onClick={this.handleSendMessage}>
        <IoIosArrowRoundUp />
    </span>
                </div>
            </div>
        );
    }
}

export default Chat;
