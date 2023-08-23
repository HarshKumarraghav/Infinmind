import React from "react";
import { ToolsData } from "../../../utils/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const MainCards = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-4 px-4 py-4">
      {ToolsData.map((tool) => (
        <Card className="w-96 h-96">
          <CardHeader className="flex justify-between flex-row items-center border-b ">
            <Link href={tool.route}>
              <CardTitle className="flex items-center gap-x-2">
                <div className="p-2 w-fit rounded-md bg-primary/20">
                  {React.createElement(tool?.icon, {
                    className: "w-6 h-6 text-primary",
                  })}
                </div>
                <p>{tool.name}</p>
              </CardTitle>
            </Link>
            <CardDescription>
              <Link href={tool.route}>
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              width={100}
              height={100}
              src={tool.image}
              alt="tool"
              className="w-full h-36 my-2"
            />
            <p>{tool.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MainCards;
