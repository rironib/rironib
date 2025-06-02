"use client";

import { axiosPublic } from "@/hooks/axiosPublic";
import toast from "react-hot-toast";
import { Button, Input, Textarea } from "@heroui/react";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();
    const message = form.message.value.trim();

    const site = "rironib.vercel.app";

    const data = { firstName, lastName, email, phone, address, site, message };

    try {
      const res = await axiosPublic.post(`/api/contact`, data);
      if (res?.data?.insertedId) {
        toast.success("Submitted successfully.");
        form.reset();
      } else {
        toast.error(res.data.message || "Something went wrong.");
      }
    } catch (e) {
      toast.error(
        e?.response?.data?.message || e?.message || "Submission failed.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-clip rounded-md border bg-default-50 dark:border-default-100">
        <div className="px-6 py-8 lg:px-12">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <Input
              isRequired
              isClearable
              type="text"
              name="firstName"
              size="lg"
              label="First Name"
              placeholder="Enter first name"
            />
            <Input
              isClearable
              type="text"
              name="lastName"
              size="lg"
              label="Last Name"
              placeholder="Enter last name"
            />
            <Input
              isRequired
              isClearable
              type="email"
              name="email"
              size="lg"
              label="Email Address"
              placeholder="Enter email address"
            />
            <Input
              isClearable
              type="text"
              name="phone"
              size="lg"
              label="Phone Number"
              placeholder="Enter phone number"
            />
            <div className="w-full lg:col-span-2">
              <Input
                isClearable
                type="text"
                name="address"
                size="lg"
                label="Address"
                placeholder="Enter your address"
              />
            </div>
            <div className="w-full lg:col-span-2">
              <Textarea
                isRequired
                isClearable
                type="text"
                name="message"
                size="lg"
                label="Message"
                placeholder="Enter your message"
              />
            </div>
            <div className="w-full text-center lg:col-span-2">
              <Button
                type="submit"
                className="w-full sm:max-w-60"
                size="lg"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
