import React, { Component } from 'react';
import Header from '../../components/header/Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FileInput from "../../components/FileInput/FileInput";
import API_URL from '../../config';
import customFetch from "../../utils/RefreshToken"; // Импорт адреса API

class NewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFields: 'yes', // По умолчанию выбрано "Да"
            login: '',
            password: '',
            additionalInfo: '',
            discipline_name: '',
            service_num: '',
            files: [],
        };
    }

    componentDidMount() {
        document.getElementById('yesRadio').checked = true;
    }

    handleRadioChange = (event) => {
        this.setState({showFields: event.target.value});
    }

    handleInputChange = (event) => {
        console.log(event.target.name, event.target.value); // Добавляем для отладки

        // Если это файлы, обработайте их
        if (event.target.type === 'file') {
            let files;
            if (event.target.files) {
                files = event.target.files;
            } else if (event.dataTransfer) {
                files = event.dataTransfer.files;
            }

            if (files) {
                // Обработайте файлы здесь, например, сохраните их в состоянии
                this.setState({ selected_files: files });
            }
        } else {
            // Обновляем состояния для обоих полей service_num и order_goal
            if (event.target.name === 'service_num') {
                this.setState({
                    [event.target.name]: event.target.value,
                    order_goal: event.target.value // Обновляем order_goal с тем же значением
                });
            } else {
                this.setState({ [event.target.name]: event.target.value });
            }
        }
    }

    handleFileInputChange = (selectedFiles) => {
        this.setState({ files: selectedFiles });
    };


    handleSubmit = (event) => {
        event.preventDefault();

        let requestBody;

        if (this.state.showFields === 'yes') {
            requestBody = JSON.stringify({
                order_goal: this.state.service_num,
                lk_log: this.state.login,
                lk_pas: this.state.password,
                dop_info: this.state.additionalInfo || 'your info'
            });
        } else if (this.state.showFields === 'no') {
            const formData = new FormData(); // Создаем объект FormData для передачи файлов

            // Добавляем выбранные файлы в объект FormData
            for (const file of this.state.files) {
                formData.append('files', file);
            }

            // Добавляем остальные поля в объект FormData
            formData.append('order_goal', this.state.service_num);
            formData.append('discipline_name', this.state.discipline_name);
            formData.append('deadline', this.state.deadline);
            formData.append('dop_info', this.state.additionalInfo || 'your info');

            requestBody = formData;
        }

        const accessToken = localStorage.getItem('accessToken'); // Токен доступа, замените на свой
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
        };

        const requestOptions = {
            method: 'POST',
            headers: headers,
        };

        if (this.state.showFields === 'no') {
            // Если отправляем FormData, то устанавливаем Content-Type как 'multipart/form-data'
            // и передаем сам объект FormData в свойстве body
            requestOptions.body = requestBody;
            console.log("showFields:", this.state.showFields);
            console.log("requestBody:", requestBody);
            console.log("fetching with requestOptions:", requestOptions);
        } else {
            // Если отправляем JSON, то устанавливаем Content-Type как 'application/json'
            // и передаем строку JSON в свойстве body
            headers['Content-Type'] = 'application/json';
            requestOptions.body = requestBody;
            console.log("showFields:", this.state.showFields);
            console.log("requestBody:", requestBody);
            console.log("fetching with requestOptions:", requestOptions);
        }

        customFetch(`${API_URL}/order-request/`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response from server:', data);
                // Дополнительная логика при успешном ответе от сервера, если необходимо
            })
            .catch(error => {
                console.error('There was an error with the fetch operation:', error);
                // Обработка ошибок при запросе на сервер
            });

    };

    render() {
            return (
                <>
                    <Header/>
                    <div className='container header-padding text-center'>
                        <h2 className='p-3 mt-4'>Сделать новый заказ</h2>
                        <div className='form-block'>
                            <Row className="">
                                {/* Код формы и элементов управления */}
                                <form onSubmit={this.handleSubmit}>
                                    {/* Ваша форма */}
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <FloatingLabel
                                            controlId="floatingSelectGrid1"
                                            label="Тип услуги"
                                            className="mb-3"
                                        >
                                            <Form.Select itemID="floatingSelectGrid1" className="custom-input-main" aria-label="Floating label select example">
                                                <option>Выберите тип услуги</option>
                                                <option value="1">Комплексная помощь</option>
                                                <option value="2">Отдельные работы и дисциплины</option>
                                                <option value="3">Репетиторство и онлайн помощь</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>

                                    <Col md={{ span: 6, offset: 3 }}>
                                        <FloatingLabel
                                            controlId="floatingSelectGrid2"
                                            label="Услуга"
                                            className="mb-3"
                                        >
                                            <Form.Select
                                                className="custom-input-main"
                                                itemID="floatingSelectGrid2"
                                                aria-label="Floating label select example"
                                                onChange={this.handleInputChange}
                                                name='service_num'
                                            >
                                                <option>Услуга</option>

                                                <option value="Комплексное закрытие сессии">Комплексное закрытие сессии</option>
                                                <option value="Ликвидация задолженностей">Ликвидация задолженностей</option>
                                                <option value="Закрытие отдельных дисциплин">Закрытие отдельных дисциплин</option>
                                                <option value="Практика">Практика</option>
                                                <option value="Дипломная работа">Дипломная работа</option>
                                                <option value="Отдельные работы">Отдельные работы</option>

                                                <option value="Дипломная работа">Дипломная работа</option>
                                                <option value="Курсовая работа">Курсовая работа</option>
                                                <option value="Практика">Практика</option>
                                                <option value="Контрольная работа">Контрольная работа</option>
                                                <option value="Лабораторная работа">Лабораторная работа</option>
                                                <option value="Практическая работа">Практическая работа</option>
                                                <option value="Тестирование">Тестирование</option>
                                                <option value="Помощь специалиста">Помощь специалиста</option>
                                                <option value="Научная статья">Научная статья</option>
                                                <option value="Реферат">Реферат</option>
                                                <option value="Чертеж">Чертеж</option>
                                                <option value="Безнес план">Безнес план</option>
                                                <option value="Другое">Другое</option>

                                                <option value="Репетиторство">Репетиторство</option>
                                                <option value="Онлайн-помощь">Онлайн-помощь</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>

                                    <Col md={{span: 6, offset: 3}}>
                                    <span className="main-radio-span mb-3">
                                      <label className="main-radio-span-one">
                                        <input id="yesRadio" className="custom-input" type="radio" name="showFields" value="yes"
                                               onChange={this.handleRadioChange}/>
                                        <span className="input-span-text">Да</span>
                                      </label>
                                      <label className="main-radio-span-two">
                                        <input id="noRadio" className="custom-input" type="radio" name="showFields" value="no"
                                               onChange={this.handleRadioChange}/>
                                        <span className="input-span-text">Нет</span>
                                      </label>
                                    </span>
                                    </Col>

                                    {this.state.showFields === 'yes' && (
                                        <>
                                            <Col md={{span: 6, offset: 3}}>
                                                <FloatingLabel
                                                    controlId="floatingInput1"
                                                    label="Логин от личного кабинета"
                                                    className="mb-3"
                                                >
                                                    <Form.Control
                                                        className="custom-input-main"
                                                        itemID="floatingInput1"
                                                        type="text"
                                                        placeholder="ВУЗ"
                                                        onChange={this.handleInputChange}
                                                        name="login"
                                                    />
                                                </FloatingLabel>
                                            </Col>

                                            <Col md={{span: 6, offset: 3}}>
                                                <FloatingLabel
                                                    controlId="floatingInput2"
                                                    label="Пароль от личного кабинета"
                                                    className="mb-3"
                                                >
                                                    <Form.Control
                                                        className="custom-input-main"
                                                        itemID="floatingInput2"
                                                        type="text"
                                                        placeholder="ВУЗ"
                                                        onChange={this.handleInputChange}
                                                        name="password"
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </>
                                    )}

                                    {this.state.showFields === 'no' && (
                                        <>
                                            <Col md={{ span: 6, offset: 3 }}>
                                                <p>Укажите необходимую информацию:</p>
                                                <FloatingLabel
                                                    controlId="floatingInput3"
                                                    label="Предмет"
                                                    className="mb-3 custom-input-main"
                                                >
                                                    <Form.Control
                                                        className="custom-input-main"
                                                        itemID="floatingInput3"
                                                        type="text"
                                                        placeholder="Предмет"
                                                        onChange={this.handleInputChange}
                                                        name="discipline_name"
                                                    />
                                                </FloatingLabel>
                                            </Col>

                                            <Col md={{span: 6, offset: 3}}>
                                                <FloatingLabel
                                                    controlId="floatingInput4"
                                                    label="Укажите дедлайн"
                                                    className="mb-3"
                                                >
                                                    <Form.Control
                                                        className="custom-input-main"
                                                        itemID="floatingInput4"
                                                        type="datetime-local"
                                                        placeholder="Введите дедлайн и/или загрузите файлы"
                                                        onChange={this.handleInputChange}
                                                        name="deadline"
                                                    />
                                                </FloatingLabel>
                                            </Col>

                                            <Col className="mb-3" md={{span: 6, offset: 3}}>
                                                <FileInput
                                                    onChange={this.handleFileInputChange}
                                                />
                                            </Col>
                                        </>
                                    )}

                                    <Col md={{span: 6, offset: 3}}>
                                        <FloatingLabel controlId="floatingTextarea2" label="Пожелания">
                                            <Form.Control
                                                className="custom-input-main mb-3"
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{height: '100px'}}
                                                onChange={this.handleInputChange}
                                                name="additionalInfo"
                                            />
                                        </FloatingLabel>
                                    </Col>

                                    <Button type="submit" className='w-100' variant="warning">Продолжить</Button>
                                </form>
                            </Row>
                        </div>
                    </div>
                </>
            );
        }

    }

export default NewOrder;
