import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/elections',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface Election {
  _id: string;
  title: string;
  candidates: any[];
}

export const list = async (): Promise<Election[]> => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch elections');
  }
};

export const get = async (id: string): Promise<Election> => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch election');
  }
};

export const create = async (data: any): Promise<any> => {
  try {
    const response = await api.post('/', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create election');
  }
};

export const getResults = async (id: string): Promise<any> => {
  try {
    const response = await api.get(`/results/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch results');
  }
};

export default { list, get, create, getResults };
