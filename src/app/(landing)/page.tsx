import MainCards from "@/components/Dashboard/MainCards";

import LandingHero from "@/components/Landing/LandingHero";
import LandingSubHero from "@/components/Landing/LandingSubHero";

export default function Home() {
  return (
    <div className="h-full ">
      <LandingHero />
      <LandingSubHero />
      <MainCards />
    </div>
  );
}
