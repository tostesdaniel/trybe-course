import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const me = new Person('Daniel', new Date('1999/09/17'));
// const definitelyNotMe = new Person('Daniel', new Date('2999/09/17'));
// const notMeEither = new Person('Da', new Date('1500/01/12'));

console.log('me', me);
// console.log('definitelyNotMe', definitelyNotMe);
// console.log('notMeEither', notMeEither);

/* Student ------------------------------------------------------------------ */
const daniel = new Student('Daniel', new Date('1999/09/17'));

console.log('daniel', daniel);

/* Subject ------------------------------------------------------------------ */
const english = new Subject('English');
const math = new Subject('Math');
const chemistry = new Subject('Chemistry');

console.log('english', english);
console.log('math', math);
console.log('chemistry', chemistry);

/* Teacher ------------------------------------------------------------------ */
const mariana = new Teacher('Mariana', new Date('1990/02/10'), 3000, chemistry);
const trope = new Teacher('Trope', new Date('1980/04/26'), 3000, math);
const francidea = new Teacher('Francidéa', new Date('1980/06/15'), 3000, english);

console.log('mariana', mariana);
console.log('trope', trope);
console.log('francidea', francidea);

/* Invalid salary ----------------------------------------------------------- */
// const invalidSalary = new Teacher('Mariana', new Date('1990/02/10'), -3000, chemistry);
