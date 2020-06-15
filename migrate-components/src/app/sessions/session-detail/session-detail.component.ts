import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css'],
})
export class SessionDetailComponent implements OnInit {
  @Input() session: any;
  @Input() initialCollapsed: any;

  constructor() {}

  ngOnInit(): void {}
}
