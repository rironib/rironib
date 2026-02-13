import { atomic_age } from "@/config/fonts";
import Form from "./Form";

export const metadata = {
  title: "Contact us",
  description:
    "Get in touch with RONiB for web development and design inquiries.",
  openGraph: {
    title: "Contact us",
    description:
      "Get in touch with RONiB for web development and design inquiries.",
  },
  twitter: {
    title: "Contact us",
    description:
      "Get in touch with RONiB for web development and design inquiries.",
  },
};

const Page = () => {
  return (
    <>
      <div
        className={`${atomic_age.className} mb-6 text-center text-3xl font-bold lg:text-4xl`}
      >
        Contact us
      </div>
      <Form />
    </>
  );
};

export default Page;
