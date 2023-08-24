import MainCards from "@/components/Dashboard/MainCards";
import LandingHero from "@/components/Landing/LandingHero";
import LandingNavbar from "@/components/Navigation/LandingNavbar";

export default function Home() {
  return (
    // <div className="w-screen h-screen">
    //   <Navbar />
    //   <MainCards />
    // </div>
    <div className="h-full ">
      <LandingHero />
      {/* <LandingContent /> */}
      <MainCards />
    </div>
  );
}
