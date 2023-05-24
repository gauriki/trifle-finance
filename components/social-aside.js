import { LatestNews } from "./latest-news";
import { LeaderBox } from "./leader-box";
import { SponserItem } from "./sponser-item";
import { TrendBox } from "./trend-box";

export function SocialAside() {
  return (
    <aside className="">
      <div className="grid gap-4 grid-cols-2 mt-20">
        <div className="bg-[#252525] p-4 rounded-[6px]">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[16px] leading-4 text-white">
              LEADERBOARD
            </h1>
            <div className="flex gap-3">
              <select
                name=""
                id=""
                className="bg-[#1C1C1C] rounded-[4px] text-white px-3 py-1"
              >
                <option value="">BSC</option>
              </select>
              <select
                name=""
                id=""
                className="bg-[#1C1C1C] rounded-[4px] text-white px-3 py-1"
              >
                <option value="">24 Hour</option>
              </select>
            </div>
          </div>
          <div className=" flex flex-col mt-6">
            <LeaderBox
              name="PancakeGuru"
              img="./images/logo9.png"
              group1="./images/group1.png"
              group2="./images/group2.png"
              group3="./images/group3.png"
              number={1}
              percentage={25.15}
            />
            <LeaderBox
              name="Investdex"
              img="./images/logo10.png"
              group1="./images/group1.png"
              group3="./images/group3.png"
              number={2}
              percentage={25.15}
            />
            <LeaderBox
              name="PancakeGuru"
              img="./images/logo11.png"
              group1="./images/group1.png"
              group3="./images/group3.png"
              number={3}
              percentage={25.15}
            />
            <LeaderBox
              name="Investdex"
              img="./images/logo9.png"
              group1="./images/group1.png"
              group2="./images/group2.png"
              group3="./images/group3.png"
              number={4}
              percentage={25.15}
            />
            <LeaderBox
              name="DexGuru"
              img="./images/logo10.png"
              group1="./images/group1.png"
              group3="./images/group3.png"
              number={5}
              percentage={25.15}
            />
            <LeaderBox
              name="Investdex"
              img="./images/logo11.png"
              group1="./images/group1.png"
              group3="./images/group3.png"
              number={6}
              percentage={25.15}
            />
            <LeaderBox
              name="DexGuru"
              img="./images/logo9.png"
              group1="./images/group1.png"
              group3="./images/group3.png"
              number={7}
              percentage={25.15}
            />
            <LeaderBox
              name="Investdex"
              img="./images/logo11.png"
              group1="./images/group1.png"
              group3="./images/group3.png"
              number={8}
              percentage={25.15}
            />
            <LeaderBox
              name="PancakeGuru"
              img="./images/logo9.png"
              group1="./images/group1.png"
              group2="./images/group2.png"
              group3="./images/group3.png"
              number={9}
              percentage={25.15}
            />
            <LeaderBox
              name="DexGuru"
              img="./images/logo10.png"
              group1="./images/group1.png"
              group3="./images/group3.png"
              number={10}
              percentage={25.15}
            />
          </div>
        </div>
        <div className="bg-[#252525] p-4 rounded-[6px]">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[16px] leading-4 text-white">
              TRENDING
            </h1>
            <div className="flex gap-3">
              <select
                name=""
                id=""
                className="bg-[#1C1C1C] rounded-[4px] text-white px-3 py-1"
              >
                <option value="">BSC</option>
              </select>
              <select
                name=""
                id=""
                className="bg-[#1C1C1C] rounded-[4px] text-white px-3 py-1"
              >
                <option value="">24 Hour</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <TrendBox
              name="ASHIB"
              number={1}
              percentage={6.19}
              price={0.01994693}
            />
            <TrendBox
              name="FLOKI"
              number={2}
              percentage={33.34}
              price={0.00025119}
            />
            <TrendBox
              name="AVX"
              number={3}
              percentage={-1.24}
              price={0.00044341}
            />
            <TrendBox
              name="ZDC"
              number={4}
              percentage={-12.24}
              price={0.19402209}
            />
            <TrendBox
              name="lilfloki"
              number={5}
              percentage={+11.32}
              price={0.000603}
            />
            <TrendBox
              name="EverETH"
              number={6}
              percentage={+3.11}
              price={0.000679}
            />
            <TrendBox
              name="FALCX"
              number={7}
              percentage={+3.11}
              price={0.00001627}
            />
            <TrendBox
              name="PETS"
              number={8}
              percentage={+3.11}
              price={0.00001535}
            />
            <TrendBox
              name="AVN"
              number={9}
              percentage={-2.11}
              price={0.26721218}
            />
            <TrendBox
              name="POO"
              number={10}
              percentage={-2.11}
              price={0.01481465}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full my-2 ">
          <img src="./images/diamond.png" alt="" className="w-full" />
          <p className="text-[#9382FF] text-sm font-semibold pt-5">
            Collect Diamonds
          </p>
          <p className="text-[#A0A0A0] text-xs font-semibold">
            Collect Diamonds and get NFTs
          </p>
        </div>
        <div className="flex justify-center w-full flex-col my-2">
          <img src="./images/multigroup.png" alt="" className="w-full" />
          <p className="text-[#9382FF] text-sm font-semibold pt-5">
            Token Airdrop
          </p>
          <p className="text-[#A0A0A0] text-xs font-semibold">
            Join Automata $50K Token Airdrop
          </p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 mt-8">
        <div className="bg-[#252525] p-4 rounded-[6px]">
          <div className="flex gap-1">
            <img src="./images/group4.png" alt="" />
            <p className="text-white text-sm font-semibold">
              SPONSORED PROJECTS
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <SponserItem
              image="./images/image1.png"
              price={25.26}
              percentage={-2.15}
              title="REPRESENT TOKEN"
              text="REPRESENT exists as the ultimate governance protocol serving to empower you by amplifying your voice."
            />
            <SponserItem
              image="./images/image2.png"
              price={25.26}
              percentage={+2.15}
              title="TOSDIS"
              text="The One Stop Defi Interoperable Solution (TosDis) powered with Liquid Staking."
            />
            <SponserItem
              image="./images/group2.png"
              price={25.26}
              percentage={+12.15}
              title="POLYGON"
              text="Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core.."
            />
            <SponserItem
              image="./images/image1.png"
              price={25.26}
              percentage={-2.15}
              title="REPRESENT TOKEN"
            />
            <SponserItem
              image="./images/image2.png"
              price={25.26}
              percentage={+2.15}
              title="TOSDIS"
              text="The One Stop Defi Interoperable Solution (TosDis) powered with Liquid Staking."
            />
            <SponserItem
              image="./images/group2.png"
              price={25.26}
              percentage={+12.15}
              title="POLYGON"
              text="Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core.."
            />
            <SponserItem
              image="./images/image1.png"
              price={25.26}
              percentage={-2.15}
              title="REPRESENT TOKEN"
              text="REPRESENT exists as the ultimate governance protocol serving to empower you by amplifying your voice."
            />
          </div>
        </div>
        <div className="bg-[#252525] p-4 rounded-[6px]">
          <div className="flex justify-between">
            <div className="flex gap-1">
              <img src="./images/group4.png" alt="" />
              <p className="text-white text-sm font-semibold w-full">
                LATEST NEWS
              </p>
            </div>
            <div className="text-[#7B78FF] underline">view all</div>
          </div>
          <LatestNews
            statement="One of the major threats to businesses online, not only the crypto industry, is cybercriminals’ attacks. Even though the..."
            hack="DeFi Hack: Vee Finance Losses $35 Million To Hackers  Following Mainnet Launch"
            tag="NEWS BTC"
            time="11 hours"
          />
          <LatestNews
            statement="One of the major threats to businesses online, not only the crypto industry, is cybercriminals’ attacks. Even though the..."
            hack="DeFi Hack: Vee Finance Losses $35 Million To Hackers  Following Mainnet Launch"
            tag="NEWS BTC"
            time="11 hours"
          />
          <LatestNews
            statement="One of the major threats to businesses online, not only the crypto industry, is cybercriminals’ attacks. Even though the..."
            hack="DeFi Hack: Vee Finance Losses $35 Million To Hackers  Following Mainnet Launch"
            tag="NEWS BTC"
            time="11 hours"
          />
        </div>
      </div>
      <img src="./images/image3.png" alt="" className="w-full h-auto my-3" />
      <div className="flex w-full gap-4">
        <div className="w-full h-auto ">
          <img src="./images/image4.png" alt="" className="w-full h-auto " />
          <p className="text-[#9382FF] text-[16px] font-semibold pt-2">
            Learn & Earn
          </p>
          <p className="text-[#A0A0A0] text-[16px] font-semibold">
            Learn about MARS ecosystem and earn
          </p>
        </div>
        <div className="w-full h-auto ">
          <img src="./images/image5.png" alt="" className="w-full h-auto " />
          <p className="text-[#9382FF] text-[16px] font-semibold pt-2">
            CMC Influencer
          </p>
          <p className="text-[#A0A0A0] text-[16px] font-semibold">
            Become our influencer and earn!
          </p>
        </div>
      </div>
    </aside>
  );
}
