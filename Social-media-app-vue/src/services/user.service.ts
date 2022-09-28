import { Service } from "./base.service";
import type { User } from "@/models/user";

export class UserService extends Service {
  all(): Promise<User[]> {
    return this.get("api/users");
  }
}
