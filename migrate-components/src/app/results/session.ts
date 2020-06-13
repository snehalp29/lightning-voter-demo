export class Session {
  constructor(
    public title: string = '',
    public length: number = 1,
    public voteCount: number = 0,
    public abstract: string = ''
  ) {}
}
