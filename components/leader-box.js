export function LeaderBox(p) {
  return (
    <div className=" bg-[#1C1C1C] flex justify-between w-full p-2 my-1  rounded ">
      <div className="flex items-center gap-3">
        <img src={p.img} alt="" />
        <div className="flex  flex-col ">
          <p className="text-white text-sm font-semibold">{p.name}</p>
          <div className="flex gap-2 mt-2">
            <img src={p.group1} alt="" />
            <img src={p.group2} alt="" />
            <img src={p.group3} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className={p.number === 1 ? "text-yellow-500" : "text-white"}>
          #{p.number}
        </h1>
        <h1 className="text-[#83FFAD]">{p.percentage}</h1>
      </div>
    </div>
  );
}
