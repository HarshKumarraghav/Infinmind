import { checkSubscription } from "@/lib/subcription";
import { SubscriptionButton } from "@/components/SubscriptionButton/SubscriptionButton";
import { Heading } from "@/components/Heading/Heading";
import { AiFillSetting } from "react-icons/ai";
const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={AiFillSetting}
        iconColor="text-primary"
        bgColor="bg-primary/20"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
