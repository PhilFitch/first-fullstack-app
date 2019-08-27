const URL = '/api';

export function getPods() {
    const url = `${URL}/cart_pods`;

    return fetch(url)
        .then(response => response.json());
}