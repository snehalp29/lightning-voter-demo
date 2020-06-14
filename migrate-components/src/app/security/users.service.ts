import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../admin/name-parser.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = '/api/users';
  constructor(private http: HttpClient) {}

  createNewUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, newUser);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
