"use server";

import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

export const contactAction = async (data) => {
  try {
    await dbConnect();

    if (!data) {
      return { success: false, message: "No data provided" };
    }

    const contact = await Contact.create(data);

    return {
      success: true,
      message: "Submitted successfully.",
      insertedId: contact._id.toString(),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Something went wrong.",
    };
  }
};
