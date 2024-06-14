import Link from "next/link";
import Image from "next/image";

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
      <div className="w-full mt-0 relative">
        <div className="pt-36 w-[60%] mx-auto">
          <p className="uppercase text-[#9CA3AF] text-center">About Us</p>
          <p className="text-[3.2rem] font-bold text-center mt-8">
            Supercharge Your Crypto Gains with Effortless Arbitrage
          </p>
          <p className="text-[#F9FAFB] text-center mt-8">
            Since you are on the About us page, it's time to hear about our
            story!
          </p>
        </div>

        <Image
          src="/Group625075.png"
          width={250}
          height={250}
          alt="Lines sign"
          className="absolute top-0 z-1"
        />
        <Image
          src="/Group625075.png"
          width={250}
          height={250}
          alt="Lines sign"
          className="absolute top-0 right-0 z-1"
        />
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(20, 24, 31, 0) 25.22%, rgba(20, 24, 31, 0.78) 55.15%, #14181F 74.85%)",
          }}
          className="h-20 w-full text-white absolute top-0 z-10"
        >
          &nbsp;
        </div>
      </div>
      {/* HeaderTitle */}
      {/* Body border */}
      <div className="mx-24 mt-36">
        {/* Swift Story */}
        <div className="w-[90%] mx-auto">
          <p className="text-3xl font-bold">Swift Story</p>
          <p className="mt-6 mb-8 text-lg text-[#E5E7EB]">
            Remember the Bitcoin frenzy of 2017? We, like many, were swept up in
            the excitement of this revolutionary technology. But amidst the
            soaring prices and dizzying drops, we saw a gap. The cryptocurrency
            market, with its immense potential, felt like a playground for
            seasoned traders, leaving newcomers on the sidelines. We wanted to
            change that.
          </p>
          <p className="mb-8 text-lg text-[#E5E7EB]">
            <span className="font-bold">Our vision: </span>A user-friendly
            platform that empowers everyone, regardless of experience, to
            participate in the crypto space. We were not afraid to roll up our
            sleeves. Our team, a passionate mix of developers and analysts,
            embarked on building a robust yet approachable platform.
          </p>
          <p className="mb-8 text-lg text-[#E5E7EB]">
            The journey wasn't without its hurdles. Adapting to ever-changing
            market dynamics and navigating complex regulations presented their
            own challenges. But through it all, one principle remained our
            guiding light: making crypto accessible and secure for everyone
          </p>
        </div>
        {/* Swift Story */}

        {/* Platform Offer */}
        <div className="mt-40">
          <p className="text-[3.2rem] font-bold text-center mt-8">
            What does our platform offer?
          </p>
          <p className="text-lg w-[90%] mx-auto mt-10 leading-8 text-center text-[#E5E7EB]">
            Swift makes cryptocurrency arbitrage trading accessible to all. Our
            user-friendly platform allows you to capitalize on price
            discrepancies across popular trading platforms with just a few
            clicks, maximizing your potential returns in the dynamic crypto
            market. No prior trading experience or managing dozens of exchanges
            is necessary.
          </p>
          <div className="mt-10">
            <Image
              src="/about-us.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="People talking"
            />
          </div>
        </div>
        {/* Platform Offer */}
        <p className="text-center text-3xl mt-40 font-medium w-4/5 mx-auto">
          Enjoy secure trading with industry-leading safeguards. Sign up and
          unlock effortless crypto gains today!
        </p>
        {/* Points */}
        <div className="mt-24 flex gap-12 justify-between">
          <div className="w-fit">
            <p className="text-sm text-[#9CA3AF] mb-6">Point 1</p>
            <p className="text-3xl font-bold text-[#F3F4F6] mb-8">
              Putting our investors first is Key
            </p>
            <p className="text-lg text-[#E5E7EB]">
              We are committed to providing all our investors with exceptional
              service while offering our team the best training.
            </p>
          </div>
          <div className="w-fit">
            <p className="text-sm text-[#9CA3AF] mb-6">Point 2</p>
            <p className="text-3xl font-bold text-[#F3F4F6] mb-8">
              Experience more than Trading
            </p>
            <p className="text-lg text-[#E5E7EB]">
              We follow a very strict and disciplined process for investment, as
              we are aware, that we are dealing with our client's funds.
              Investment means a lot to us, and we respect the trust of our
              clients.
            </p>
          </div>
        </div>
        {/* Points */}

        <div className="mt-40">
          <p className="text-3xl font-bold w-fit mx-auto">
            Investment Plans that suits your personality
          </p>
          <p className="text-lg w-fit mx-auto text-[#E5E7EB]">
            We create value by sticking to our consistent investment philosophy
            and disciplined research process
          </p>
          <div className="mt-16">
            <Image
              src="/wrap.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="People talking"
            />
          </div>
        </div>
        {/* Certification */}
        <div className="my-24 w-max mx-auto">
          <p className="text-3xl font-medium text-center">Certification</p>
          <div className="mt-8">
            <Image
              src="/cert 1.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="People talking"
            />
          </div>
        </div>
        {/* Certification */}
      </div>
      {/* Body */}

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
