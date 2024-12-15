// import { Model, Schema, model } from "mongoose";
//   // import { TUser, UserModel } from "./user.interface";
// //   import config from "../../config";

import config from "@/config";
import bcrypt from "bcrypt";
import mongoose, { model, Model, Schema } from "mongoose";

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         // required: [true, "Please provide a username"],
//         // unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide a email"],
//         // unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide a password"],
//     },
//     image: {
//         type: String,
//         // required: [true, "Please provide a image"],
//     },
   
 
// })

// export const User = mongoose.models.User || mongoose.model("User", userSchema);


// export default User;

// // export type TUser = {
// //     name : string;
// //     email: string;
// //     role : 'admin',
// //     password : string;
// //     image : string;
// // }

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    passwordChangedAt?: Date;
    image: string;
    role?: 'admin';
    status?: "in-progress" | "blocked";
    isDeleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  
  export interface IUserModel extends Model<IUser> {
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string
    ): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(
      passwordChangedTimestamp: Date,
      jwtIssuedTimestamp: number
    ): boolean;
  }
 
  export const userSchema = new Schema<IUser, IUserModel>(
    // const UserSchema: Schema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      passwordChangedAt: {
        type: Date,
      },
      image: {
        type: String,
      },
      role: {
        type: String,
        default: "admin",
      },
      status: {
        type: String,
        enum: ["in-progress", "blocked"],
        default: "in-progress",
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );
  
  userSchema.pre("save", async function (next) {
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
      user.password as string,
      Number(config.bcrypt_salt_rounds)
    //   Number("10")
    );
    next();
  });
  
  // set '' after saving password
  userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
  });
  
  
  userSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  };
  
  userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ) {
    const passwordChangedTime =
      new Date(passwordChangedTimestamp).getTime() / 1000;
    return passwordChangedTime > jwtIssuedTimestamp;
  };
  
//   export const User = model<IUser, IUserModel>("User", userSchema);
export const User: IUserModel =
  (mongoose.models.User as unknown as IUserModel) || mongoose.model<IUser, IUserModel>("User", userSchema);
  