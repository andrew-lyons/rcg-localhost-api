const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    assignedUser:       { type: String },
    assignedStation:    { type: String },
    customerName:       { type: String, required: true },
    callbackNumber:     { type: String, required: true },
    device:             { type: String, required: true },
    jobType:            { type: String, required: true },
    completionTime:     { type: Number }
},
{
    timestamps: true
});

module.exports = ticketSchema