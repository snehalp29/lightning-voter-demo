import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentIdentityService } from './current-identity.service';
import { throwError, of } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { User } from '../admin/name-parser.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private currentIdentity: CurrentIdentityService
  ) {}

  login(credentials: any) {
    return this.http.post('/api/login', credentials).pipe(
      map((user: any) => {
        this.currentIdentity.setUser(user);
        return this.currentIdentity;
      }),
      catchError((error: any) => {
        return throwError('Invalid Credentials');
      })
    );
  }

  logout() {
    this.http
      .post('/api/logout', {})
      .pipe(catchError(() => throwError('Error Logging Out')))
      .subscribe((response: any) => {
        this.currentIdentity.clearUser();
      });
  }

  waitForAuth() {
    return this.http.get('/api/currentIdentity').pipe(
      map((response: any) => {
        if (!!response.text()) {
          this.currentIdentity.setUser(response);
        }
        return this.currentIdentity;
      })
    );
  }

  requireLogin() {
    return this.waitForAuth().pipe(
      flatMap((a: any) => {
        if (this.currentIdentity.authenticated()) {
          return of(true);
        } else {
          return throwError('AUTH_REQUIRED');
        }
      })
    );
  }

  requireAdmin() {
    return this.waitForAuth().pipe(
      flatMap(() => {
        if (
          this.currentIdentity.authenticated() &&
          this.currentIdentity.currentUser.isAdmin
        ) {
          return of(true);
        } else {
          return throwError('AUTH_REQUIRED');
        }
      })
    );
  }
}
