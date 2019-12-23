import mongoose from "mongoose";
const { Schema } = mongoose;

const resturantsSchema = Schema({
  sunday: {
    start: { type: Number, required: true },
    close: { type: Number, required: true }
  },
  monday: {
    start: { type: Number, required: true },
    close: { type: Number, required: true }
  },
  tuestday: {
    start: { type: Number, required: true },
    close: { type: Number, required: true }
  },
  wednesday: {
    start: { type: Number, required: true },
    close: { type: Number, required: true }
  },
  thursday: {
    start: { type: Number, required: true },
    close: { type: Number, required: true }
  },
  friday: {
    start: { type: Number, required: true },
    close: { type: Number, required: true }
  },
  satursday: {
    start: { type: Number, required: true },
    close: { type: Number, required: true }
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const resturantsModel = mongoose.model("resturants", resturantsSchema);

export default resturantsModel;
