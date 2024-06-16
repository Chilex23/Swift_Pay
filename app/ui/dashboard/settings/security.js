import Image from "next/image";

export default function Security() {
  return (
    <div className="flex flex-col gap-3 items-center w-[75%] md:w-2/3 justify-between">
      <div className="flex gap-x-3 items-center">
        <Image src="/security-keys.png" width={45} height={45} />
        <div>
          <p className="text-lg font-semibold">Password Reset</p>
          <p className="text-sm text-[#4B5563]">Change your password anytime</p>
        </div>
      </div>

      <button
        className="text-[#2563EB] font-medium"
        onClick={() => {
          document.getElementById("my_modal_5").showModal();
        }}
      >
        Change Password
      </button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box py-10">
          <h3 className="font-bold text-2xl">Change Password</h3>
          <div className="modal-action block mt-2">
            <form method="dialog">
              <div>
                <label id="bank" className="text-sm font-medium">
                  Current Password
                </label>
                <input
                  name="bank"
                  type="text"
                  placeholder="Enter Password"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>
              <div className="mt-2">
                <label id="account-number" className="text-sm font-medium">
                  New Password
                </label>
                <input
                  name="account-number"
                  type="text"
                  placeholder="Enter new password"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>
              <div className="mt-2">
                <label id="account-name" className="text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  name="account-name"
                  type="text"
                  placeholder="Confirm password"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>
              
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mt-4 w-full text-[#6D7280] font-semibold bg-[#E5E7EB]">
                Change Password
              </button>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </div>
  );
}
