import Form from "./Form";

export async function generateMetadata() {
  return {
    title: "Contact us",
    description: "", // Write a short description for the page here.

    openGraph: {
      title: "Contact us",
      description: "", // Write a short description for the page here.
    },
    twitter: {
      title: "Contact us",
      description: "", // Write a short description for the page here.
    },
  };
}

const Page = () => {
  return (
    <main className="mx-auto my-6 w-11/12 max-w-[1275px] lg:my-8 lg:w-10/12">
      <div className="mb-6 text-center text-3xl font-bold lg:text-4xl">
        Contact us
      </div>
      <Form />
    </main>
  );
};

export default Page;
