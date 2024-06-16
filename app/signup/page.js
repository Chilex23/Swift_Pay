import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex">
      <div className="bg-[#14181F] text-white w-[40rem] h-full px-10 relative hidden md:block">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-20"
          href="/"
        >
          <div className="w-32 flex gap-x-2 text-white md:w-40">
            <Image
              src="/Light-Logo.png"
              width={30}
              height={30}
              className=""
              alt="Swift Pay Logo"
            />
            <p className="text-2xl font-bold">Swift</p>
          </div>
        </Link>
        <p className="text-2xl font-bold">Institutional Investment</p>
        <p className="text-white mt-4">
          When you select SwiftEarn Primed to manage institutional assets, you
          will generate a better ROI
        </p>
        {/* Vector pics */}
        <Image
          src="/Etherum2.png"
          width={60}
          height={60}
          alt="dollar sign"
          className="absolute bottom-72 right-52 z-20"
        />
        <Image
          src="/Bitcoin-Vector.png"
          width={150}
          height={150}
          alt="bitcoin sign"
          className="absolute bottom-52 right-12 z-20"
        />
        <Image
          src="/Stat Box.png"
          width={400}
          height={400}
          alt="card"
          className="absolute bottom-10 right-5 z-20"
        />
        {/* Vector pics */}
      </div>

      <div className="w-full">
        <div className="w-fit mx-auto mt-16 p-6">
          <p className="text-3xl font-semibold">Create Account</p>
          <div className="mt-4">
            <label id="account-number" className="text-sm font-medium">
              Surname
            </label>
            <input
              name="account-number"
              type="text"
              placeholder="Enter your surname"
              className="w-[28rem] h-14 mt-2 block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="mt-2">
            <label id="account-number" className="text-sm font-medium">
              First Name
            </label>
            <input
              name="account-number"
              type="text"
              placeholder="Enter your firstname"
              className="w-[28rem] h-14 mt-2 block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="mt-2 flex flex-col">
            <label id="bank" className="text-sm font-medium mb-2">
              Gender
            </label>
            <select className="select select-bordered text-black w-[28rem] h-14">
              <option disabled selected>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="mt-2">
            <label id="account-number" className="text-sm font-medium">
              Email Address
            </label>
            <input
              name="account-number"
              type="email"
              placeholder="Enter your email"
              className="w-[28rem] h-14 mt-2 block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="mt-2">
            <label id="account-number" className="text-sm font-medium">
              Enter Phone number
            </label>
            <input
              name="account-number"
              type="text"
              placeholder="Enter your number"
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
              className="w-[28rem] h-14 mt-2 block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="mt-6 text-sm text-[#6D7280]">
            <p>. Minimum 8 characters</p>
            <p>. Include uppercase, lowercase letters and numbers</p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-[#4B5563]">
              I am over 18 years old and I agree to the terms and conditions of
              Swift
            </p>
          </div>
          <Link href={"/dashboard"}>
            <button className="btn mt-8 w-full text-white font-semibold bg-[#6366F1]">
              Create Account
            </button>
          </Link>
          <div className="my-6 text-center">
            <p className="text-sm text-[#1F2937]">
              Already have an account?{" "}
              <Link href={"/login"}>
                <span className="text-[#2563EB]">Log In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
