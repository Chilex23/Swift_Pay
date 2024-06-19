import NavBar from "../ui/navBar";
import Footer from "../ui/footer";

export default function Page() {
  return (
    <main className="bg-[#14181F] text-white min-h-screen">
      <NavBar />
      {/* HeaderTitle */}
      <div className="w-full mt-0 relative">
        <div className="pt-36 px-2 lg:px-0 lg:w-[70%] mx-auto relative z-30">
          <p className="text-4xl font-bold">Send Request</p>
          <p className="text-sm mt-4">
            Please leave a request, provide feedback, or report any issues to
            our customer support
          </p>

          <div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="mt-6 w-full">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="block rounded-md border border-gray-200 py-2 h-14 w-full md:w-[25rem] placeholder:text-black pl-2 outline-2"
                />
              </div>

              <div className="mt-5 text-black">
                <label
                  id="account-number"
                  className="text-sm text-white font-medium"
                >
                  Choose Category
                </label>
                <select className="select select-bordered w-full md:w-[25rem] h-14">
                  <option disabled selected>
                    Select Category e.g Technical Issues
                  </option>
                  <option>Withdrawal Problems</option>
                  <option>NIN Issues</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                placeholder="Enter the title of your request/report "
                className="block rounded-md border border-gray-200 py-2 h-14 w-full placeholder:text-black pl-2 outline-2"
              />
            </div>
            <div className="mt-6">
              <label className="text-sm font-medium">
                Describe your request/report
              </label>
              <textarea
                placeholder="Tell us about the request/report"
                className="block rounded-md border border-gray-200 py-2 w-full placeholder:text-black pl-2 outline-2"
                rows={6}
              />
            </div>
            <p className="text-xs mt-4">
              We may email you for more information or updates.
            </p>
          </div>

          <button className="btn px-24 mt-16 text-white font-medium bg-[#2467E3] mx-auto border-none block">
            Submit
          </button>
        </div>
      </div>
      {/* HeaderTitle */}
      {/* Body border */}
      <div className="mx-4 lg:mx-24 mt-36"></div>
      {/* Body */}

      <Footer />
    </main>
  );
}
