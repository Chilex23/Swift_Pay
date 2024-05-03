import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-center mx-auto mt-12">This will be the Homepage</h1>
      <Link
          href={"/dashboard"}
          className="border-2 border-[#D2D5DA] px-6 py-2 text-lg rounded-md font-medium"
        >
          Link to the dashboard
        </Link>
    </main>
  );
}
