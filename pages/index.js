import { Header } from "../components/header";
import { LeftSection } from "../components/left-section";
import { RightSection } from "../components/right-section";

export default function Home() {
  return (
    <div className="flex bg-[#141417] h-[100vh]">
      <LeftSection />
      <div className="flex-1 overflow-y-auto py-6 px-6">
        <Header name="PROFILE" />
        <RightSection />
      </div>
    </div>
  );
}
