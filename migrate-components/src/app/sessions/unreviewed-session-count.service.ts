import { Injectable } from '@angular/core';
import { SessionsService } from './sessions.service';
import { CurrentIdentityService } from '../security/current-identity.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UnreviewedSessionCountService {
  value: number;

  constructor(
    private sessions: SessionsService,
    private currentIdentity: CurrentIdentityService
  ) {
    this.value = 0;
  }

  updateUnreviewedSessionCount(cb?: any) {
    this.sessions
      .getUnreviewedCount(this.currentIdentity.currentUser.id)
      .pipe(
        tap((count) => {
          this.value = count;
          if (cb) {
            cb();
          }
        })
      )
      .subscribe();
  }
}
