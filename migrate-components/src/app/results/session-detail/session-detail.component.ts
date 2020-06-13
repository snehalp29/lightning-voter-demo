import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css'],
})
export class SessionDetailComponent implements OnInit {
  @Input() initialCollapsed: boolean = false;

  @Input() session: Session = new Session();
  constructor() {}

  ngOnInit(): void {}
}
