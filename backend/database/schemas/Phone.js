const mongoose = require('mongoose');

const phoneSchema = mongoose.Schema({
    model:              { type: String, required: true },
    screen:             { type: Object },
    parts:              { type: Object }
},
{
    timestamps: true
});

module.exports = phoneSchema