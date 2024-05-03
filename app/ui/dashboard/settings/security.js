import Image from "next/image";

export default function Security() {
  return (
    <div className="flex gap-x-3 items-center w-2/3 justify-between">
      <div className="flex gap-x-3 items-center">
        <Image src="/security-keys.png" width={45} height={45} />
        <div>
          <p className="text-lg font-semibold">Password Reset</p>
          <p className="text-sm text-[#4B5563]">Change your password anytime</p>
        </div>
      </div>

      <button className="text-[#2563EB] font-medium">Change Password</button>
    </div>
  );
}
