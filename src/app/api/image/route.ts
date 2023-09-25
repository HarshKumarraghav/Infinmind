import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subcription";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const User: any = await getCurrentUser();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "256x256" } = body;
    if (!User) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI Api is not configured", { status: 500 });
    }
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isPro) {
      await incrementApiLimit();
    }
    return new NextResponse(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
