export function SponserItem(p) {
  return (
    <div className="flex items-start gap-3">
      <img className="w-8 h-8" src={p.image} alt="" />
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2 w-full">
            <p className="text-white font-semibold text-sm">{p.title}</p>
            <img src="./images/binancedex.png" alt="" />
          </div>
          <p className="text-sm text-white ">{p.price}</p>
        </div>
        <div className="flex justify-between w-full pb-1">
          <div className="flex gap-2 items-center">
            <p className="text-[#F3BA2F] text-[10px]">REP</p>
            <img src="./images/vector2.png" alt="" className="w-3 h-3" />
            <img src="./images/vector3.png" alt="" className="w-3 h-3" />
            <img src="./images/vector4.png" alt="" className="w-3 h-3" />
          </div>
          <p
            className={
              (p.percentage === -2.15 ? "text-red-700" : "text-[#83FFAD]") +
              " text-[9px]"
            }
          >
            {p.percentage}%
          </p>
        </div>
        <p className="text-[#BDBDBD] text-[10px] py-2">{p.text}</p>
      </div>
    </div>
  );
}
