import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: [255, "Name too long (255char)."],
    trim: true,
  },
  exhale: {
    type: Number,
    require: true,
    min: 0.25,
    max: 2,
  },
  inspiratoryApnea: {
    type: Number,
    require: true,
    min: 0,
    max: 2,
  },
  expiratoryApnea: {
    type: Number,
    require: true,
    min: 0,
    max: 2,
  },
  tags: {
    type: Array<String>,
    require: true,
  },
});

export default mongoose.models.Exercise ||
  mongoose.model("Exercise", exerciseSchema);
