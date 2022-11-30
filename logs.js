const mongoose = require("mongoose");




/*  ===========================================================================
//  SCHEMA
//  =======================================================================  */
const Schema    = mongoose.Schema;
const logSchema = new Schema(
    {
        title: { type: String, required: true },
        entry: { type: String, required: true },
        shipIsBroken: { type: Boolean, default: true }
    },
    {
        timestamps: true
    }
);




/*  ===========================================================================
//  MODEL
//  =======================================================================  */
const model = mongoose.model;
const Log   = model("Log", logSchema);

module.exports = Log;