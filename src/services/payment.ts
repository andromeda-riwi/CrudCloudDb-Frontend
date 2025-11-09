import apiClient from './api';

export interface CreatePreferenceRequest {
  planId: number;
}

export interface CreatePreferenceResponse {
  preferenceId: string;
  initPoint: string; // URL de la pasarela de pago
}

export const paymentService = {
  /**
   * Crea una preferencia de pago para un plan específico
   * @param planId ID del plan (2: Intermedio, 3: Avanzado)
   * @returns La respuesta con la URL de la pasarela de pago
   */
  async createPreference(planId: number): Promise<CreatePreferenceResponse> {
    const response = await apiClient.post<CreatePreferenceResponse>(
      '/payments/preference',
      { planId }
    );
    return response.data;
  },

  /**
   * Redirige al usuario a la pasarela de pago
   * @param initPoint URL de la pasarela de pago
   */
  redirectToPayment(initPoint: string): void {
    window.location.href = initPoint;
  }
};

