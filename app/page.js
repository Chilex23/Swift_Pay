import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-10">
      <div className="bg-[#14181F] text-white pb-16 relative">
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
            <p>Home</p>
            <p>Pricing</p>
            <p>Affiliate Program</p>
            <p>About Us</p>
            <p>Support</p>
            <div className="ml-10 flex items-center gap-x-5">
              <p>Log in</p>
              <div class="h-10 rounded-md bg-gradient-to-r from-indigo-500 via-yellow-200 to-pink-400 p-[2px]">
                <div class="h-full w-full bg-gray-800 flex items-center px-2">
                  Create an account
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Nav BAr */}
        <div className="w-2/4 mx-20 mt-32">
          <h2 className="text-6xl font-bold w-[35rem] mb-5">
            Simple and Secure Fx Trading Platorm
          </h2>
          <p>
            Get started with the easiest, most secure platform to invest, and
            earn cryptocurrencies
          </p>
          <button className="rounded-lg mt-4 px-6 py-4 text-white font-semibold bg-[#2467E3]">
            Let's get started
          </button>
        </div>
        {/* Stat Box  */}
        <div className="bg-[#1B1F28] px-4 py-4 w-fit rounded-lg ml-[40rem] mt-2 relative z-30">
          <div className="flex gap-x-10">
            <div>
              <p className="font-medium">Total Profit</p>
              <p className="text-2xl font-semibold">$20,000.35</p>
            </div>
            <Image
              src="/Line_Chart(Joe-Flores).png"
              width={150}
              height={150}
              alt="Line Chart"
            />
          </div>
          <p className="text-sm mt-2 flex items-center">
            <Image src="/Approx-Icon.png" width={30} height={30} />
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Stat Box  */}
        {/* Crypto pics */}
        <div className="mt-16 px-10">
          <Image src="/crypto-group.png" height={600} width={600} />
        </div>
        {/* Crypto pics */}
        {/* Vector Pics */}
        <Image
          src="/Dollar-Vector.png"
          width={60}
          height={60}
          alt="dollar sign"
          className="absolute top-36 right-[35rem] z-20"
        />
        <Image
          src="/Euro-Vector.png"
          width={80}
          height={80}
          alt="Euro sign"
          className="absolute top-24 right-[22rem] z-20"
        />
        <Image
          src="/Bitcoin-Vector.png"
          width={100}
          height={100}
          alt="Bitcoin sign"
          className="absolute top-[25rem] right-[28rem] z-10"
        />
        <Image
          src="/Group625075.png"
          width={490}
          height={490}
          alt="Lines sign"
          className="absolute top-20 right-0 z-10"
        />
        {/* Vector Pics */}
      </div>
      {/* Success HEader */}
      <div className="flex justify-center gap-x-36 mt-12">
        <div>
          <p className="text-2xl font-bold">2.6k</p>
          <p className="text-lg text-[#4B5563]">Insurance</p>
        </div>
        <div>
          <p className="text-2xl font-bold">500+</p>
          <p className="text-lg text-[#4B5563]">Professional Team</p>
        </div>
        <div>
          <p className="text-2xl font-bold">2.8k</p>
          <p className="text-lg text-[#4B5563]">Market Cap</p>
        </div>
        <div>
          <p className="text-2xl font-bold">99%</p>
          <p className="text-lg text-[#4B5563]">Success Rate</p>
        </div>
      </div>
      {/* Success HEader */}
      <h2 className="text-5xl font-bold text-center mt-16">
        Why we are different
      </h2>
      <p className="text-center text-[#4B5563] mt-2">
        Our vision is to provide access to the world’s markets easier, faster
        and at a lower cost than what exists in the market today.
      </p>
      {/* Institutional Investment */}
      <div className="w-[90%] mx-auto rounded-lg bg-gradient-to-r from-[#BFD6FA] to-[#E8F0FC] mt-16 py-24 relative">
        <div className="mx-16 w-[16rem] mt-5">
          <p className="text-[#4B5563] capitalize mb-5">BETTER RETURNS</p>
          <p className="text-4xl font-bold">Institutional Investment</p>
        </div>
        <p className="text-[#4B5563] text-lg mx-16 w-[36rem] my-5">
          When you select SwiftEarn Primed to manage institutional assets, you
          will generate a better ROI
        </p>
        {/* Vector Pics */}
        <div>
          <Image
            src="/coinstack.png"
            width={350}
            height={350}
            alt="coinstack"
            className="absolute bottom-0 right-[20rem]"
          />
          <Image
            src="/card2.png"
            width={220}
            height={220}
            alt="card"
            className="absolute bottom-0 right-[2rem]"
          />
          <Image
            src="/card1.png"
            width={400}
            height={400}
            alt="card"
            className="absolute top-[3rem] right-0"
          />
          <Image
            src="/Bitcoin-Vector(2).png"
            width={150}
            height={150}
            alt="Bitcoin"
            className="absolute bottom-[10rem] right-[26rem]"
          />
        </div>
        {/* Vector Pics */}
      </div>
      {/* Institutional Investment */}
      {/* Real Assets */}
      <div className="w-[90%] mx-auto mt-16 flex gap-x-6">
        <div className="bg-[#F0F2F5] w-[45%] pt-5 rounded-lg">
          <Image
            src="/zen-cheung.png"
            width={400}
            height={400}
            alt="a man holding a phone"
            className="mx-auto"
          />
        </div>
        <div className="bg-[#F0F2F5] rounded-lg w-[55%] relative">
          <div className="mx-16 mt-20">
            <p className="text-[#4B5563]">ELITE SERVICE</p>
            <p className="text-4xl font-bold my-5">Real Assets</p>
            <p className="text-[#4B5563]">
              Exclusive assistance to Investors looking to add a broad real
              assets allocation to their private markets
            </p>
          </div>
          {/* Vector Pics */}
          <div>
            <Image
              src="/Bitcoin-Vector.png"
              width={150}
              height={150}
              alt="Bitcoin"
              className="absolute bottom-[1rem] right-[8rem]"
            />
            <Image
              src="/Dollar-Vector.png"
              width={60}
              height={60}
              alt="dollar sign"
              className="absolute bottom-36 right-[20rem] z-20"
            />
            <Image
              src="/Euro-Vector.png"
              width={80}
              height={80}
              alt="Euro sign"
              className="absolute bottom-12 left-[8rem] z-20"
            />
          </div>
          {/* Vector Pics */}
        </div>
      </div>
      {/* Real Assets */}
      {/* Alternatives */}
      <div className="w-[90%] mx-auto rounded-lg bg-gradient-to-r from-[#F0F8E5] to-[#E2FAC0] mt-16 flex">
        <div className="mx-16 my-32 w-[45%]">
          <p className="text-[#4B5563]">TRUSTED AMONG PEERS</p>
          <p className="text-4xl font-bold my-5">Alternatives</p>
          <p className="text-[#4B5563]">
            As a pioneer in alternative investing., SwiftEarn Prime has a long
            track record of managing investors money
          </p>
        </div>
        <div>
          <Image
            src="/Group625105.png"
            width={700}
            height={700}
            alt="alternative"
          />
        </div>
      </div>
      {/* Alternatives */}
      {/* Every Transactions */}
      <div className="bg-[#14181F] mt-16 text-white py-20">
        <div className="w-[90%] mx-auto rounded-lg px-10 bg-[#1B1F28] flex justify-between">
          <div className="mx-10 w-2/5 py-16">
            <p className="text-4xl font-bold">
              Every transaction comes easy and 100% seamless
            </p>
            <p className="mt-8 text-lg">
              Trade and earn with pre-eminent crypfield VIP multichain
              decentralized exchange
            </p>
            <button className="rounded-lg mt-8 px-5 py-3 text-sm text-white font-semibold bg-[#2467E3]">
              Create an account
            </button>
          </div>
          <div>
            <Image src="/Mockup-Phone.png" width={350} height={300} />
          </div>
        </div>

        {/* Types of Benefits for the site */}
        <div className="w-[90%] mx-auto mt-10">
          <div className="flex justify-between gap-x-8">
            <div className="rounded-lg pl-10 pr-0 py-12 bg-[#1B1F28] w-[50%]">
              <Image
                src="/coins.png"
                width={200}
                height={200}
                className="ml-auto"
              />
              <div>
                <p className="text-[#D2D5DA]">01 —</p>
                <p className="text-2xl font-medium mt-2">
                  Fast and easy process
                </p>
              </div>
            </div>

            <div className="rounded-lg pl-10 pr-0 py-12 bg-[#1B1F28] w-[50%]">
              <Image
                src="/banner2.png"
                width={150}
                height={200}
                className="ml-auto"
              />
              <div>
                <p className="text-[#D2D5DA]">02 —</p>
                <p className="text-2xl font-medium mt-2">
                  Earn your share of trading
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-x-8 mt-10">
            <div className="rounded-lg pl-10 pr-0 pb-12 bg-[#1B1F28] w-[50%]">
              <Image
                src="/banner3.png"
                width={125}
                height={100}
                className="ml-auto"
              />
              <div>
                <p className="text-[#D2D5DA]">03 —</p>
                <p className="text-2xl font-medium mt-2">Control Over Policy</p>
              </div>
            </div>

            <div className="rounded-lg pl-10 pr-0 py-12 bg-[#1B1F28] w-[50%]">
              <Image
                src="/banner4.png"
                width={150}
                height={200}
                className="ml-auto"
              />
              <div>
                <p className="text-[#D2D5DA]">04 —</p>
                <p className="text-2xl font-medium mt-2">Earn your money</p>
              </div>
            </div>
          </div>
        </div>
        {/* Types of Benefits */}
      </div>
      {/* Every Transactions */}
    </main>
  );
}
