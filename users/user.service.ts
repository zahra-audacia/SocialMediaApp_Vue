import { maxHeaderSize } from "http";
import { Service } from "../base.service-rhysExample"
import { User } from "./user"

export class UsereService extends Service {
    getUser(id: number): Promise<any> {
        return this.get("users/get/" + id);
    }

    getAll(id: number): Promise<any> {
        for (let i = 0; i < id; i++){
            return this.get("users/getAll")
        }
        return this.get("users/getAll")
    }

    add(user: any): Promise<any> {
        return this.post("users/add", user);
    }

    update(user: any): Promise<any> {
        return this.put("users/update", user);
    }

    remove(id: number): Promise<any> {
        return this.delete("users/" + id)
    }
}



