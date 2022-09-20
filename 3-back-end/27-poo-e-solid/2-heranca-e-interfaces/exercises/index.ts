import Person from './Person';

const me = new Person('Daniel', new Date('1999/09/17'));
const definitelyNotMe = new Person('Daniel', new Date('2999/09/17'));
const notMeEither = new Person('Da', new Date('1500/01/12'));

console.log('me', me);
console.log('definitelyNotMe', definitelyNotMe);
console.log('notMeEither', notMeEither);
