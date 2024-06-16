import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex">
      <div className="bg-[#F3F4F6] h-full w-[40rem] px-10 relative hidden md:block">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-20"
          href="/"
        >
          <div className="w-32 flex gap-x-2 text-black md:w-40">
            <Image
              src="/Vector.png"
              width={20}
              height={20}
              className=""
              alt="Swift Pay Logo"
            />
            <p className="text-2xl font-bold">Swift</p>
          </div>
        </Link>
        <p className="text-2xl font-bold">Institutional Investment</p>
        <p className="text-[#4B5563] mt-4">
          When you select SwiftEarn Primed to manage institutional assets, you
          will generate a better ROI
        </p>
        {/* Vector pics */}
        <Image
          src="/Dollar-Vector.png"
          width={90}
          height={90}
          alt="dollar sign"
          className="absolute bottom-64 z-20"
        />
        <Image
          src="/Bitcoin-Vector.png"
          width={120}
          height={120}
          alt="bitcoin sign"
          className="absolute bottom-52 right-36 z-20"
        />
        <Image
          src="/GroupLogin.png"
          width={400}
          height={400}
          alt="card"
          className="absolute bottom-10 right-0 z-20"
        />
        {/* Vector pics */}
      </div>

      <div className="w-full h-full">
        <div className="w-fit mx-auto mt-16 md:mt-36 p-6">
          <p className="text-3xl font-semibold">Hi, Welcome! 👋</p>
          <div className="mt-4">
            <label id="account-number" className="text-sm font-medium">
              Email Address
            </label>
            <input
              name="account-number"
              type="text"
              placeholder="Enter your email address"
              className="w-[28rem] h-14 mt-2 block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="mt-2">
            <label id="account-number" className="text-sm font-medium">
              Password
            </label>
            <input
              name="account-number"
              type="password"
              placeholder=""
              className="w-[28rem] h-14 mt-2 block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="flex justify-between mt-6 text-sm">
            <div>Remember me</div>
            <div>
              <p className="text-[#2563EB] text-sm">Forgot Password?</p>
            </div>
          </div>
          <Link href={"/dashboard"}>
            <button className="btn mt-8 w-full text-white font-semibold bg-[#6366F1]">
              Log in
            </button>
          </Link>
          <div className="my-6 text-center">
            <p className="text-sm text-[#1F2937]">
              Don't have an account?{" "}
              <Link href={"/signup"}>
                <span className="text-[#2563EB]">Signup</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
