import { IUser } from "../users/user";



// user's post 
interface IPost extends IUser {
    content: string;
    dateCreated: Date;

}

export class post {
    //field
    post: any;
    comment: string | null; //comment from another user 
    reply: string | null; //reply to the comment from the orginal poster
    likes: IUser[];
    content: string;
    dateCreated: Date;

    constructor(post: any, comment: any, reply: any) {
        this.post = post
        this.comment = comment
        this.reply = reply
    }

    display() {
        console.log(this.post);
        console.log("Comment: " + this.comment);
        console.log("Reply: " + this.reply)
    }
}
