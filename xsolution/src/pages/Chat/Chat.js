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
                { id: 2, text: 'Как дела?', sender: 'other', timestamp: '2024-03-19T12:32:00Z' },
                // остальные сообщения
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
                <div className="chats-header">

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
