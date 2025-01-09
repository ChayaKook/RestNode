import { Response, Request } from "express";
import * as businessService from "../services/business.service";
import { Business } from "../models/business.model";
import { controllerLog, errorLog } from "../../config/log-config";

export const createBusiness = async (req: Request, res: Response) => {
    controllerLog.info("tring")
    let business: Business | null = null;
    if (req.body) {
        const data = req.body;
        const newBusinees:Business = 
        {name: data.name, address: data.address, domain:data.domain, admin: data.admin, businessData: data.businessData } as Business
        business = await businessService.createBusiness(newBusinees);
        controllerLog.info(
            `Received request for createBusiness with body:  ${JSON.stringify(
                req.body
            )}`
        );
    } else {
        return res.status(400).send("bad params")
    }
    if (business) {
        res.status(201).json(business);
    } else {
        errorLog.error(`Error in create Business`);
        res.status(500).send({ message: "The business create failed!" });
    }
};

export const updateBusiness = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for updateBusiness with body: ${JSON.stringify(req.body)}`);
    const business = await businessService.updateBusiness(req.body);
    if (business) {
        res.status(201).json(business);
    } else {
        errorLog.error(`Error in updateBusiness`);
        res.status(400).send({ message: "The business update failed!" });
    }
};

export const getBusiness = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for getBusiness with body: ${(req.params.id)}`);
    const business = await businessService.getBusiness(req.params.id);
    if (business) {
        res.status(200).json(business);
    } else {
        errorLog.error(`Error in getBusiness`);
        res.status(500).send({ message: "The get Business failed!" });
    }
};

export const getAllBusinesses = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for getAllBusinesses with body: non`);
    const businesses = await businessService.getAllBusinesses();
    if (businesses) {
        res.status(200).json(businesses);
    } else {
        errorLog.error(`Error in getAllBusinesses`);
        res.status(500).send({ message: "The getAllBusinesses failed!" });
    }
};

export const deleteBusiness = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for deleteBusiness with body: ${(req.params.id)}`);
    const business = await businessService.deleteBusiness(req.params.id);
    if (business) {
        res.status(201).json(business);
    } else {
        errorLog.error(`Error in deleteBusiness`);
        res.status(500).send({ message: "The deleteBusiness failed!" });
    }
};
