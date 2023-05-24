import { AiFillHeart } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { RiStarSLine } from "react-icons/ri";
import { PostBox } from "./post-box";

export function SocialMain() {
  return (
    <main className=" flex flex-col ">
      <h1 className="text-[#9382FF] text-[18px] font-semibold text-left py-6">
        POST TO TRIFLE SOCIAL
      </h1>
      <div className="bg-[#1D1D1D] rounded-md w-full">
        <textarea
          className="text-white text-sm w-full border-b border-gray-400 outline-none bg-transparent px-3 pt-3 pb-8"
          placeholder="Share your thoughts,idea and images with the other users on the platform "
        ></textarea>

        <div className="flex gap-6 px-4 py-2">
          <div className="flex text-[#4E4E4E] items-center gap-2">
            <BsImageFill className="h-4 w-4" />
            <p className="text-sm font-semibold">Image</p>
          </div>
          <div className="flex text-[#4E4E4E] items-center gap-2">
            <AiFillHeart className="h-5 w-5" />
            <p className="text-sm font-semibold">NTF</p>
          </div>
          <div className="flex text-[#4E4E4E] items-center gap-2">
            <RiStarSLine className="h-6 w-6" />
            <p className="text-sm font-semibold">Feature</p>
          </div>
        </div>
      </div>
      <PostBox
        images="./images/logo9.png"
        title="DexGuru"
        img="./images/girl.png"
        information="Guys, we are excited to announce the launch on Pancakeswap v2. Please visit  the pancakeswap.info site for more details."
      />
      <PostBox
        images="./images/logo10.png"
        title="InvestDex"
        img="./images/tech.png"
        information="Checkout our latest promo video for promoting Investdex. Promote your products on Trifle Social. "
      />
      <PostBox img="./images/coin.png" images="./images/logo11.png" />
      <PostBox img="./images/nft.png" images="./images/logo9.png" />
    </main>
  );
}
