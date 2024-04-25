import Image from "next/image";
import {
  PlusIcon,
  BanknotesIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      {/* Header for username */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="flex flex-col">
            <span className="text-xl font-semibold">Welcome, Ghost 👋</span>
            <span className="text-sm text-gray-800">
              Welcome to swiftearnprime, you set the level
            </span>
          </p>
        </div>
        <div className="flex items-center gap-x-1">
          <Image
            src="/balazs-orban.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="User profile"
          />
          <p>
            <span>John Doe</span>
          </p>
        </div>
      </div>
      {/* Header for username */}
      <h2 className="text-2xl font-semibold">Account Summary</h2>
      {/* At a glance header */}
      <div className="border-t-2 border-t-gray-300 mt-10 flex justify-between py-4">
        {/* Glance 1 */}
        <div>
          <div className="flex gap-x-10">
            <div>
              <p className="font-medium">Account Balance</p>
              <p className="text-xl font-semibold">$10,032.67</p>
            </div>
            <Image
              src="/balazs-orban.png"
              width={100}
              height={100}
              className=""
              alt="User profile"
            />
          </div>
          <p className="text-sm mt-2">
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Glance 1 */}
        {/* Glance 2 */}
        <div>
          <div className="flex gap-x-10">
            <div>
              <p className="font-medium">Total Profit</p>
              <p className="text-xl font-semibold">$20,000.35</p>
            </div>
            <Image
              src="/balazs-orban.png"
              width={100}
              height={100}
              className=""
              alt="User profile"
            />
          </div>
          <p className="text-sm mt-2">
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Glance 2 */}
        {/* Glance 3 */}
        <div>
          <div className="flex gap-x-10">
            <div>
              <p className="font-medium">Total Profit</p>
              <p className="text-xl font-semibold">$20,000.35</p>
            </div>
            <Image
              src="/balazs-orban.png"
              width={100}
              height={100}
              className=""
              alt="User profile"
            />
          </div>
          <p className="text-smm mt-2">
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Glance 3 */}
      </div>
      {/* At a glance header */}
      {/* Special Buttons */}
      <div className="py-2 flex items-center justify-center gap-8">
        <button className="flex gap-x-2 bg-violet-500 py-2 px-3 rounded-lg text-white hover:shadow-lg hover:scale-105 transition-all">
          <span>Deposit Fund</span>
          <PlusIcon className="w-6" />
        </button>
        <button className="flex gap-x-2 border-gray-200 border-2 py-2 px-3 rounded-lg text-black hover:shadow-lg hover:scale-105 transition-all">
          <span>Withdraw Funds</span>
          <BanknotesIcon className="w-6" />
        </button>
        <button className="flex gap-x-2 border-gray-200 border-2 py-2 px-3 rounded-lg text-black hover:shadow-lg hover:scale-105 transition-all">
          <span>Transfer Funds</span>
          <PaperAirplaneIcon className="w-6" />
        </button>
      </div>
      {/* Special Buttons */}
      {/* Total Amount */}
      <div className="py-4 mt-6 flex justify-between">
        {/* Total 1 */}
        <div className="flex items-center gap-x-3">
          <Image
            src="/balazs-orban.png"
            width={50}
            height={50}
            className=""
            alt="User profile"
          />
          <div>
            <p className="text-sm">Total Transactions</p>
            <p>
              <span className="text-lg font-semibold">$100,000.35</span> = 3.5
              BTC
            </p>
          </div>
        </div>
        {/* Total 1 */}
        {/* Total 2 */}
        <div className="flex items-center gap-x-3">
          <Image
            src="/balazs-orban.png"
            width={50}
            height={50}
            className=""
            alt="User profile"
          />
          <div>
            <p className="text-sm">Total Withdrawal</p>
            <p>
              <span className="text-lg font-semibold">$100,000.35</span> = 1.5
              BTC
            </p>
          </div>
        </div>
        {/* Total 2 */}
        {/* Total 3 */}
        <div className="flex items-center gap-x-3">
          <Image
            src="/balazs-orban.png"
            width={50}
            height={50}
            className=""
            alt="User profile"
          />
          <div>
            <p className="text-sm">Bonus</p>
            <p>
              <span className="text-lg font-semibold">$100.35</span> = 0.05 BTC
            </p>
          </div>
        </div>
      </div>
      {/* Total Amount */}
      {/* Recent Transactions */}
      <div className="mt-14 flex justify-between">
        <h2 className="text-2xl font-semibold">Recent Transactions</h2>
        <button
          className="text-sm text-[#2563EB] underline
"
        >
          See All Transactions
        </button>
      </div>
      {/* Recent Transactions */}
      {/* Table for recent transactions */}
      <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Date/Time
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Type
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Description
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">Deposit</td>
            <td className="whitespace-nowrap px-3 py-3">Greg69Xiwo23</td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="px-4 py-3 rounded-md text-[#CA8A04] bg-[#FEF9C3] font-medium text-xs">
                Pending
              </button>
            </td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">Deposit</td>
            <td className="whitespace-nowrap px-3 py-3">Greg69Xiwo23</td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="px-4 py-3 rounded-md text-[#CA8A04] bg-[#FEF9C3] font-medium text-xs">
                Pending
              </button>
            </td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">Transfer</td>
            <td className="whitespace-nowrap px-3 py-3">Greg69Xiwo23</td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                Successful
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Table for recent transactions */}
    </>
  );
}
