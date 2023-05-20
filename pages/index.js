import { LeftSection } from "../components/left-section";
import { RightSection } from "../components/right-section";

export default function Home() {
  return (
    <div className="flex bg-[#141417] h-[100vh]">
      <LeftSection />
      <RightSection />
    </div>
  );
}
