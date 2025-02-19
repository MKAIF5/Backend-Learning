import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["MALE", "FEMALE", "OTHERS"]
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);