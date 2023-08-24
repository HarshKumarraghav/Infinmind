import MainCards from "@/components/Dashboard/MainCards";
import LandingSubHero from "@/components/Landing/LandingSubHero";
import Header from "@/components/Navigation/Header";
const page = () => {
  return (
    <div
      className="w-screen"
      style={{
        background:
          "radial-gradient(600px at 431px 577px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <Header />
      <LandingSubHero />
      <MainCards />
    </div>
  );
};

export default page;
