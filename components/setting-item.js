export function SettingItem(p) {
  return (
    <div className="flex gap-4 ">
      <input type="checkbox" value="" />
      <p className="text-[11px] font-semibold leading-[11px] text-white">
        {p.title}
      </p>
    </div>
  );
}
