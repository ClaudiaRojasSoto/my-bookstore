import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'ffGQXar15qbfAJpAIAgz';

export const getAllApiBooks = async () => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addBooktoAPI = async (data) => {
  console.log(data); // Esto imprimirá el objeto book en la consola del navegador.
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBookFromAPI = async (id) => {
  console.log(id); // Esto imprimirá el id en la consola del navegador.
  const url = `${BASE_URL}/apps/${APP_ID}/books/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
