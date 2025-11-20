import apiClient from './api';

export interface UserResponse {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  planId: number;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UpdateProfileRequest {
  name?: string;
  lastName?: string;
  email?: string;
}

export interface UserPlanDetails {
  planId: number;
  planName: string;
  databaseLimitPerEngine: number;
  monthlyPrice: number;
  databaseCountByEngine: { [key: string]: number };
  totalDatabases: number;
  canUpgrade: boolean;
}

export const userService = {
  /**
   * Obtiene la información del usuario actual autenticado
   * @returns Los datos del usuario incluyendo su plan actual
   */
  async getCurrentUser(): Promise<UserResponse> {
    const response = await apiClient.get<UserResponse>('/users/me');
    return response.data;
  },

  /**
   * Obtiene los detalles del plan del usuario
   */
  async getUserPlan(): Promise<UserPlanDetails> {
    const response = await apiClient.get<UserPlanDetails>('/users/plan');
    return response.data;
  },

  /**
   * Actualiza la contraseña del usuario
   */
  async changePassword(data: ChangePasswordRequest): Promise<void> {
    await apiClient.post('/users/change-password', data);
  },

  /**
   * Actualiza el perfil del usuario (nombre, apellido, email)
   */
  async updateProfile(data: UpdateProfileRequest): Promise<UserResponse> {
    const response = await apiClient.put<{ message: string, user: UserResponse }>('/users/profile', data);
    return response.data.user;
  }
};
