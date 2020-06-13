import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../session';

@Component({
  selector: 'app-session-detail-with-votes',
  templateUrl: './session-detail-with-votes.component.html',
  styleUrls: ['./session-detail-with-votes.component.css'],
})
export class SessionDetailWithVotesComponent implements OnInit {
  @Input() initialCollapsed: boolean = false;
  @Input() session: Session = new Session();
  constructor() {}

  ngOnInit(): void {}
}
