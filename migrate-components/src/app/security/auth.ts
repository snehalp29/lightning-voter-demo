let lazySharedInstance: AuthService | undefined;
export class AuthService {
  currentUser: null;

  static sharedInstance() {
    if (!lazySharedInstance) {
      lazySharedInstance = new AuthService();
    }
    return lazySharedInstance;
  }

  baseUrl = '/api/login';
  constructor() {}

  login(credentials): Promise<Response> {
    return fetch(`${this.baseUrl}`, { method: 'POST', body: credentials });
  }

  waitForAuth() {}
  requireLogin() {}
  requireAdmin() {}
}
