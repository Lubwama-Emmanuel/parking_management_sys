const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    driverName: {
        type: String
    },
    numberPlate: {
        type: String
    },
    arrivalTime: {
        type: String
    },
    date: {
        type: Date,
        default: function (){
            const date = new Date();
            return date.toDateString()
        }
    },
    model: {
        type: String
    },
    phoneNumber: {
        type: Number
    }
}, {
    timestamps: true
})

carSchema.pre('save', function (next) {
    const getTime = new Date();
    const timeMinutes = ((getTime.getHours() * 60) + getTime.getMinutes())
    this.arrivalTime = timeMinutes;
    next()
})

module.exports = mongoose.model('Car', carSchema)