import * as mongoose from 'mongoose';

export interface TrainingCenter extends mongoose.Document {
    readonly _id: string;
    readonly title: string;
    readonly location: string;
    readonly status: boolean;
}

export const TrainingCenterSchema = new mongoose.Schema({
    title: { type: String, default: "" },
    location: { type: String, default: "" },
    status: { type: Boolean, default: true },
}, { timestamps: true });