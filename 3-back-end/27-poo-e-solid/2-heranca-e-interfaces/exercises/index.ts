import Person from './Person';
import Student from './Student';
import Subject from './Subject';

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
