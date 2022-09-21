import Person from './Person';
import Student from './Student';

const me = new Person('Daniel', new Date('1999/09/17'));
// const definitelyNotMe = new Person('Daniel', new Date('2999/09/17'));
// const notMeEither = new Person('Da', new Date('1500/01/12'));

console.log('me', me);
// console.log('definitelyNotMe', definitelyNotMe);
// console.log('notMeEither', notMeEither);

/* Student ------------------------------------------------------------------ */
const daniel = new Student('Daniel', new Date('1999/09/17'));

console.log('daniel', daniel);
