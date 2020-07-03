import * as mongoose from 'mongoose';

export interface SessionEmp extends mongoose.Document {
    readonly _id: string;
    readonly employeeId: string;
    readonly sessionId: string;
}

export const SessionEmpSchema = new mongoose.Schema({
    employeeId: mongoose.Types.ObjectId,
    sessionId: mongoose.Types.ObjectId,
}, { timestamps: true });