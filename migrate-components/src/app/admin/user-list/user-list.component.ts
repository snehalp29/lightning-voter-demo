import { Component, OnInit, Input } from '@angular/core';
import { User } from '../name-parser.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  _allUsers: User[] = [];

  public get allUsers(): User[] {
    return this._allUsers;
  }

  @Input()
  public set allUsers(v: User[]) {
    this._allUsers = v;
  }

  constructor() {}

  ngOnInit(): void {
    this.allUsers.sort(this.userSort);
  }

  userSort(user1: User, user2: User): number {
    if (user1.firstName < user2.firstName) return -1;
    if (user1.firstName === user2.firstName) return 0;
    if (user1.firstName > user2.firstName) return 1;
    return 0;
  }
}
