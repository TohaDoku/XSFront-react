import { fetchWithRetry } from './api'; // Путь к вашему файлу api.js

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
        headers: headers,
    };

    if (this.state.showFields === 'no') {
        // Если отправляем FormData, то передаем сам объект FormData в свойстве body
        requestOptions.body = requestBody;
    } else {
        // Если отправляем JSON, то устанавливаем Content-Type как 'application/json'
        // и передаем строку JSON в свойстве body
        headers['Content-Type'] = 'application/json';
        requestOptions.body = requestBody;
    }

    fetchWithRetry(`${API_URL}/order-request/`, requestOptions) // Заменяем fetch на fetchWithRetry
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
