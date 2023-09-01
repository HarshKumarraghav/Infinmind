import MainCards from "@/components/Dashboard/MainCards";

import LandingHero from "@/components/Landing/LandingHero";
import LandingSubHero from "@/components/Landing/LandingSubHero";

export default function Home() {
  return (
    <div className="h-full ">
      <LandingHero />
      <LandingSubHero />
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          InfiniMind.ai
        </span>{" "}
        Demo Video
      </h1>
      <div className="bg-primary p-8 m-8 rounded-3xl">
        <video
          className="shadow-2xl rounded-3xl"
          controls
          src="https://github.com/HarshKumarraghav/InfiniMind.ai/assets/72187191/ae1ebb65-6b3a-40b0-9c03-849142acec92"
        />
      </div>
      <MainCards />
    </div>
  );
}
