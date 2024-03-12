const mongoose = require("mongoose");
const { CustomError } = require("../errors/customError");

const mongooseConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("db connected")
    } catch (error) {
        console.log("db not connected")
        throw new CustomError("db connection is failed")
    }
};

module.exports={mongooseConnection}