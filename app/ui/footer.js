import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#07090E] mt-16 text-white">
        <div className="md:px-16 px-8 pt-36 pb-0">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-[36rem]">
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

          <div className="mt-24 flex md:flex-row flex-col gap-y-6 justify-between">
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
    </>
  );
};

export default Footer;
