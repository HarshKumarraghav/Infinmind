"use client";
import { Heading } from "@/components/Heading/Heading";
import React, { useState } from "react";
import axios from "axios";
import { BsChatLeftDots } from "react-icons/bs";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BiBot, BiUser } from "react-icons/bi";
import { EveryTask } from "@/components/UIStates/EveryTask";
function page() {
  const Router = useRouter();
  const [messages, setMessages] = useState<any>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((prev: any) => [...prev, response.data, userMessage]);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      Router.refresh();
    }
  };
  return (
    <div
      className="w-full"
      style={{
        background:
          "radial-gradient(400px at 351px 297px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <Heading
        title="Conversation"
        description="Engage with infinite possibilities: Embrace the Unrivaled Potential of AI Conversations"
        icon={BsChatLeftDots}
        iconColor="text-violet-500"
        bgColor="bg-voilet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none shadow-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Write a story about a time-traveler on a mission to save the future..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full text-white">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          <div className="flex flex-col-reverse gap-y-4">
            {isLoading && <EveryTask label="Loading...." />}

            {messages.length === 0 && !isLoading && (
              <EveryTask label="No conversation started." />
            )}
            {messages.map((message: any) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-primary/20 border border-black/10"
                    : "bg-primary-foreground border"
                )}
              >
                {message.role === "user" ? (
                  <div className="p-3 rounded-full bg-primary text-white">
                    <BiUser size={30} />
                  </div>
                ) : (
                  <div className="p-3 rounded-full bg-primary text-white">
                    <BiBot size={30} />
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
