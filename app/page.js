import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="pb-10 relative z-50">
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
            Let us get started
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
          <Image
            src="/crypto-group.png"
            alt="crypto coins"
            height={600}
            width={600}
          />
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
        Our vision is to provide access to the world markets easier, faster and
        at a lower cost than what exists in the market today.
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
            <Image
              src="/Mockup-Phone.png"
              width={350}
              height={300}
              alt="Mockup of a phone"
            />
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
                alt="crypto coin"
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
                alt="crypto coin"
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
                alt="crypto coin"
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
                alt="crypto coin"
              />
              <div>
                <p className="text-[#D2D5DA]">04 —</p>
                <p className="text-2xl font-medium mt-2">Earn your money</p>
              </div>
            </div>
          </div>
        </div>
        {/* Types of Benefits for the site */}
      </div>
      {/* Every Transactions */}
      {/* Reliable Opportunities */}
      <div className="w-[95%] bg-gradient-to-r from-[#BFD6FA] to-[#E8F0FC] mt-16 mx-auto rounded-lg px-20 py-24 flex justify-between relative z-50">
        <div className="w-[45%]">
          <p className="text-4xl font-bold">
            Reliability, Productive, Opportunities
          </p>
          <p className="text-lg mt-10 text-[#4B5563]">
            At SwiftEarnPrime, we see investing differently. Today's financial
            system is complex, exclusive and expensive - making it hard for the
            typical person to start investing.
          </p>
          <p className="text-lg mt-6 text-[#4B5563]">
            So, we're building a platform without digital walls and complex
            barriers. A platform that empowers you to see new possibilities for
            your money - and helps make them a reality.
          </p>
          <div className="text-[#2563EB] font-medium mt-12 flex gap-x-2 items-center">
            <span>Learn More</span>
            <ArrowRightCircleIcon className="w-6" />
          </div>
        </div>
        <div>
          <Image
            src="/cover-photo.png"
            width={400}
            height={400}
            alt="A man talking to a woman"
            className="rounded-lg"
          />
        </div>
        <Image
          src="/Euro-Vector.png"
          width={100}
          height={100}
          alt="Euro sign vector"
          className="absolute bottom-0 right-[34rem]"
        />
        <Image
          src="/Dollar-Vector.png"
          width={50}
          height={50}
          alt="Dollar sign vector"
          className="absolute top-0 left-[10rem]"
        />
      </div>
      {/* Reliable Opportunities */}
      <h2 className="text-4xl font-bold text-center mt-20">
        Market Closed? Not Anymore
      </h2>
      <p className="text-[#4B5563] text-center text-lg mt-5">
        Invest whenever you want, even when the traditional stock market is
        closed.
      </p>
      <div className="w-full mt-16">
        <Image
          src="/Market-Chart.png"
          width={1200}
          height={400}
          className="ml-16"
          alt="market chart"
        />
      </div>
      {/* News and Analysis */}
      <h2 className="text-4xl font-bold mt-16 ml-16">News and Analysis</h2>
      <div className="grid grid-cols-3 grid-rows-1 mx-16 mt-10 gap-x-8">
        {/* Card 1 */}
        <div>
          <div>
            <Image
              src="/Candle-Chart.png"
              width={400}
              height={300}
              alt="Candle Chart"
              className="mb-3"
            />
          </div>
          <p className="text-lg font-bold">
            US-German yield spreads suggest higher Dollar Index
          </p>
          <p className="mt-5 text-sm">
            It is reasonably well appreciated that the biggest comp-onent of the
            dollar index DXY is the euro. Therefore when tryin…
          </p>
          <p className="text-[#6A6D78] text-sm mt-4">Updated 18 hours</p>
        </div>
        {/* Card 1 */}
        {/* Card 2 */}
        <div>
          <div>
            <Image
              src="/Candle-Chart2.png"
              width={400}
              height={300}
              alt="Candle Chart"
              className="mb-3"
            />
          </div>
          <p className="text-lg font-bold">
            10 yr yield targets are being met into 4.70plus.
          </p>
          <p className="mt-5 text-sm">
            Bonds are ready for a nice Short term rally be long TLT and do NOT
            be short stocks
          </p>
          <p className="text-[#6A6D78] text-sm mt-4">Updated April 18</p>
        </div>
        {/* Card 2 */}
        {/* Card 3 */}
        <div>
          <div>
            <Image
              src="/Candle-Chart3.png"
              width={400}
              height={300}
              alt="Candle Chart"
              className="mb-3"
            />
          </div>
          <p className="text-lg font-bold">SPY: Week of April 15</p>
          <p className="mt-5 text-sm">
            Last week I just did a longer timeframe update. I am going to
            continue with the larger timeframe as the focus but will also give
            the shorter timeframe levels for next week. You…
          </p>
          <p className="text-[#6A6D78] text-sm mt-4">Updated 4 hours</p>
        </div>
        {/* Card 3 */}
      </div>
      {/* News and Analysis */}
      {/* Users Carousel */}
      <div className="carousel flex mt-10 w-[95%] mx-auto">
        <div
          id="slide1"
          className="carousel-item relative w-full bg-[#06090E] text-white py-24 rounded-xl"
        >
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-4xl font-bold">What do our customers Say?</p>
            <div className="mt-8 w-[70%] shadow-xl">
              <p className="text-[#E5E7EB] text-center">
                This platform is amazing, really wish I have a lot more money I
                would invest more. The customer support response is fast. would
                recommend this platform to anybody.
              </p>
              <div className="flex mt-6 justify-center items-center gap-x-3 ">
                <Image src="/avatar2.png" width={50} height={50} alt="avatar" />
                <div>
                  <p className="text-xs text-[#F3F4F6]">Thomas Green</p>
                  <p className="text-xs text-[#F3F4F6]">New York</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              <ChevronLeftIcon className="w-6" />
            </a>
            <a href="#slide2" className="btn btn-circle">
              <ChevronRightIcon className="w-6" />
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full bg-[#06090E] text-white py-24 rounded-xl"
        >
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-4xl font-bold">What do our customers Say?</p>
            <div className="mt-8 w-[70%] shadow-xl">
              <p className="text-[#E5E7EB] text-center">
                Last week I just did a longer timeframe update. I am going to
                continue with the larger timeframe as the focus but will also
                give the shorter timeframe levels for next week. You…
              </p>
              <div className="flex mt-6 justify-center items-center gap-x-3 ">
                <Image src="/avatar2.png" width={50} height={50} alt="avatar" />
                <div>
                  <p className="text-xs text-[#F3F4F6]">Seth Meyers</p>
                  <p className="text-xs text-[#F3F4F6]">New York</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              <ChevronLeftIcon className="w-6" />
            </a>
            <a href="#slide1" className="btn btn-circle">
              <ChevronRightIcon className="w-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Users Carousel */}
    </main>
  );
}
