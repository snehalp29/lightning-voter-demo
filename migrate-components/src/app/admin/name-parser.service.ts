import { Injectable } from '@angular/core';

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class User implements IUser {
  constructor(
    public id: number = 0,
    public email: string = '',
    public firstName: string = '',
    public lastName: string = '',
    public password: string = '',
    public isAdmin: boolean = false
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class NameParserService {
  parse(blobInput: string): IUser[] {
    var lines = blobInput.split(/\r?\n/);
    let Users: IUser[] = [];
    lines.forEach(function (line, idx) {
      var pieces = line.split('|');
      Users.push(new User(0, pieces[0], pieces[1], pieces[2]));
      // lines[idx] = {
      //   email: pieces[0],
      //   firstName: pieces[1],
      //   lastName: pieces[2],
      // };
    });
    return Users;
  }
}
