import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Page Not Found",
  };
}

export default function Error() {
  return (
    <div className="mx-auto flex h-[80dvh] w-10/12 max-w-[1280px] flex-col items-center justify-center sm:w-11/12">
      <div className="text-center text-4xl font-bold text-red-500">
        Something went wrong!
      </div>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        An error occurred. Please refresh the page or try again later.
      </p>

      <Link href="/" className="mt-6 rounded bg-blue-500 px-4 py-2 text-white">
        Go to Homepage
      </Link>
    </div>
  );
}
