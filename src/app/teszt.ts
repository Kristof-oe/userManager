import { User } from './model/user';

const user = new User({firstName: 'John', lastName: 'Doe' });
console.log(user.toString());