import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Session } from '../sessions/session.model';

@Component({
  selector: 'app-unreviewed-talk',
  templateUrl: './unreviewed-talk.component.html',
  styleUrls: ['./unreviewed-talk.component.css'],
})
export class UnreviewedTalkComponent {
  _session: Session = new Session();

  public get session(): Session {
    return this._session;
  }

  @Input()
  public set session(v: Session) {
    this._session = v;
  }

  @Output() voteYes: EventEmitter<string> = new EventEmitter<string>();
  @Output() voteNo: EventEmitter<string> = new EventEmitter<string>();

  yes() {
    this.voteYes.emit('Yes');
  }

  no() {
    this.voteNo.emit('No');
  }
}
