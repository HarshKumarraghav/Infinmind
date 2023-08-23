import { Sidebar } from "@/components/Navigation/Sidebar";
import Dashheader from "@/components/Navigation/Dashheader";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subcription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  // const isPro = await checkSubscription();
  const isPro = false;
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 ">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Dashheader />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
