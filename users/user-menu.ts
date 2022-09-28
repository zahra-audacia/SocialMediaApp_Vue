import { question, questionNewPassword } from "readline-sync";
import { User } from '../Social-media-app-vue/models/user'
import * as fs from 'fs';
import { Config } from "../config/config";
import { UserStorage } from "./user-storage";

let userData = fs.readFileSync('C:/Git/TypeScript-Training/social media app/users-storage.json')
// let fileData = data.toString("utf8")
// console.log(fileData)
let data = fs.readFileSync('./appsettings.json')
let fileData = data.toString("utf8")
let config: Config = JSON.parse(fileData) 

// Menu
function generateUserMenu(): void {
    console.log(config.questions.UserMenu)
    let whatWouldYouLikeToDo = +question("Which option?")

    switch (whatWouldYouLikeToDo) {
        case 1:
            createUserInformation()
            break;

        case 2:
            updateUserInformation()
            break;

        case 3:
            deleteUserInfromation()
            break;

        default:
            break;
    }
}


// // User creation form 
function createUserInformation(): User {
    var answerName = question("What is your first name:");

    var answerUsername = question("Please create a username: ");

    var answerAge = question("How old are you?: ");

    var answerEmail = question("What is your email address: ")

    var answerPhone = question("What is your phone number: ")

    var answerPassword = question("Please set a password: ")

    var answerpfp = question("Would you like to set a profile picture?")

    var answerbgpic = question("Would you like to set a background picture?")

    let userData = new User(answerName, answerUsername, +answerAge, answerEmail, answerPhone, answerPassword, answerpfp, answerbgpic);
    
    let Data = fs.appendFileSync('users-storage.json', JSON.stringify(userData)) 
    return userData
   
}

var newUser = createUserInformation()

newUser.display()
var confirm = question("Is all the information correct? Y/N");
if (confirm === 'N') {
    newUser = createUserInformation()
} else {
    console.log("Thank you")
}


// function to Update user information 

function updateUserInformation(
): void {
    let userData: UserStorage = JSON.parse(fileData)
    console.log(userData)
    let selectUser = question("What is the name of the user would you like to update?")
    // let indexUser = indexOf(+(userData.users.name)) // index of the user they said by name 
    // select a user ?

    console.log("What would you like to update?")
    console.log("1. Name")
    console.log("2. Username")
    console.log("3.Age")  
    console.log("4.Email")
    console.log("5.Phone number")
    console.log("6. Password")
    console.log("7.Profile picture")
    console.log("8. Background picture")
    let whatWouldYouLikeToUpdate = +question("Select a numbered option")

    switch (whatWouldYouLikeToUpdate) {
        case 1: //index is for first user, what if we wanted to change a specific user ?
            userData.users[0].name = question("What would you like to change your name to?: ")
            break;

        case 2:
            userData.users[0].username= question("What would you like to change your username to?: ")
            break;

        case 3:
            userData.users[0].age = +question("What would you like to change your age to?: ")
            break;

        case 4:
            userData.users[0].email = question("What would you like change your email to?: ")
            break;

        case 5:
            userData.users[0].phone = question("What would you like to change your phone number to?: ")
            break;

        case 6:
            userData.users[0].password = question("What would you like to change your password to?: ")
            break;

        case 7:
            userData.users[0].pfp= question("What would you like to change your Profile Picture to?: ")
            break;

        case 8:
            userData.users[0].bgpic = question("What would you like to change your Background Picture to?: ")
            break;

        default:
            break;
    }
    fs.writeFileSync('./users-storage.json', JSON.stringify(userData))
}

// function to delete user information 

function deleteUserInfromation(
): User {
    console.log("What user would you like to delete: ")
    return newUser // returns undefined

}
console.log(generateUserMenu())


