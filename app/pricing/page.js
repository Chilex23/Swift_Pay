import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import Footer from "../ui/footer";
import NavBar from "../ui/navBar";

export default function Page() {
  return (
    <main className="bg-[#14181F] text-white min-h-screen">
      {/* Nav BAr */}
      <NavBar />
      {/* Nav BAr */}
      {/* HeaderTitle */}
      <div className="pt-16 px-2 md:px-0 lg:pt-0 mt-16 mb-24 w-full lg:mt-24 lg:w-[50rem] mx-auto">
        <p className="uppercase text-[#9CA3AF] text-center">Plans</p>
        <p className="text-3xl lg:text-[3.2rem] font-bold text-center mt-8 lg:leading-[4rem]">
          Investing now ? Plans Accessible to everyone
        </p>


        <p className="lg:text-lg text-[#F9FAFB] text-center mt-8">
          Get started with the easiest most secure platform to invest, and earn
          cryptocurrencies.
        </p>
      </div>
      {/* HeaderTitle */}
      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 gap-y-10">
        <div className="p-6 md:w-[20rem] bg-[#1B1F28] rounded-xl">
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
        <div className="p-6 md:w-[20rem] bg-[#1B1F28] rounded-xl">
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
        <div className="p-6 md:w-[20rem] bg-[#1B1F28] rounded-xl">
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
        <div className="p-6 md:w-[20rem] bg-[#1B1F28] rounded-xl">
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
        <div className="flex flex-col gap-y-6 md:flex-row mx-4 justify-center md:items-center mt-10">
          <div>
            <label className="text-sm font-medium">Enter Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="md:w-[20rem] w-full h-14 mt-2 block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="md:ml-5 mt-auto flex flex-col">
            <label id="bank" className="text-sm font-medium mb-2">
              Select Package
            </label>
            <select className="select select-bordered text-black md:w-[20rem] w-full h-14">
              <option disabled selected>
                Select Package
              </option>
              <option>Bronze Package</option>
              <option>Silver Package</option>
              <option>Gold Package</option>
            </select>
          </div>
          <button className="btn mt-auto px-16 h-14 block md:ml-8 text-white border-none font-semibold bg-[#6366F1]">
            Calculate Earnings
          </button>
        </div>
      </div>
      {/* ROI */}
      {/* Success HEader */}
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-10 lg:mx-24 gap-10 lg:gap-36 mt-12">
        <div>
          <p className="text-xl lg:text-[3.2rem] font-bold">2.6k</p>
          <p className="lg:text-lg text-[#D2D5DA]">Insurance</p>
        </div>
        <div>
          <p className="text-xl lg:text-[3.2rem] font-bold">500+</p>
          <p className="lg:text-lg text-[#D2D5DA]">Professional Team</p>
        </div>
        <div>
          <p className="text-xl lg:text-[3.2rem] font-bold">2.8k</p>
          <p className="lg:text-lg text-[#D2D5DA]">Market Cap</p>
        </div>
        <div>
          <p className="text-xl lg:text-[3.2rem] font-bold">99%</p>
          <p className="lg:text-lg text-[#D2D5DA]">Success Rate</p>
        </div>
      </div>
      {/* Success HEader */}
      <p className="text-3xl px-2 lg:text-[3.2rem] font-bold text-center mt-24">
        Frequently Asked Questions
      </p>
      {/* Accordion FAQ */}
      <div className="mx-4 lg:mx-10 mt-12 flex flex-col gap-y-8">
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title md:text-xl text-[#E5E7EB] font-medium">
            Is it safe to buy subscriptions on Swiftpay?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title md:text-xl text-[#E5E7EB] font-medium">
            How can I pay for a Swiftpay subscription?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title md:text-xl text-[#E5E7EB] font-medium">
            Can I pay with crypto?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title md:text-xl text-[#E5E7EB] font-medium">
            Can I cancel anytime?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#14181F] text-white border-b-2 border-gray-800 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title md:text-xl text-[#E5E7EB] font-medium">
            What is your Refund Policy?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      {/* Accordion FAQ */}
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </main>
  );
}
