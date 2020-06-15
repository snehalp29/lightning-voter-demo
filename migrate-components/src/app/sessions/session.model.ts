export class Session implements ISession {
  constructor(
    public id: number = 0,
    public title: string = '',
    public abstract: string = '',
    public userId: number = 0,
    public voteCount: number = 0,
    public length: number = 0,
    public userFirstName: string = '',
    public userLastName: string = ''
  ) {}
}

export interface ISession {
  id: number;
  title: string;
  abstract: string;
  userId: number;
  length: number;
  voteCount: number;
  userFirstName: string;
  userLastName: string;
}
