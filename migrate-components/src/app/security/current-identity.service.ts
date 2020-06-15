import { Injectable } from '@angular/core';
import { User } from '../admin/name-parser.service';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrentIdentityService {
  currentUser: User = new User();

  constructor(private http: HttpClient) {}

  setUser(user: User) {
    this.currentUser = user;
  }

  clearUser() {
    this.currentUser = new User();
  }

  authenticated() {
    return !!this.currentUser;
  }

  updateUser(newUserObj: User) {
    let newUser = { ...this.currentUser, ...newUserObj };
    this.http
      .put('/api/users/' + this.currentUser.id, newUser)
      .pipe(tap((u) => (this.currentUser = newUser)))
      .subscribe();
  }
}
