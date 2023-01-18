const Car = require("../models/carModel");
const price = require("../utils/priceGenerator");

exports.registerCar = async (req, res) => {
  try {
    // console.log("Here", req.body);
    driverName: req.body.driverName;
    numberPlate: req.body.numberPlate;
    model: req.body.model;
    phoneNumber: req.body.phoneNumber;

    const newCar = await Car.create(req.body);
    console.log(newCar.arrivalTime)
    res.status(201).json({
      status: "success",
      message: "Created successfully",
      data: newCar,
    });
  } catch (err) {
    console.log("AN ERROR OCCURED", err);
  }
};

exports.generateReceipt = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);

    console.log(car);

    const priceToPay = price.calculateTime(car.model, '13:31');
    console.log(priceToPay)
    res.status(200).json({
      status: "success",
      data: car,
    });
  } catch (err) {
    console.log("AN ERROR OCCURED", err);
  }
};
