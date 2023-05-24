import styles from "../styles/components/header.module.css";

export function Header(p) {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-10 items-center">
        <h1 className="text-white font-semibold text-[24px] leading-[24px]">
          {p.name}
        </h1>
        <div className="w-[443px] h-[38px] bg-[#1E1E1E] flex items-center rounded-md p-[4px] pl-4">
          <input
            type="text"
            placeholder="Search for tokens,pools and vaults "
            className="w-full bg-transparent font-normal text-[12px] h-full text-white leading-[14px]"
          />
          <button className={styles.bg_btn}>SEARCH</button>
        </div>
        <select
          name=""
          id=""
          className="bg-[#1E1E1E] text-white text-[12px] font-semibold px-2 py-1 rounded"
        >
          <option value="USD">USD</option>
        </select>
      </div>
      <div>
        <select
          name=""
          id=""
          className="bg-[#252525] text-[12px] font-semibold text-white"
        >
          <option value="">Jane Fox</option>
        </select>
      </div>
    </header>
  );
}
