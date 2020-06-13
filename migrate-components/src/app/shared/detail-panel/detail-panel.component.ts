import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.css'],
})
export class DetailPanelComponent implements OnInit {
  @Input() collapsed: boolean = false;
  @Input() title: string = '';
  @Input() voteCount: number = 0;
  @Input() length: number = 0;
  @Input() abstract: string = '';

  constructor() {}

  ngOnInit(): void {}

  collapse() {
    this.collapsed = !this.collapsed;
  }
}
