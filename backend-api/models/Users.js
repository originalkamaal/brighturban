const { model, Schema } = require('mongoose');

const userModel = new Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usertype: { type: Number, default: 0 },
    emailverified: { type: Boolean, default: false },
    mobileverified: { type: Boolean, default: false },
    token: { type: String },
    email_verification: { type: String },
    mobile_verification: { type: Number }
})

module.exports = model("Users", userModel)