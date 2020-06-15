import { Component, OnInit, Input } from '@angular/core';
import { CurrentIdentityService } from '../security/current-identity.service';
import { ActivatedRoute } from '@angular/router';
import { SessionsService, UnreviewedSessionCountService } from '../sessions';
import { User } from '../admin/name-parser.service';
import { Session } from '../sessions/session.model';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  _userSessions: Session[] = [];

  public get userSessions(): Session[] {
    return this._userSessions;
  }
  @Input()
  public set userSessions(v: Session[]) {
    this._userSessions = v;
  }

  @Input() b: number = 0;
  currentUser: User;
  currentSessionToReview: Session = new Session();

  constructor(
    private currentIdentity: CurrentIdentityService,
    private sessions: SessionsService,
    // @Inject('toastr') private toastr,
    private route: ActivatedRoute,
    private unreviewedSessionCount: UnreviewedSessionCountService
  ) {
    console.log('home');
    this.currentUser = currentIdentity.currentUser;
    this.setNextSessionToReview();

    this.route.data.subscribe((val) => console.log('subscribe', val));
  }

  ngOnInit() {
    // console.log(this.route.snapshot.data['userSessions'].length);
    // this.userSessions = this.route.snapshot.data['userSessions'];
  }

  ngOnChanges() {
    console.log('changes', this.b, this.userSessions);
  }

  setNextSessionToReview() {
    this.sessions
      .getNextUnreviewedSession(this.currentIdentity.currentUser.id)
      .subscribe((session: Session) => {
        this.currentSessionToReview = session;
      });
  }

  voteYes() {
    this.sessions
      .incrementVote(this.currentSessionToReview.id)
      .pipe(
        flatMap(() =>
          this.sessions.addReviewedSession(
            this.currentUser.id,
            this.currentSessionToReview.id
          )
        )
      )
      .subscribe(() => {
        this.setNextSessionToReview();

        // pull updated value
        this.unreviewedSessionCount.updateUnreviewedSessionCount();
      });
  }

  voteNo() {
    this.sessions
      .addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
      .subscribe(() => {
        this.setNextSessionToReview();

        // pull updated value
        this.unreviewedSessionCount.updateUnreviewedSessionCount();
      });
  }
}
