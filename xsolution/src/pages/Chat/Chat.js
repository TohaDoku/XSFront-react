import React, { Component } from 'react';
import './Chat.css';
import ava from './yellow.jpg'
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import {NavLink} from "react-router-dom";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { "text": "Привет!", "sender": "user1", "time": "10:00" },
                { "text": "Привет, как дела?", "sender": "user2", "time": "10:05" },
                { "text": "Всё отлично, спасибо!", "sender": "user1", "time": "10:10" },
                { "text": "Что нового?", "sender": "user1", "time": "10:15" },
                { "text": "Ничего особенного, занимаюсь работой.", "sender": "user2", "time": "10:20" },
                { "text": "Понятно. Как идут дела на работе?", "sender": "user1", "time": "10:25" },
                { "text": "Довольно успешно. У нас новый проект.", "sender": "user2", "time": "10:30" },
                { "text": "Это звучит интересно. Расскажи подробнее.", "sender": "user1", "time": "10:35" },
                { "text": "Проект связан с разработкой нового приложения.", "sender": "user2", "time": "10:40" },
                { "text": "Какие функции будут в приложении?", "sender": "user1", "time": "10:45" },
                { "text": "Мы планируем добавить функцию голосовых сообщений и видеозвонков.", "sender": "user2", "time": "10:50" },
                { "text": "Звучит потрясающе! Когда ожидается выпуск?", "sender": "user1", "time": "10:55" },
                { "text": "Мы рассчитываем выпустить его через пару месяцев.", "sender": "user2", "time": "11:00" },
                { "text": "Отлично! Жду с нетерпением.", "sender": "user1", "time": "11:05" },
                { "text": "А как твои дела в личной жизни?", "sender": "user1", "time": "11:10" },
                { "text": "Всё тихо, ничего нового.", "sender": "user2", "time": "11:15" },
                { "text": "Понятно. Время летит быстро, правда?", "sender": "user1", "time": "11:20" },
                { "text": "Да, кажется, только вчера мы начали этот проект.", "sender": "user2", "time": "11:25" },
                { "text": "Невероятно, как быстро все меняется.", "sender": "user1", "time": "11:30" },
                { "text": "Это точно. Всегда приятно видеть прогресс.", "sender": "user2", "time": "11:35" }
            ],
            newMessage: ''
        };
        this.chatBodyRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatBodyRef.current.scrollTop = this.chatBodyRef.current.scrollHeight;
    };

    handleMessageChange = (event) => {
        this.setState({ newMessage: event.target.value });
    }

    sendMessage = () => {
        const { newMessage } = this.state;
        if (newMessage.trim() === '') return;
        const currentTime = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        const newMessages = [...this.state.messages, { text: newMessage, sender: "user2", time: currentTime }];
        this.setState({ messages: newMessages, newMessage: '' });
    }

    render() {
        const { messages, newMessage } = this.state;

        return (
            <div className="chat-container">
                <div className="chat-header">
                    <div>
                        <NavLink to='/chats'>
                            <FaArrowLeft
                                className='back-arrow'
                            />
                        </NavLink>
                    </div>
                    <div className='chat-header-inner'>
                        <img className='chat-header-img' src={ava} alt=""/>
                        <div>
                            <p className='chat-header-main-text'>X-Solution</p>
                            <p className='chat-header-small-text'>На связи 24/7</p>
                        </div>
                    </div>
                    <div>
                        <NavLink to='/main-page'>
                            <IoClose
                                className='chat-close'
                            />
                        </NavLink>
                    </div>
                </div>
                <div ref={this.chatBodyRef} className="chat-body">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.sender === 'user1' ? 'user1' : 'user2'}`}
                        >
                            {message.sender === 'user1' && (
                                <div className="avatar">
                                    <img className='avatar-img' src={ava} alt=""/>
                                </div>
                            )}
                            <div className="message-content">
                                <div className={`message-text ${message.sender === 'user1' ? 'user1-text' : 'user2-text'}`}>{message.text}</div>
                                <div className={`message-time ${message.sender === 'user1' ? 'user1-time' : 'user2-time'}`}>{message.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={this.handleMessageChange}
                        placeholder="Введите сообщение..."
                        className='send-message'
                    />
                    <button type='submit' onClick={this.sendMessage}>
                        <FaArrowUp
                            className='send-icon'
                        />
                    </button>
                </div>
            </div>
        );
    }
}

export default Chat;
