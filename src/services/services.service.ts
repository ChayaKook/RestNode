import {ObjectId} from "typeorm";
import {ServiceModel, Service} from "../models/service.model";
import mongoose from "mongoose";
import { errorLog, serviceLog } from "../../config/log-config";

export const createService = async (businessId: string, name: string, serviceData?: any): Promise<Service | null> => {
    try {
        const newServiceData = serviceData ? {businessId, name, serviceData} : {businessId, name};
        const newService: Service = new ServiceModel(newServiceData );
        await newService.save();
        return newService;
    } catch (error) {
        errorLog.error("The service created faild: " + error);
        return null;
    }
};

export const updateService = async (id: string, businessId: string, name: string, serviceData?: any) => {
    try {
        const newService = serviceData ? {businessId, name, serviceData} : {businessId, name};
        return await ServiceModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id), newService, {new: true});
    } catch (error) {
        errorLog.error("The service update faild: " + error);
    }
};

export const deleteService = async (id: string) => {
    try {
        return await ServiceModel.findByIdAndDelete(id);
    } catch (error) {
        errorLog.error("The service update faild: " + error);
    }
};
export const getAllServices = async () => {
    try {
        const res =  await ServiceModel.find();
        serviceLog.info("getAllServices", res);
        return res;
    } catch (error) {
        errorLog.error("The get services faild: " + error);
    }
};
