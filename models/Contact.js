import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name."],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    message: {
      type: String,
      required: [true, "Please provide a message."],
    },
    site: {
      type: String,
      default: "rironib.vercel.app",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
