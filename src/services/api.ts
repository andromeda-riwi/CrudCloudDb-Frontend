import axios from 'axios';
import { authService } from './auth';
import router from '@/router';

const apiClient = axios.create({
  baseURL: 'http://localhost:5063/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para añadir el token a cada petición
apiClient.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Si el error es 401 (No autorizado), el token puede haber expirado
    // Pero solo si no es un endpoint que no existe
    if (error.response?.status === 401) {
      authService.logout();
      router.push('/login');
    }
    // No hacer nada especial con 404, dejar que el código lo maneje
    return Promise.reject(error);
  }
);

export default apiClient;
