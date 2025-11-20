import apiClient from './api';

export interface AuditLog {
  id: string;
  action: string;
  entityType: string;
  entityId?: string;
  details?: string;
  ipAddress: string;
  timestamp: string;
  userId?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount?: number; // Si el backend lo devolviera, por ahora asumimos lista simple o adaptamos
}

export const auditService = {
  /**
   * Obtiene los logs de auditoría del usuario actual
   * @param skip Número de registros a saltar
   * @param take Número de registros a tomar
   */
  async getMyLogs(skip: number = 0, take: number = 50): Promise<AuditLog[]> {
    const response = await apiClient.get('/Audit', {
      params: { skip, take }
    });
    return response.data;
  }
};

