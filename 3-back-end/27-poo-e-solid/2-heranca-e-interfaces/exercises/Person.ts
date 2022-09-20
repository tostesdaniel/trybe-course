export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    (this.name = _name), (this.birthDate = _birthDate);
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this.validateName(v);
    this._name = v;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(v: Date) {
    this.validateBirthDate(v);
    this._birthDate = v;
  }

  private validateName(v: string): void {
    if (v.length < 3) throw new Error('Name must have at least 3 characters');
  }

  private validateBirthDate(v: Date): void {
    if (v.getTime() > new Date().getTime())
      throw new Error("Birth date can't be a future date");
    if (Person.getAge(v) > 120) throw new Error('Person can have maximum 120 years old');
  }

  static getAge(v: Date): number {
    var timeDiff = Math.abs(Date.now() - new Date(v.getTime()).getTime());

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
