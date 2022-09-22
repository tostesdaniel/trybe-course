import Employee from './Employee';

export default class Teacher extends Employee {
  constructor(name: string, birthDate: Date, salary: number, private _subject: string) {
    super(name, birthDate, salary);
  }

  public get subject(): string {
    return this._subject;
  }

  public set subject(v: string) {
    this._subject = v;
  }
}
