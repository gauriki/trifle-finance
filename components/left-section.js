export function LeftSection() {
  return (
    <div className=" w-[80px] border-r-2 border-[#2a2a2a8f] flex flex-col items-center justify-between">
      <div>
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[50px] h-[50px] mb-8 mt-2 "
        />
        <div className="flex flex-col  items-center  gap-10">
          <img
            src="/images/logo2.png"
            alt="dash"
            className="w-[25px]  h-[25px]"
          />
          <img
            src="/images/logo3.png"
            alt="payment"
            className="w-[25px]  h-[25px]"
          />
          <img
            src="/images/logo4.png"
            alt="chat"
            className="w-[25px]  h-[25px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center pb-8">
        <img src="/images/logo5.png" alt="" />
        <img src="/images/logo6.png" alt="" />
      </div>
    </div>
  );
}
