import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Pagination from "@/app/ui/dashboard/pagination";

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
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">Account Transactions</h2>
        <div>
          <details className="dropdown">
            <summary className="m-1 btn border-[#E5E7EB] border-2 bg-white text-sm">
              <span>All Transactions</span>
              <ChevronDownIcon className="w-4 font-bold" />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      {/* Header */}
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
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#CA8A04] bg-[#FEF9C3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]"></span>
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
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#CA8A04] bg-[#FEF9C3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]"></span>
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
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]"></span>
                Successful
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
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]"></span>
                Successful
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
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]"></span>
                Successful
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
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]"></span>
                Successful
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Table for recent transactions */}
      <div className="mt-12 w-full">
        <Pagination totalPages={8} />
      </div>
    </>
  );
}