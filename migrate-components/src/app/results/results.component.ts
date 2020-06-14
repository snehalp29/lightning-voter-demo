import { Component, OnInit, Input } from '@angular/core';
import { Session } from './session';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  _sessionsByVoteDesc: Session[] = [];

  public get sessionsByVoteDesc(): Session[] {
    return this._sessionsByVoteDesc;
  }

  @Input()
  public set sessionsByVoteDesc(v: Session[]) {
    this._sessionsByVoteDesc = v;
    this._sessionsByVoteDesc.sort(
      (session1: Session, session2: Session) =>
        session2.voteCount - session1.voteCount
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
