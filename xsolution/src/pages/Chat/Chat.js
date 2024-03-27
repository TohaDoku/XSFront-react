import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: [
                { text: "Привет!", sender: "user1", time: "10:00" },
                { text: "Привет, как дела?", sender: "user2", time: "10:05" },
                { text: "Всё отлично, спасибо!", sender: "user1", time: "10:10" },
                { text: "Что нового?", sender: "user1", time: "10:15" },
                { text: "Ничего особенного, занимаюсь работой.", sender: "user2", time: "10:20" },
                // Добавьте остальные сообщения по аналогии
            ]
        };
        this.messagesEndRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { message, messages } = this.state;
        if (message.trim() !== '') {
            this.setState({
                message: '',
                messages: [...messages, { text: message, sender: "user1", time: this.getCurrentTime() }]
            }, () => {
                this.scrollToBottom();
            });
        }
    }

    getCurrentTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    render() {
        const { message, messages } = this.state;
        return (
            <div className="chat-container">
                <div className="chat-header">
                    <h2>Чат</h2>
                </div>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender === 'user1' ? 'user1' : 'user2'}`}>
                            <p>{msg.text}</p>
                            <span className="time">{msg.time}</span>
                        </div>
                    ))}
                    <div ref={this.messagesEndRef} />
                </div>
                <div className="chat-input">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={message}
                            onChange={this.handleMessageChange}
                            placeholder="Введите сообщение..."
                            className='send-input'
                        />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Chat;
