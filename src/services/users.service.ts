import {User, UserModel} from "../models/user.model";
import * as bcrypt from "bcrypt";
import { sendEmailByTootit } from "./sendEmailByTootit";
import { errorLog, serviceLog } from "../../config/log-config";
// import { sendEmail, sendEmail2 } from "./sendEmail";

export const createUser = async (name: string, password: string): Promise<User | null> => {
    try {
        const hash = await bcrypt.hash(password, 10);
        password = hash;
        const newUser = await new UserModel({name, password});
        const userSaved= await newUser.save();
        sendEmailByTootit('s0548549680@gmail.com', 'new user', 'New user signUp to your suite: '+name);
        return userSaved;
    } catch (error) {
        console.error("The service created faild: " + error);
        return null;
    }
    //     const email  = 's0548549680@gmail.com';

    //   const subject = 'בקשתך לאיפוס סיסמה';
    //   const body = `
    //     <h1>שלום,</h1>
    //     <p>בקשתך לאיפוס סיסמה התקבלה.</p>
    //     <p>הסיסמה הזמנית שלך היא: </p>
    //     <p>אנא שנה את סיסמתך לאחר הכניסה.</p>
    //   `;

    //   try {
    //     await sendEmail(email, subject, body);
    //     return null;
    //     // res.status(200).send({ message: 'Email sent successfully!' });
    //   } catch (error) {
    //     // res.status(500).send({ message: 'Error sending email', error });
    //     console.log('Error sending email', error);
    //     return null;
    //   }
};

export const deleteUser = async () => {};

export const updateUser = async () => {};

export const getUser = async (id: string): Promise<User | null> => {
    try {
        const user = await UserModel.findById(id);
        serviceLog.info("user found: ", user)
        return user;
        
    } catch (error) {
        errorLog.error("user dont found", id)

        throw error;
    }
};
