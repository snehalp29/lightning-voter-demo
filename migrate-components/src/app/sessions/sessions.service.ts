import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from './session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor(private http: HttpClient) {}

  getSessionsByUser(userId: number): Observable<Session[]> {
    return this.http.get<Session[]>('/api/sessions/user/' + userId);
  }

  createNewSession(newSession: Session): Observable<Session> {
    return this.http.post<Session>('/api/sessions', newSession);
  }

  getNextUnreviewedSession(userId: number): Observable<Session> {
    return this.http.get<Session>(
      `/api/users/${userId}/randomUnreviewedSession`
    );
  }

  addReviewedSession(userId: number, sessionId: number) {
    return this.http.post(
      '/api/users/' + userId + '/reviewSession/' + sessionId,
      null
    );
  }

  getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>('/api/sessions/');
  }

  incrementVote(sessionId: number): Observable<Session> {
    return this.http.put<Session>(
      '/api/sessions/' + sessionId + '/incrementVote/',
      null
    );
  }

  getUnreviewedCount(userId: number): Observable<number> {
    return this.http.get<number>(
      '/api/users/' + userId + '/unreviewedSessionCount'
    );
  }
}
