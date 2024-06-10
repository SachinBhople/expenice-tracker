const mongoose = require("mongoose")

const accountSchma = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true, enum: ["credit", "debit"] },
})

module.exports = mongoose.model("account", accountSchma)