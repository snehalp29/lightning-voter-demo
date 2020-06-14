import { Component, OnInit, Input } from '@angular/core';
import { User } from '../name-parser.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  _allUsers: User[] = [];

  public get allUsers(): User[] {
    return this._allUsers;
  }

  @Input()
  public set allUsers(v: User[]) {
    this._allUsers = v;
    this.findCurrentUser();
  }

  user: User | undefined = new User();

  constructor() {}

  ngOnInit(): void {}

  findCurrentUser() {
    let urlparts = window.location.href.split('/');
    let userId = urlparts[urlparts.length - 1];
    this.user = this.allUsers.find((useri) => {
      return useri.id === parseInt(userId);
    });
  }

  getParameterByName(name: string, url: string): string {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results || !results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
