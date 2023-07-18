import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'ffGQXar15qbfAJpAIAgz';

export const getAllApiBooks = async () => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  try {
    const { data } = await axios.get(url);
    const arrayData = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        ...book,
        item_id: key,
      };
    });
    return arrayData;
  } catch (error) {
    throw new Error('Error fetching books from the API');
  }
};

export const addBooktoAPI = async (data) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error('Error adding book to the API');
  }
};

export const deleteBookFromAPI = async (id) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting book from the API');
  }
};
