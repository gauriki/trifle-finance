import { Header } from "../components/header";
import { LeftSection } from "../components/left-section";
import { SocialRightSection } from "../components/social-right-section";

export default function Social() {
  return (
    <div className="flex bg-[#141417] h-[100vh]">
      <LeftSection />
      <div className="flex-1 overflow-y-auto py-6 px-6">
        <Header name="SOCIAL" />
        <SocialRightSection />
      </div>
    </div>
  );
}
