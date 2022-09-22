import Enrollable from './interfaces/Enrollable';
import Person from './Person';

export default class Employee extends Person implements Enrollable {
  private _admissionDate: Date = new Date();
  private _enrollment: string;

  constructor(name: string, birthDate: Date, private _salary: number) {
    super(name, birthDate);

    this._enrollment = this.generateEnrollment();
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `EMP${randomStr}`;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(v: Date) {
    if (v.getTime() > new Date().getTime())
      throw new Error("Admission date can't be future date");
    this._admissionDate = v;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(v: string) {
    if (v.length < 16) throw new Error('Enrollment must have at least 16 characters');
    this._enrollment = v;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(v: number) {
    if (v < 0) throw new Error("Salary can't be a negative value");
    this._salary = v;
  }
}
