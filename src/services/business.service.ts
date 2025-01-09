import { errorLog, serviceLog } from "../../config/log-config";
import {BusinessModel, Business} from "../models/business.model";
import {User, UserModel} from "../models/user.model";
import {getUser} from "./users.service"

export const createBusiness = async (
    business: Business,
): Promise<Business | null> => {
    try {
        serviceLog.info("business in the service: "+JSON.stringify(business))
        const findUser:User|null = await getUser(business.admin);
        if (findUser) {
            // const newBusinessData = businessData ? {userId, businessData} : {userId};
            const newBusiness = await new BusinessModel(business);
            await newBusiness.save();
            return newBusiness;
        } else {
            errorLog.error("in create bussiness: user dont found")
            throw new Error("User dont found");}
        
    } catch (error) {
        serviceLog.error("faild in create new bussiness - user not found",error);
        return null;

    }
};

export const getBusiness = async (id: string): Promise<Business | null> => {
    try {
        return await BusinessModel.findById(id);
    } catch (error) {
        errorLog.error("Error get business: " + error);
        return null;
    }
};

export const getAllBusinesses = async (): Promise<Business[] | null> => {
    try {
        const res = await BusinessModel.find();
        serviceLog.info("getAllBusinesses", res);
        return res;
    } catch (error) {
        errorLog.error("Error get all businesses: " + error);
        return null;
    }
};

export const updateBusiness = async (business: Business): Promise<Business | null> => {
    try {
        return await BusinessModel.findByIdAndUpdate(business._id, {business}, {new: true});
    } catch (error) {
        errorLog.error("Error update business: " + error);
        return null;
    }
};

export const deleteBusiness = async (id: string): Promise<Business | null> => {
    try {
        return await BusinessModel.findByIdAndDelete(id);
    } catch (error) {
        errorLog.error("Error update business: " + error);
        return null;
    }
};

// export const deleteAllBusinesses = async (business: Business): Promise<Business | null> => {
//     try {
//         return await BusinessModel.deleteMany(business._id, {business}, {new: true});
//     } catch (error) {
//         console.error("Error update business: " + error);
//         return null;
//     }
// };
