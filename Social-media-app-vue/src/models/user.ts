// Create a user

// import type { StringifyOptions } from "querystring";

// Update users' details

// Remove a user

export interface IUser {
  firstName: string;
  username: string;
  pfp: any;
}

export class User implements IUser {
  // stringify(arg0: string, stringify: any) {
  //   throw new Error("Method not implemented.");
  // }
  // //field

  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  dateOfBirth!: Date;
  address1!: string;
  address2!: string;
  city!: string;
  county!: string;
  postcode!: string;
  phone!: string;
  password!: string;
  pfp!: any;
  bgpic!: any;
}

//   //function
//   update(
//     firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   dateOfBirth: Date;
//   address1: string;
//   address2: string;
//   city: string;
//   county: string;
//   postcode: string;
//   phone: string;
//   password: string;
//   pfp: any;
//   bgpic: any;
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.username = username;
//     this.email = email;
//     this.dateOfBirth = dateOfBirth;
//     this.address1 = address1;
//     this.address2 = address2;
//     this.city = city;
//     this.county = county;
//     this.postcode = postcode;
//     this.phone = phone;
//     this.password = password;
//     this.pfp = pfp;
//     this.bgpic = bgpic;
//   }

//   display(): void {
//     console.log("Name: " + this.name);
//     console.log("Username " + this.username);
//     console.log("Age: " + this.age);
//     console.log("Email: " + this.email);
//     console.log("Phone number: " + this.phone);
//     console.log("Password " + this.password);
//     console.log(this.pfp);
//     console.log(this.bgpic);
//   }
// }
// 07530343
// let me = new User('Zahra','zazzyk', 21, 'cool@gmail.com', "07530343548",'secret123', 'cool pic of my cat', 'cool pic of the sky')

// console.log(me)

// export class SuperAdminUser extends User {
//     specialField: number;

//     constructor(name: string, username:string, age:number, email:string, phone:string, password:string, pfp: any, bgpic:any) {
//         super(name, username, age, email, phone, password, pfp, bgpic);
//         this.specialField = 0;
//     }
// }
