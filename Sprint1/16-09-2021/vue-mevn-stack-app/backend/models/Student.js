const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let studentSchema = new Schema(
 {
 nombre: {
 type: String,
 },
 email: {
 type: String,
 },
 telefono: {
 type: Number,
 },
 },
 {
 collection: "Calcular Huella de carbono",
 }
);
module.exports = mongoose.model("Student", studentSchema);