import { Injectable } from '@angular/core';
import { AuthService } from './auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NgAuthService {
  readonly authService: AuthService;
  headers = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) {
    this.authService = AuthService.sharedInstance();
  }

  login(user: any) {
    return this.http.post('/api/login', user, { headers: this.headers });
  }
}
