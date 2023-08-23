"use client";
import * as z from "zod";
import axios from "axios";
import { cn } from "@/lib/utils";
import { FaCode } from "react-icons/fa";
import React, { useState } from "react";
import { formSchema } from "./constants";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { BiBot, BiUser } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heading } from "@/components/Heading/Heading";
import { EveryTask } from "@/components/UIStates/EveryTask";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
function CodePage() {
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
      const response = await axios.post("/api/code", {
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
        title="Code Generation"
        description="Explore Endless Horizons: Embrace the Unmatched Power of AI Conversations for Code Generation"
        icon={FaCode}
        iconColor="text-primary"
        bgColor="bg-primary/10"
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
                        placeholder="factorial function in Javascript"
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
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodePage;
