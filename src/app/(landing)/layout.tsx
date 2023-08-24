import Footer from "@/components/Footer/Footer";
import LandingNavbar from "@/components/Navigation/LandingNavbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="h-full  overflow-auto"
      style={{
        background:
          "radial-gradient(600px at 431px 777px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <LandingNavbar />
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
      <Footer />
    </main>
  );
};

export default LandingLayout;
