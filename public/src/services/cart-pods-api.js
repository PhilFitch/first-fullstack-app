const URL = '/api';

export function getPods() {
    const url = `${URL}/pods`;

    return fetch(url)
        .then(response => response.json());
}