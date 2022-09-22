import Student from './Student';
import Teacher from './Teacher';

const me = new Student('Daniel', new Date('1999/09/17'));
const jonDoe = new Student('Jon Doe', new Date('1987/06/05'));

console.log('me', me);
console.log('jonDoe', jonDoe);

const mariana = new Teacher('Mariana', new Date('1990/02/10'), 3000, 'chemistry');
const trope = new Teacher('Trope', new Date('1980/04/26'), 3000, 'math');

console.log('mariana', mariana);
console.log('trope', trope);
