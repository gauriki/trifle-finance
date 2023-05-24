export function TrendBox(p) {
  return (
    <div className=" bg-[#1C1C1C] flex justify-between items-center w-full py-2 px-4 my-1  rounded ">
      <div className="flex items-center">
        <h1
          className={
            (p.number === 1 ? "text-[#F3BA2F]" : "text-white") + " py-3"
          }
        >
          #{p.number}
        </h1>
        <p className="text-[#F3BA2F] text-sm font-semibold ">
          {p.name}
          <span className="text-[#83FFAD] pl-2">({p.percentage}%)</span>
        </p>
      </div>
      <div className="text-white ">${p.price}</div>
    </div>
  );
}
