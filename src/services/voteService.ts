import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/votes',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface VoteData {
  electionId: string;
  candidateId: string;
  ip: string;
  device: string;
  userAgent: string;
}

export const castVote = async (data: VoteData): Promise<any> => {
  try {
    const response = await api.post('/', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to cast vote');
  }
};

export default { castVote };
