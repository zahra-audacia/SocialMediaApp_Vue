import { question } from "readline-sync";
import { User } from '../users/user'
import * as fs from 'fs';
import { Config } from "../config/config";
import { Questions } from "../config/questions";


let data = fs.readFileSync('../config/appsettings.json')
let fileData = data.toString("utf8")
let config: Config = JSON.parse(fileData) 

// Menu
//select to go to usermenu or posts menu or chat menu 

//  var keys = Object.keys(Config) 
// console.log(keys)
// returns []
console.log("Select a Menu type: [User, Posts, Chats]")
console.log(config.questions) //if i wanted to return JUST the keys, how could i do that ?? or would i need to create a new class ??




 
