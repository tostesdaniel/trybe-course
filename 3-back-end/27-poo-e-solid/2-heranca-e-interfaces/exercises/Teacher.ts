import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _admissionDate: Date;
  private _registration = String();

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    private _subject: Subject
  ) {
    super(name, birthDate);

    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
    this.salary = _salary;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(v: Date) {
    if (v.getTime() > new Date().getTime())
      throw new Error("Admission date can't be future date");
    this._admissionDate = v;
  }

  public get registration(): string {
    return this._registration;
  }

  public set registration(v: string) {
    if (v.length < 16) throw new Error('Registration must have at least 16 characters');
    this._registration = v;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(v: number) {
    if (v < 0) throw new Error("Salary can't be negative");
    this._salary = v;
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(v: Subject) {
    this._subject = v;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}
