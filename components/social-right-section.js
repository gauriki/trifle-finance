import { SocialAside } from "./social-aside";
import { SocialMain } from "./social-main";

export function SocialRightSection() {
  return (
    <div className="grid grid-cols-[40fr_60fr] gap-4">
      <SocialMain />
      <SocialAside />
    </div>
  );
}
