import Image from "next/image";
import NavBar from "../ui/navBar";
import Footer from "../ui/footer";

export default function Page() {
  return (
    <main className="bg-[#14181F] text-white min-h-screen">
      <NavBar />
      {/* HeaderTitle */}
      <div className="w-full mt-0 relative">
        <div className="pt-36 px-2 lg:px-0 lg:w-[60%] mx-auto relative z-30">
          <p className="text-center text-5xl font-bold">Tell Your Friends</p>
          <p className="text-lg md:text-xl text-[#F3F4F6] text-center mt-8 leading-8">
            Are you impressed with Swift's offerings? Well, Swift is even more
            profitable with friends. Get about 5% of the profit from every
            referral you invite.
          </p>
          <button className="btn mt-8 text-white font-semibold bg-[#2467E3] mx-auto border-none block">
            Get Referral Link
          </button>
        </div>

        <Image
          src="/Dollar-Vector.png"
          width={80}
          height={130}
          alt="Dollar"
          className="absolute top-20 sm:left-[16rem] z-1"
        />
        <Image
          src="/avatar2.png"
          width={50}
          height={50}
          alt="Lines sign"
          className="absolute top-20 right-[30rem] z-1"
        />
        <Image
          src="/avatar3.png"
          width={50}
          height={50}
          alt="Lines sign"
          className="absolute top-24 right-[16rem] z-1"
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
      <div className="mx-4 lg:mx-24 mt-36">
        <p className="text-5xl text-center font-bold">How it Works</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-24 mb-[12rem]">
          <div>
            <div className="flex gap-5 items-center">
              <div className="h-10 w-9">
                <Image
                  src="/01.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt="People talking"
                  className="rounded-2xl"
                />
              </div>
              <p className="font-medium text-2xl">Rules</p>
            </div>
            <p className="mb-8">
              Affiliate program is available for all platform users. You receive
              an affiliate link immediately after registration and you can find
              it in your account.
            </p>

            <p>
              The platform has an account verification system to identify
              multi-accounts created with the purpose of obtaining undue
              benefits. If multiple registrations are detected, these accounts
              will be blocked without the right to refund.
            </p>
          </div>

          <div>
            <div className="flex gap-5 items-center">
              <div className="h-10 w-9">
                <Image
                  src="/02.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt="People talking"
                  className="rounded-2xl"
                />
              </div>
              <p className="font-medium text-2xl">Distribution</p>
            </div>
            <p className="mb-8">
              The reward is received in real-time. As soon as the downstream
              partner receives profit from the automated order, you will receive
              a bonus in accordance with the level of the partner. In this case,
              money is accrued in the currency in which the participant made the
              order.
            </p>

            <p>
              Important Our affiliate program works only for automated orders.
              You will not receive affiliate rewards if your partner creates a
              manual order.
            </p>
          </div>

          <div>
            <div className="flex gap-5 items-center">
              <div className="h-10 w-9">
                <Image
                  src="/03.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt="People talking"
                  className="rounded-2xl"
                />
              </div>
              <p className="font-medium text-2xl">Allocation</p>
            </div>
            <p className="mb-8">
              Under the current partnership conditions, you will receive a
              reward at 3 levels for attracting new partners. For the first
              level you will receive 5% of profit, for level Two you get 5% and
              for level three - 3% .
            </p>

            <p>
              The number of partners involved, as well as the partner's profit,
              has no limits. At the same time, the conditions of the current
              affiliate program can be changed in the future at the initiative
              of SwiftEarn Prime.
            </p>
          </div>
        </div>
      </div>
      {/* Body */}

      <Footer />
    </main>
  );
}
