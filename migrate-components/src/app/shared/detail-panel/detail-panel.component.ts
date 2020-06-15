import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.css'],
})
export class DetailPanelComponent implements OnInit {
  _collapsed: boolean = false;

  public get collapsed(): boolean {
    return this._collapsed;
  }

  @Input()
  public set collapsed(v: boolean) {
    this._collapsed = v;
  }

  @Input() title: string = '';
  @Input() voteCount: number = 0;
  @Input() length: number = 0;
  @Input() abstract: string = '';

  constructor() {}

  ngOnInit(): void {}

  collapse() {
    this.collapsed = !this.collapsed;
    // console.log('collapse', this.collapsed);
  }
}
