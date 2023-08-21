import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const User: any = await getCurrentUser();
    const body = await req.json();
    const { messages } = body;
    if (!User) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI Api is not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Message is required", { status: 400 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });
    return new NextResponse(JSON.stringify(response.choices[0].message));
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
