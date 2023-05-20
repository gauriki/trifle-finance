import { Aside } from "./aside";
import { Header } from "./header";
import { Main } from "./main";

export function RightSection() {
  return (
    <div className="flex-1 overflow-y-auto py-6 px-6">
      <Header />
      <div className="grid grid-cols-[6.5fr_3.5fr] gap-4 py-6">
        <Main />
        <Aside />
      </div>
    </div>
  );
}
