import apiClient from './api';

export interface UserResponse {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  planId: number;
}

export const userService = {
  /**
   * Obtiene la información del usuario actual autenticado
   * @returns Los datos del usuario incluyendo su plan actual
   */
  async getCurrentUser(): Promise<UserResponse> {
    const response = await apiClient.get<UserResponse>('/users/me');
    return response.data;
  }
};

