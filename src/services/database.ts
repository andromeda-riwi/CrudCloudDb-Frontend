import apiClient from './api';

export interface Database {
  id: string;
  name: string;
  engine: string;
  status: string;
  createdAt?: string;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
}

export interface DatabaseCredentials {
  host: string;
  port: number;
  databaseName: string;
  username: string;
  password: string;
}

export interface CreateDatabaseRequest {
  engine: string; // 'MySQL', 'PostgreSQL', 'MongoDB'
}

export interface DashboardStats {
  totalDatabases: number;
  databasesByEngine: { [key: string]: number };
  currentPlan: string;
  maxDatabases: number;
  monthlyPrice: number;
  nextBillingDate?: string;
}

export const databaseService = {
  // Obtener todas las bases de datos del usuario
  async getUserDatabases(): Promise<Database[]> {
    try {
      console.log('getUserDatabases - iniciando petición GET /Databases');
      const response = await apiClient.get('/Databases', { timeout: 10000 }); // 10 segundos timeout
      console.log('getUserDatabases - respuesta recibida:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Error obteniendo bases de datos:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status
      });

      // Si es un error de timeout o conexión, podría ser problema del backend
      if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
        console.error('⚠️ El backend no responde o está tardando demasiado');
      }

      return [];
    }
  },

  // Obtener una base de datos por ID
  async getDatabaseById(id: string): Promise<Database> {
    const response = await apiClient.get(`/Databases/${id}`);
    return response.data;
  },

  // Crear una nueva base de datos
  async createDatabase(data: CreateDatabaseRequest): Promise<Database> {
    const response = await apiClient.post('/Databases', data);
    return response.data;
  },

  // Eliminar una base de datos
  async deleteDatabase(id: string): Promise<void> {
    await apiClient.delete(`/Databases/${id}`);
  },

  // Obtener credenciales de una base de datos
  async getDatabaseCredentials(id: string): Promise<DatabaseCredentials> {
    try {
      const response = await apiClient.get(`/Databases/${id}/credentials`);
      return response.data;
    } catch (error) {
      // Si el endpoint de credenciales no existe, intentar obtener la BD completa
      console.warn('Endpoint de credenciales no disponible, usando datos de la BD');
      const db = await this.getDatabaseById(id);
      return {
        host: db.host || 'localhost',
        port: db.port || 3306,
        databaseName: db.name,
        username: db.username || 'user',
        password: db.password || '********'
      };
    }
  },

  // Obtener estadísticas del dashboard
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      // Intentar obtener estadísticas del endpoint si existe
      const response = await apiClient.get('/Databases/stats');
      return response.data;
    } catch (error) {
      // Si el endpoint no existe, calcular stats desde las bases de datos
      console.warn('Endpoint de stats no disponible, calculando desde las bases de datos');

      try {
        const databases = await this.getUserDatabases();
        const databasesByEngine: { [key: string]: number } = {};

        databases.forEach(db => {
          databasesByEngine[db.engine] = (databasesByEngine[db.engine] || 0) + 1;
        });

        return {
          totalDatabases: databases.length,
          databasesByEngine,
          currentPlan: 'Básico',
          maxDatabases: 10,
          monthlyPrice: 0,
          nextBillingDate: undefined
        };
      } catch {
        return {
          totalDatabases: 0,
          databasesByEngine: {},
          currentPlan: 'Básico',
          maxDatabases: 10,
          monthlyPrice: 0,
          nextBillingDate: undefined
        };
      }
    }
  }
};

