import Person from './Person';

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(v: string) {
    if (v.length < 16) throw new Error('Enrollment must have at least 16 characters');

    this._enrollment = v;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(v: number[]) {
    if (v.length > 4) throw new Error('Student must have a maximum of 4 grades');
    this._examsGrades = v;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(v: number[]) {
    if (v.length > 2) throw new Error('Student must have a maximum of 2 grades');
    this._worksGrades = v;
  }
}
