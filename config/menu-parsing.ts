import * as fs from 'fs';
import { Config } from './config';


let data = fs.readFileSync('./appsettings.json')
let fileData = data.toString("utf8")
let config: Config = JSON.parse(fileData) 

// console.log(config)
// console.log(fileData)
// console.log(config.questions.PostsMenu)


// let userData = fs.readFileSync('C:/Git/TypeScript-Training/social media app/users-storage.json')
// stringify - data to json strings
// parse - takes json strings to make it an object