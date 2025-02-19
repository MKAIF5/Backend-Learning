import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({} , {timestamps: true});

export const Hosptal = mongoose.model("Hosptal" , hospitalSchema);