import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/auth',
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  role?: string;
}

export const login = async (credentials: LoginCredentials): Promise<string> => {
  try {
    const response = await api.post('/login', credentials);
    return response.data.token;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const register = async (data: RegisterData): Promise<any> => {
  try {
    const response = await api.post('/register', data);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export default { login, register };
