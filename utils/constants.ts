import {
  BsCameraVideo,
  BsChatLeftDots,
  BsImages,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FaCode } from "react-icons/fa";

export const MAX_FREE_COUNTS = 5;
export const ToolsData = [
  {
    id: 1,
    name: "Conversation Chatbot",
    route: "/dashboard/conversation",
    icon: BsChatLeftDots,
    image: "/Images/tools/chatbot.svg",
    description:
      "A tool that enables automated conversations with users, simulating human-like interactions to answer questions, provide information, and assist with various tasks.",
  },
  {
    id: 2,
    name: "Music Generation",
    route: "/dashboard/music",
    icon: BsMusicNoteBeamed,
    image: "/Images/tools/music.svg",
    description:
      "A tool that uses AI to compose and generate music, allowing users to create original musical pieces, melodies, and compositions.",
  },
  {
    id: 3,
    name: "Image Generation",
    route: "/dashboard/image",
    icon: BsImages,
    image: "/Images/tools/image.svg",
    description:
      "An AI-powered tool for creating images, either from scratch or by transforming existing images, using advanced image generation techniques.",
  },
  {
    id: 4,
    name: "Video Generation",
    route: "/dashboard/video",
    image: "/Images/tools/video.svg",
    icon: BsCameraVideo,
    description:
      "A tool that employs AI to generate videos, either by creating entirely new video content or by modifying and enhancing existing videos.",
  },
  {
    id: 5,
    name: "Code Generation",
    route: "/dashboard/code",
    image: "/Images/tools/code.svg",
    icon: FaCode,
    description:
      "An AI tool designed to assist with coding tasks, providing suggestions, auto-completions, and even generating code snippets based on user input.",
  },
];
