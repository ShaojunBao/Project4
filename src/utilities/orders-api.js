import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

export async function getAll() {
    return sendRequest(BASE_URL, 'GET');
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function create(orderData) {
    return sendRequest(BASE_URL, 'POST', orderData);
}

export async function update(id, orderData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', orderData);
}

export async function remove(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}