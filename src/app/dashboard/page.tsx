import MainCards from "@/components/Dashboard/MainCards";
import Header from "@/components/Header/Header";
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
      <div className="w-full h-56  justify-center  flex items-center flex-col px-4 text-center gap-y-4">
        <h1 className="font-extrabold text-2xl md:text-4xl">
          Pioneering the Future, One Algorithm at a Time.
        </h1>
        <p className="text-gray-500 text-sm md:text-lg">
          Engage with Genius: Embrace the Unrivaled Potential of AI
          Conversations.
        </p>
      </div>
      <MainCards />
    </div>
  );
};

export default page;
