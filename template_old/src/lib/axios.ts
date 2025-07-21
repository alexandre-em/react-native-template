import axios, { AxiosInstance } from 'axios';

class AuthAxiosInstance {
  instance: AxiosInstance | null = null;

  constructor() {
    const headers = { 'Access-Control-Allow-Origin': '*' };

    // add access token if stored

    this.instance = axios.create({
      baseURL: 'https://monorepo-latest.onrender.com/api/v1',
      headers,
    });
  }

  addAccessTokenHeader(token: string) {
    if (!token) throw new Error('No access token detected');
    if (!this.instance) throw new Error('Instance not yet initialized');

    this.instance.interceptors.request.use(async config => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }
}

class NoAuthAxiosInstance {
  instance: AxiosInstance | null = null;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000/api/v1',
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
}

export const authAxios = new AuthAxiosInstance();
export const noAuthAxios = new NoAuthAxiosInstance();
