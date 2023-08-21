import { Heading } from "@/components/Heading/Heading";
import React from "react";
import { BsChatLeftDots } from "react-icons/bs";
type Props = {};

function page({}: Props) {
  return (
    <div
      className="w-full h-[calc(100vh-3.5rem)]"
      style={{
        background:
          "radial-gradient(600px at 431px 777px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <Heading
        title="Conversation Chatbot"
        description="Engage with infinite possibilities: Embrace the Unrivaled Potential of AI Conversations"
        icon={BsChatLeftDots}
        iconColor="text-violet-500"
        bgColor="bg-voilet-500/10"
      />
    </div>
  );
}

export default page;
