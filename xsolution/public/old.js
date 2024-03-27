import { refreshToken, apiRequest } from './api'; // Подключаем функции из файла api.js

handleSubmit = async (event) => {
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

    const accessToken = localStorage.getItem('accessToken');
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
    };

    if (this.state.showFields === 'no') {
        requestOptions.body = requestBody;
    } else {
        headers['Content-Type'] = 'application/json';
        requestOptions.body = requestBody;
    }

    try {
        const response = await apiRequest(`${API_URL}/order-request/`, requestOptions); // Используем функцию apiRequest из файла api.js
        const data = await response.json();
        console.log('Response from server:', data);
        if (data && data.order_id) {
            const orderId = data.order_id;
            const redirectUrl = `/new-order-page/${orderId}`;
            window.location.href = redirectUrl;
        } else {
            console.error('Order ID is missing in the server response');
        }
    } catch (error) {
        // Если возникает ошибка с токеном, пытаемся обновить его и повторить запрос
        if (error.message === 'Failed to refresh token') {
            console.error('Error refreshing token. Logging out user...');
            // Здесь можно добавить код для выхода пользователя из системы
        } else {
            console.error('There was an error with the fetch operation:', error);
            // Обработка других ошибок при запросе на сервер
        }
    }
};