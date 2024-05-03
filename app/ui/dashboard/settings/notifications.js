import Image from "next/image";

export default function Notifications() {
  return (
    <>
      <div className="flex gap-x-3 items-center w-2/3 justify-between">
        <div className="flex gap-x-3 items-center">
          <div>
            <p className="font-medium">Profit Alert</p>
            <p className="text-sm text-[#4B5563]">
              Notify me via email when i get profit
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          className="toggle [--tglbg:#22C55E] bg-white hover:bg-white toggle-lg"
          checked
        />
      </div>
      <div className="flex gap-x-3 items-center w-2/3 justify-between mt-10">
        <div className="flex gap-x-3 items-center">
          <div>
            <p className="font-medium">Investment Plan Alert</p>
            <p className="text-sm text-[#4B5563]">
              Notify me via email when my investment plan expires
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          className="toggle [--tglbg:#22C55E] bg-white hover:bg-white toggle-lg"
          checked
        />
      </div>
      <div className="flex gap-x-3 items-center w-2/3 justify-between mt-10">
        <div className="flex gap-x-3 items-center">
          <div>
            <p className="font-medium">News and Offers Alert</p>
            <p className="text-sm text-[#4B5563]">
              Notify me via email when there are new offers and news
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          className="toggle [--tglbg:#22C55E] bg-white hover:bg-white toggle-lg"
          checked
        />
      </div>
    </>
  );
}
