import { AiOutlineCrown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { ImArrowUpRight2 } from "react-icons/im";

export function PostBox(p) {
  return (
    <div className="bg-[rgb(29,29,29)]  pt-4 px-2 mt-4 w-full rounded-lg flex flex-col">
      <div className="flex justify-between">
        <div className="flex ">
          <img src={p.images} className="h-[34px] w-[35px]" alt="" />
          <div className="px-2">
            <p className="text-[18px] font-medium text-white">{p.title}</p>
            <p className="text-xs text-[#939393] ">2 mins ago</p>
          </div>
          <div className="flex">
            <AiOutlineCrown className="bg-[#FFE59A] rounded-full m-2 mt-1" />
            <p className="text-xs text-[#7D7D7D] font-semibold pl-2 mt-1">
              #1 Last 24 Hours
            </p>
          </div>
        </div>
        <BsThreeDots className="text-white h-6 w-10" />
      </div>
      <p className="text-sm text-white py-2"></p>
      <div className="ml-3 mb-2 flex items-center">
        <img src={p.img} alt="" />
      </div>
      <div className="flex gap-2 border-y-2 border-black w-full pl-3 py-2">
        <div className="flex text-[#83FFAD] items-center">
          <HiArrowSmUp className="h-5 w-6" />
          <p>91</p>
        </div>
        <div className="flex text-[#FF9983] items-center">
          <HiArrowSmDown className="h-5 w-6" />
          <p>64</p>
        </div>
        <div className="flex text-[#00ACEA] items-center">
          <FiMessageCircle className="h-5 w-6" />
          <p>25</p>
        </div>
        <div className="flex text-[#7B78FF] items-center">
          <ImArrowUpRight2 className="h-4 w-5" />
          <p>99</p>
        </div>
      </div>

      <div className="px-4 py-2 w-full ">
        <div className="flex justify-between items-center">
          <p className="text-white text-[13px] font-semibold leading-3">
            COMMENTS
          </p>
          <select className="text-[13px] bg-[#252525] text-white px-4 py-1 font-semibold">
            <option value="new">NEW</option>
          </select>
        </div>
        <div className="grid gap-4 grid-rows-2 mt-2">
          <div className="flex flex-col bg-black rounded p-4">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img src="./images/logo10.png" alt="" className="w-8 h-8" />
                <div className="flex flex-col pl-4">
                  <p className="text-[#9382FF] text-sm font-semibold leading-4">
                    DexGuru
                  </p>
                  <p className="text-sm font-normal text-white py-2 ">
                    Excited for the launch of PCS2, let’s get trading!
                  </p>
                </div>
              </div>
              <p className="text-[#737373] text-xs font-normal">10 mins ago</p>
            </div>
          </div>
          <div className="flex flex-col bg-black rounded p-4 ">
            <div className="flex justify-between items-center">
              <div className="flex ">
                <img src="./images/logo11.png" alt="" className="w-8 h-8" />
                <div className="flex flex-col pl-4">
                  <p className="text-[#9382FF] text-sm font-semibold leading-4">
                    Great Product!
                  </p>
                  <p className="text-sm font-normal text-white py-2 ">
                    Excited for the launch of PCS2, let’s get trading!
                  </p>
                </div>
              </div>
              <p className="text-[#737373] text-xs font-normal">3h ago</p>
            </div>
          </div>
        </div>
        <p className="text-[#A0A0A0] text-xs font-semibold underline text-right py-4">
          VIEW ALL
        </p>
      </div>
    </div>
  );
}
