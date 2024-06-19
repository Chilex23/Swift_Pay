import Link from "next/link";
import Image from "next/image";
import {
  BanknotesIcon,
  WalletIcon,
  BookmarkSquareIcon,
  GlobeAltIcon,
  GiftIcon,
  LockClosedIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import NavBar from "../ui/navBar";
import Footer from "../ui/footer";

export default function Page() {
  return (
    <main className="bg-[#14181F] text-white min-h-screen">
      <NavBar />
      {/* HeaderTitle */}
      <div className="w-full mt-0 relative">
        <div className="mx-4 pt-36 px-2 lg:px-0 lg:w-[90%] lg:mx-auto relative z-30">
          <p className="text-4xl md:text-5xl font-bold">How can we help</p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link
              href={"/send-request"}
              className="flex gap-10 px-6 py-8 bg-[#1B1F28] rounded-xl cursor-pointer"
            >
              <div>
                <p className="text-2xl font-bold">Send Request</p>
                <p className="mt-4">
                  Contact our customer support for requests, feedback, or
                  issues.
                </p>
              </div>
              <WalletIcon className="w-20" />
            </Link>

            <div className="flex gap-10 px-6 py-8 bg-[#1B1F28] rounded-xl cursor-pointer">
              <div>
                <p className="text-2xl font-bold">Getting Started Guide</p>
                <p className="mt-4">
                  Everything you need for a successful start. Start earning now
                </p>
              </div>
              <BookmarkSquareIcon className="w-20" />
            </div>

            <div className="flex gap-10 px-6 py-8 bg-[#1B1F28] rounded-xl cursor-pointer">
              <div>
                <p className="text-2xl font-bold">Join the Community</p>
                <p className="mt-4">
                  You can find a lot of useful information on our social
                  networks
                </p>
              </div>
              <GlobeAltIcon className="w-20" />
            </div>
          </div>
        </div>
      </div>
      {/* HeaderTitle */}
      {/* Body border */}
      <div className="mx-4 lg:mx-auto lg:w-[90%] mt-24">
        <p className="text-3xl w-fit mx-auto md:w-full md:mx-0 md:text-4xl font-bold">
          Frequently asked questions
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            <GiftIcon className="w-12" />
            <p className="text-2xl font-medium">Affiliate program FAQ</p>
          </div>

          <div className="flex items-center gap-4">
            <LockClosedIcon className="w-12" />
            <p className="text-2xl font-medium">Security FAQ</p>
          </div>

          <div className="flex items-center gap-4">
            <ChatBubbleLeftEllipsisIcon className="w-12" />
            <p className="text-2xl font-medium">Other FAQ</p>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-auto lg:w-[90%] mt-24 mb-48">
        <p className="text-3xl w-fit mx-auto md:w-full md:mx-0 md:text-4xl font-bold">
          Popular Questions
        </p>

        {/* Accordion FAQ */}
        <div className="mt-12 flex flex-col gap-y-8">
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
      </div>
      {/* Body */}

      <Footer />
    </main>
  );
}
