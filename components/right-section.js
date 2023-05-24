import { Aside } from "./aside";
import { Main } from "./main";

export function RightSection() {
  return (
    <div className="grid grid-cols-[6.5fr_3.5fr] gap-4 py-6">
      <Main />
      <Aside />
    </div>
  );
}
