import * as mongoose from 'mongoose';

export interface University extends mongoose.Document {
    readonly _id: string;
    readonly title: string;
    readonly location: string;
    readonly activity: string;
    readonly status: boolean;
}

export const UnivercitySchema = new mongoose.Schema({
    title: { type: String, default: "" },
    location: { type: String, default: "" },
    activity: { type: String, default: "" },
    status: { type: Boolean, default: true },
}, { timestamps: true });

export interface Level extends mongoose.Document {
    readonly _id: string;
    readonly title: string;
    readonly status: boolean;
}

export const LevelSchema = new mongoose.Schema({
    title: { type: String, default: "" },
    status: { type: Boolean, default: true },
}, { timestamps: true });


export interface Internship extends mongoose.Document {
    readonly _id: string;
    readonly title: string;
    readonly status: boolean;
}

export const InternshipSchema = new mongoose.Schema({
    title: { type: String, default: "" },
    status: { type: Boolean, default: true },
}, { timestamps: true });

