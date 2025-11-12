interface UserData {
  userName?: string;
  email?: string;
  userId?: string;
  name?: string;
}

export const authService = {
  getToken(): string | null {
    return localStorage.getItem('authToken');
  },

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },

  logout(): void {
    localStorage.removeItem('authToken');
  },

  // Decodificar el JWT y obtener los datos del usuario
  getUserData(): UserData | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      // Decodificar el payload del JWT (parte media del token)
      const parts = token.split('.');
      if (parts.length < 2) return null;

      const base64Url = parts[1];
      if (!base64Url) return null;

      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      const payload = JSON.parse(jsonPayload);

      // Los datos pueden estar en diferentes propiedades según cómo el backend configure el JWT
      // ClaimTypes.Name en .NET genera el claim: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
      return {
        userName: payload.userName || payload.unique_name || payload.sub,
        email: payload.email,
        userId: payload.userId || payload.nameid,
        name: payload.name ||
              payload.given_name ||
              payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
      };
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  },

  // Obtener el nombre del usuario para mostrarlo
  getUserName(): string {
    const userData = this.getUserData();
    return userData?.name || userData?.userName || 'Usuario';
  }
};

