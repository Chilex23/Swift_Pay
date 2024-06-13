const DepositFundsForm = ({ setStepFunc = () => {} }) => {
  return (
    <div className="w-1/3 px-6 py-3 mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center">
        Fund your account via crypto
      </h2>
      <p className="text-[#667085] text-sm text-center">
        Top up your account balance
      </p>
      <div className="bg-white px-5 py-3 mt-2 rounded-2xl">
        <div className="w-full border-2 border-[#E5E7EB] mt-6 flex justify-between items-center h-12 px-4 py-3 rounded-md text-sm bg-[#E5E7EB] mb-5">
          <p>Available Balance</p>
          <p>
            <span className="text-lg font-semibold">$1000</span> = 0.5 BTC
          </p>
        </div>
        {/* Form */}
        <form>
          <div>
            <label id="bank" className="text-sm font-medium">
              Choose payment method
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Select Payment Method
              </option>
              <option>Bitcoin</option>
              <option>Solana</option>
            </select>
          </div>
          <div className="mt-2">
            <label id="account-number" className="text-sm font-medium">
              Enter Amount to withdraw
            </label>
            <input
              name="account-number"
              type="text"
              placeholder="Enter Amount"
              className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <button
            className="btn mt-8 w-full text-white font-semibold bg-[#6366F1]"
            onClick={() => {
              setStepFunc(2);
            }}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositFundsForm;
