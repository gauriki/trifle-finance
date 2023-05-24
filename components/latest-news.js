export function LatestNews(p) {
  return (
    <div className="w-full bg-[#1C1C1C] p-4">
      <p className="text-[#8986FF] text-[18px] py-2  font-semibold leading-6">
        {p.hack}
      </p>
      <p className="text-white text-sm">{p.statement}</p>
      <div className="flex justify-between py-3 items-center">
        <p className="bg-[#FFD3B3] rounded-[10px] text-[#A34D0A] text-xs font-semibold flex items-center py-2 px-5">
          {p.tag}
        </p>
        <p className="text-[#63688E] text-xs font-bold">{p.time}ago</p>
      </div>
    </div>
  );
}
