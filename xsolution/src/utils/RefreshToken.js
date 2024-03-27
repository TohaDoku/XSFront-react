import API_URL from '../config'; // Импорт адреса API

async function customFetch(url, options) {
    const response = await fetch(url, options);

    if (response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        console.log(refreshToken)
        if (!refreshToken) {
            throw new Error('User is not authorized');
        }

        const refreshResponse = await fetch(`${API_URL}/token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            },
            body: JSON.stringify({ refresh: refreshToken }) // Отправляем токен обновления как объект JSON
        });

        if (!refreshResponse.ok) {
            throw new Error('Failed to refresh token');
        }

        const data = await refreshResponse.json();
        localStorage.setItem('accessToken', data.access);

        // Обновляем заголовок запроса с новым токеном доступа
        options.headers.Authorization = `Bearer ${data.access}`;

        // Повторяем запрос с обновленным токеном доступа
        return customFetch(url, options);
    }

    return response;
}

export default customFetch;