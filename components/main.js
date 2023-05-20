import styles from "../styles/components/main.module.css";
import { SettingItem } from "./setting-item";

export function Main() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex gap-4">
        <div className="bg-[#252525] px-24 py-4 rounded-md">
          <p className="text-[#7D7D7D] text-[12px] font-bold leading-[12px] my-3">
            TOTAL BALANCE
          </p>
          <h2 className="text-white text-[20px] font-semibold leading-[20px]">
            $25,651.25
          </h2>
        </div>
        <div className="bg-[#252525] px-24 py-4 rounded-md">
          <p className="text-[#7D7D7D] text-[12px] font-bold leading-[12px] my-3">
            LAST 24 HOURS
          </p>
          <h2 className="text-[#83FFAD] text-[20px] font-semibold leading-[20px]">
            +2,156.25
          </h2>
        </div>
        <div className="bg-[#252525] px-24 py-4 rounded-md">
          <p className="text-[#7D7D7D] text-[12px] font-bold leading-[12px] my-3">
            LAST 7 DAYS
          </p>
          <h2 className="text-[#FF6969] text-[20px] font-semibold leading-[20px]">
            -4,551.74
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-5 bg-[#303030] gap-8 my-10 py-0 rounded-r mx-10">
        <button className={styles.button}>NOTIFICATION</button>
        <button className="text-white text-[10px] font-bold leading-[10px] ">
          SOCIAL SETTINGS
        </button>
        <button className="text-white text-[10px] font-bold leading-[10px] ">
          SUBSCRIPTION
        </button>
        <button className="text-white text-[10px] font-bold leading-[10px] ">
          REFERRALS
        </button>
        <button className="text-[#F6841B] text-[10px] font-bold leading-[10px] ">
          LOGOUT
        </button>
      </div>
      <h1 className="text-[#8E8BFF] text-[16px] font-semobold leading-[16px] text-center">
        NOTIFICATION SETTING
      </h1>
      <p className="text-white text-[12px] font-normal leading-[12px] mt-4 text-center">
        Please change the notification setting for alerts that you will recive.
      </p>

      <div className="flex mt-10 flex-col  gap-6">
        <SettingItem title="Push Notification" />
        <SettingItem title="Telegram Alert" />
        <SettingItem title="Social Notification" />
        <SettingItem title="Network Status Notification" />
        <SettingItem title=" Promotions and Marketing Notification" />
      </div>
      <button className={styles.button1}>SAVE SETTINGS</button>
    </main>
  );
}
