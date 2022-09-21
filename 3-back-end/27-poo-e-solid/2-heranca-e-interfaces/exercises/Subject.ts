export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this.validateName(v);
    this._name = v;
  }

  validateName(v: string): void {
    if (v.length < 3) throw new Error('Name must have a least 3 characters');
  }
}
