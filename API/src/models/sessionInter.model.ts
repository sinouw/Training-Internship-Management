
import * as mongoose from 'mongoose';

export interface SessionInter extends mongoose.Document {
    readonly _id: string;
    readonly title: string;
    readonly pu_ht: string;
    readonly location: string;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly centersList: Array<string>;
    readonly participants: Array<string>;
    readonly status: boolean;
}

export const SessionInterSchema = new mongoose.Schema({
    title: { type: String, default: "" },
    pu_ht: { type: String, default: "" },
    location: { type: String, default: "" },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
    centersList: { type: Array, default: [] },
    participants: { type: Array, default: [] },
}, { timestamps: true });