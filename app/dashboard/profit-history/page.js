import Image from "next/image";
import { WalletIcon, BanknotesIcon } from "@heroicons/react/24/outline";

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
        <div className="flex items-center gap-x-2">
          <Image
            src="/avatar.png"
            width={50}
            height={50}
            className="rounded-full bg-[#EB963F]"
            alt="Avatar profile"
          />
          <p className="text-sm font-medium">
            <span>John Doe</span>
          </p>
        </div>
      </div>
      {/* Header for username */}
      {/* Header */}
      <h2 className="text-2xl font-semibold">Profit History</h2>
      {/* Header */}
      {/* At a glance header */}
      <div className="border-t-2 border-b-2 border-gray-300 mt-7 flex justify-between py-5">
        {/* Glance 1 */}
        <div className="border-r-gray-300 border-r-2 px-4 pt-4">
          <div className="flex gap-x-10">
            <div>
              <p className="font-medium text-sm">Total Investment</p>
              <p className="text-2xl font-semibold mt-2">$10,032.67</p>
            </div>
            <Image
              src="/Line_Chart(Joe-Flores).png"
              width={150}
              height={150}
              alt="Line Chart"
            />
          </div>
          <p className="text-sm mt-2">
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Glance 1 */}
        {/* Glance 2 */}
        <div className="border-r-gray-300 border-r-2 px-4 pt-4">
          <div className="flex gap-x-10">
            <div>
              <p className="font-medium text-sm">Earned Profit</p>
              <p className="text-2xl font-semibold mt-2">$20,032.67</p>
            </div>
            <WalletIcon className="w-6" />
          </div>
          <p className="text-sm mt-2">= 1.5 BTC</p>
        </div>
        {/* Glance 2 */}
        {/* Glance 3 */}
        <div className="px-4 pt-4">
          <div className="flex gap-x-10">
            <div>
              <p className="font-medium text-sm">Expected Profit</p>
              <p className="text-2xl font-semibold mt-2">$1,000.67</p>
            </div>
            <BanknotesIcon className="w-6" />
          </div>
          <p className="text-sm mt-2">0.5 BTC</p>
        </div>
        {/* Glance 3 */}
      </div>
      {/* At a glance header */}
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-boxed my-8 w-fit font-semibold">
        <a role="tab" className="tab bg-white text-black">
          Ongoing Investment
        </a>
        <a role="tab" className="tab text-[#4B5563]">
          Liquidated Investment
        </a>
      </div>
      {/* Tabs */}
      <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
             Amount Invested
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Plan
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Expected Profit
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Due Date
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3 flex gap-x-2 items-center h-16">
              <Image src="/bronze-trophy.png" width={20} height={20} />
              <span>Bronze Package</span>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.34 = 1.5 BTC</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#CA8A04] bg-[#FEF9C3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]"></span>
                Pending
              </button>
            </td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3 flex gap-x-2 items-center h-16">
              <Image src="/silver-trophy.png" width={20} height={20} />
              <span>Silver Package</span>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.34 = 1.5 BTC</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]">&nbsp;</span>
                <span>Invested</span>
              </button>
            </td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3 flex gap-x-2 items-center h-16">
              <Image src="/gold-trophy.png" width={20} height={20} />
              <span>Gold Package</span>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.34 = 1.5 BTC</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]">&nbsp;</span>
                <span>Invested</span>
              </button>
            </td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3 flex gap-x-2 items-center h-16">
              <Image src="/diamond-trophy.png" width={20} height={20} />
              <span>Diamond Package</span>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.34 = 1.5 BTC</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]">&nbsp;</span>
                <span>Invested</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}