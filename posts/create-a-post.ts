//create a new post 
import { post } from './post'
import { question, questionNewPassword } from "readline-sync";

function createNewPost (
): void {
    var createPost = question("Create Post? Y/N")
    if (createPost === 'Y') {
        let newPost = new post('pic of me', null, null)
    }
    // return to what if they say No? = return to user menu
}

