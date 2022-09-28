import { IUser } from "../users/user";


class Chat implements IUser {
    //field 
    name: string;
    username: string; 
    pfp: any;
    messages: string;
    replies: string;

    //constructor 
    constructor (name: string, username: string, pfp: any, messages: string, replies: string) {
        this.name = name;
        this.username = username;
        this.pfp = pfp;
        this.messages = messages;
        this.replies = replies; 
    }

    //function 
    display() : void {
        console.log(this.pfp)
        console.log(this.name + ":" + this.messages)
        console.log(this.replies)
    }
}

// not sure how to show a different user from the class 
// let chat: Chat = new Chat()