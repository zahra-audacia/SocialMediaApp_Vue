import * as fs from 'fs';
import { UserStorage } from './user-storage';

let data = fs.readFileSync('./users-storage.json')
let fileData = data.toString("utf8")
let userData: UserStorage = JSON.parse(fileData)
//updates a user 
console.log(userData)

userData.users[0].age = 22;
console.log(userData.users)

fs.writeFileSync('./users-storage.json', JSON.stringify(userData)); 