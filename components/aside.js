export function Aside() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="w-[120px] h-[120px] border-[5px] border-[linear-gradient(180deg, #AAC2FF 0%, #BCFFD3 100%)];"></div>

        <h1 className="font-bold text-[26px] leading-7 text-white mt-10 mb-4">
          Crypto Billy
        </h1>
        <p className="text-sm text-white leading-3 mt-2 mb-6">
          0x4AA2f9EC2207d5Ebbcd896CF0172A4F94ef28534
        </p>
        <p className="text-[#FFB066] text-sm">Active Chains</p>
      </div>
      <div className="bg-[#252525] rounded-md flex flex-col p-4 mt-9 w-[324px]">
        <label
          className="text-white text-xs font-semibold pb-2 pt-4"
          For="email"
        >
          Email
        </label>
        <input
          className="text-white text-xs bg-[#1E1E1E] py-2 pl-3 rounded-[6px]"
          type="email"
          placeholder="please enter your email"
          id="email"
        />
        <label
          className="text-white text-xs font-semibold pb-2 pt-4"
          For="name"
        >
          Name
        </label>
        <input
          className="text-white text-xs bg-[#1E1E1E] py-2 pl-3 rounded-[6px]"
          type="text"
          placeholder="please enter your name"
          id="name"
        />
        <label
          className="text-white text-xs font-semibold pb-2 pt-4"
          For="date"
        >
          Date of birth
        </label>
        <input
          className="text-white text-xs bg-[#1E1E1E] py-2 pl-3 rounded-[6px]"
          type="date"
          id="date"
        />
        <label
          className="text-white text-xs font-semibold pb-2 pt-4"
          For="text"
        >
          Biography
        </label>
        <textarea
          className="text-white text-xs bg-[#1E1E1E] py-2 pl-3 rounded-[6px]"
          type="text area"
          placeholder="please enter your biography"
          id="text"
          rows="4"
          cols="50"
        ></textarea>
      </div>
    </div>
  );
}
