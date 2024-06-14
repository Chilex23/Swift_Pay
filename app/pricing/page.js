import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="bg-[#14181F] text-white min-h-screen">
      {/* Nav BAr */}
      <div className="flex px-20 py-5">
        <div className="w-32 flex gap-x-2 md:w-40 mr-[8rem]">
          <Image
            src="/Light-Logo.png"
            width={30}
            height={30}
            className=""
            alt="Swift Pay Logo"
          />
          <p className="text-2xl font-bold">Swift</p>
        </div>

        <div className="flex gap-x-16 text-sm font-medium items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <p>Affiliate Program</p>
          <Link href={"/about-us"}>About Us</Link>
          <p>Support</p>
          <div className="ml-10 flex items-center gap-x-5">
            <Link href={"/login"}>Log in</Link>
            <div className="h-10 rounded-md bg-gradient-to-r from-indigo-500 via-yellow-200 to-pink-400 p-[2px]">
              <Link
                href={"/signup"}
                className="h-full w-full bg-gray-800 flex items-center px-2"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Nav BAr */}
      {/* HeaderTitle */}
      <div className="mt-24 w-[50rem] mx-auto">
        <p className="uppercase text-[#9CA3AF] text-center">Plans</p>
        <p className="text-[3.2rem] font-bold text-center mt-8">
          Investing now ? Plans Accessible to everyone
        </p>
        <p className="text-lg text-[#F9FAFB] text-center mt-8">
          Get started with the easiest most secure platform to invest, and earn
          cryptocurrencies.
        </p>
      </div>
      {/* HeaderTitle */}
      {/* Cards */}
      <div className="mt-10 grid grid-cols-4 mx-5 gap-y-10">
        <div className="p-6 w-[20rem] bg-[#1B1F28] rounded-xl">
          <div className="flex gap-4">
            <p className="text-white">Bronze Package</p>
            <Image src="/gold-trophy.png" width={20} height={20} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-white">$9,999</p>
          <p className="text-sm text-white my-3">
            Plan duration is <span className="font-semibold">7 days</span> and
            guarantees return of <span className="font-semibold">325%</span>
          </p>
          <Link href={"/buy-package"}>
            <button className="btn mt-4 w-full text-white border-none font-semibold bg-[#6366F1]">
              Get Started
            </button>
          </Link>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
        <div className="p-6 w-[20rem] bg-[#1B1F28] rounded-xl">
          <div className="flex gap-4">
            <p className="text-white">Silver Package</p>
            <Image src="/gold-trophy.png" width={20} height={20} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-white">$9,999</p>
          <p className="text-sm text-white my-3">
            Plan duration is <span className="font-semibold">7 days</span> and
            guarantees return of <span className="font-semibold">325%</span>
          </p>
          <button className="btn mt-4 w-full text-white border-none font-semibold bg-[#6366F1]">
            Get Started
          </button>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
        <div className="p-6 w-[20rem] bg-[#1B1F28] rounded-xl">
          <div className="flex gap-4">
            <p className="text-white">Gold Package</p>
            <Image src="/gold-trophy.png" width={20} height={20} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-white">$9,999</p>
          <p className="text-sm text-white my-3">
            Plan duration is <span className="font-semibold">7 days</span> and
            guarantees return of <span className="font-semibold">325%</span>
          </p>
          <button className="btn mt-4 w-full text-white border-none font-semibold bg-[#6366F1]">
            Get Started
          </button>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
        <div className="p-6 w-[20rem] bg-[#1B1F28] rounded-xl">
          <div className="flex gap-4">
            <p className="text-white">Diamond Package</p>
            <Image src="/gold-trophy.png" width={25} height={25} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-white">$9,999</p>
          <p className="text-sm text-white my-3">
            Plan duration is <span className="font-semibold">7 days</span> and
            guarantees return of <span className="font-semibold">325%</span>
          </p>
          <button className="btn mt-4 w-full border-none text-white font-semibold bg-[#6366F1]">
            Get Started
          </button>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
      </div>
      {/* Cards */}
      {/* ROI */}
      <div className="mt-16 py-10">
        <p className="text-3xl text-center font-bold">
          Calculate estimated ROI for each of our packages
        </p>
        <div className="flex justify-center items-center mt-10">
          <div>
            <label className="text-sm font-medium">Enter Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="w-[20rem] h-14 mt-2 block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="ml-5 mt-auto flex flex-col">
            <label id="bank" className="text-sm font-medium mb-2">
              Select Package
            </label>
            <select className="select select-bordered text-black w-[20rem] h-14">
              <option disabled selected>
                Select Package
              </option>
              <option>Bronze Package</option>
              <option>Silver Package</option>
              <option>Gold Package</option>
            </select>
          </div>
          <button className="btn mt-auto px-16 h-14 block ml-8 text-white border-none font-semibold bg-[#6366F1]">
            Calculate Earnings
          </button>
        </div>
      </div>
      {/* ROI */}
      {/* Success HEader */}
      <div className="flex mx-24 justify-between gap-x-36 mt-12">
        <div>
          <p className="text-[3.2rem] font-bold">2.6k</p>
          <p className="text-lg text-[#D2D5DA]">Insurance</p>
        </div>
        <div>
          <p className="text-[3.2rem] font-bold">500+</p>
          <p className="text-lg text-[#D2D5DA]">Professional Team</p>
        </div>
        <div>
          <p className="text-[3.2rem] font-bold">2.8k</p>
          <p className="text-lg text-[#D2D5DA]">Market Cap</p>
        </div>
        <div>
          <p className="text-[3.2rem] font-bold">99%</p>
          <p className="text-lg text-[#D2D5DA]">Success Rate</p>
        </div>
      </div>
      {/* Success HEader */}
      <p className="text-[3.2rem] font-bold text-center mt-24">
        Frequently Asked Questions
      </p>
      {/* Accordion FAQ */}
      <div className="mx-10 mt-12 flex flex-col gap-y-8">
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl text-[#E5E7EB] font-medium">
            Is it safe to buy subscriptions on Swiftpay?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl text-[#E5E7EB] font-medium">
            How can I pay for a Swiftpay subscription?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl text-[#E5E7EB] font-medium">
            Can I pay with crypto?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl text-[#E5E7EB] font-medium">
            Can I cancel anytime?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl text-[#E5E7EB] font-medium">
            What is your Refund Policy?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      {/* Accordion FAQ */}
      {/* Footer */}
      <footer className="bg-[#07090E] mt-36 text-white">
        <div className="px-16 pt-36 pb-0">
          <div className="flex justify-between items-center">
            <div className="w-[36rem]">
              <p className="font-bold text-4xl">
                Investment plans that suits your personality
              </p>
              <p className="text-lg text-[#F9FAFB] mt-4">
                We create value by sticking to our consistent investment
                philosophy and disciplined research process
              </p>
            </div>
            <button className="btn mt-8 text-white font-semibold bg-[#2467E3] border-none block">
              Let's get started
            </button>
          </div>

          <div className="mt-24 flex justify-between">
            <div>
              <div className="w-32 flex gap-x-1 md:w-40">
                <Image
                  src="/LogoLight.svg"
                  width={20}
                  height={20}
                  className=""
                  alt="Swift Pay Logo"
                />
                <p className="text-2xl font-bold">Swift</p>
              </div>
              <p className="text-[#D2D5DA] mt-2">
                Experience more than Trading.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-sm text-[#F9FAFB]">Market</p>
              <p className="text-sm text-[#9CA3AF]">Stocks</p>
              <p className="text-sm text-[#9CA3AF]">Forex</p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-sm text-[#F9FAFB]">Company</p>
              <p className="text-sm text-[#9CA3AF]">About Us</p>
              <p className="text-sm text-[#9CA3AF]">Arbitage</p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-sm text-[#F9FAFB]">Legal</p>
              <p className="text-sm text-[#9CA3AF]">Privacy Policy</p>
              <p className="text-sm text-[#9CA3AF]">Terms of Service</p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-sm text-[#F9FAFB]">Support</p>
              <p className="text-sm text-[#9CA3AF]">Help Center</p>
              <p className="text-sm text-[#9CA3AF]">FAQ</p>
            </div>
          </div>
        </div>

        <div className="mt-24 py-8 px-12 border-t border-dashed border-[#374151]">
          <p className="text-[#D2D5DA]">
            Copyright© 2024. Swift. All Right Reserved.
          </p>
        </div>
      </footer>
      {/* Footer */}
    </main>
  );
}
