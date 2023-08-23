"use client";
import { Heading } from "@/components/Heading/Heading";
import React, { useState } from "react";
import axios from "axios";
import { BsChatLeftDots, BsMusicNoteBeamed } from "react-icons/bs";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { EveryTask } from "@/components/UIStates/EveryTask";
import { toast } from "@/hooks/use-toast";
function MusicPage() {
  const Router = useRouter();
  const [music, setMusic] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values);
      console.log(response);

      setMusic(response.data.audio);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        // proModal.onOpen();
      } else {
        toast({
          title: "something went wrong",
          description: "Invalid openai credentials",
        });
      }
    } finally {
      Router.refresh();
    }
  };
  return (
    <div
      className="w-full min-h-[calc(100vh-8rem)]"
      style={{
        background:
          "radial-gradient(400px at 351px 297px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <Heading
        title="Music Generation"
        description="Engage in the creative process: Embrace the Unrivaled Potential of AI Music Generation"
        icon={BsMusicNoteBeamed}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
                        placeholder="Music like `Your lies in April`"
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

            {!music && !isLoading && (
              <EveryTask label="no music generated yet..." />
            )}
            {music && (
              <audio controls className="w-full mt-8">
                <source src={music} />
              </audio>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
