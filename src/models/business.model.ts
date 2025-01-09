import {Mongoose, Schema, model, Document} from "mongoose";

export interface Business extends Document{
    _id?: string;
    name: string;
    address: string;
    domain: string;
    // admin: Schema.Types.ObjectId;
    admin: string,
    businessData?: any;
}

const businessSchema = new Schema<Business>({
    // _id: {type:Schema.Types.String, required:false},
    name: {type: Schema.Types.String,},
    address: {type: Schema.Types.String,},
    domain: {type: Schema.Types.String,},
    // admin: { type: Schema.Types.ObjectId, ref: 'User' },
    admin: {type: Schema.Types.String,},
    businessData: {type: Schema.Types.Mixed, required: false},
});

export const BusinessModel = model<Business>("Business", businessSchema);
