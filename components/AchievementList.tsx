import React from "react";
import { Acheivement } from "./../interfaces/Achievement.interface";
import Image from "next/image";
import { Card, Box, CardContent, Link, IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const AchievementList = () => {
  const ACHIEVEMENTS: Acheivement[] = [
    {
      title: "Miracal Application",
      description:
        "A native application wrote with Flutter for your fitness journey.",
      img: require("../public/miracal/MiracalLogo.png"),
    },
    {
      title: "CU Sport Complex",
      description:
        "Back-end engineer role using NestJs for CU Sport Center website.",
      img: require("../public/cusportcomplex/cusport.png"),
      url: "https://book.cusc.chula.ac.th/",
    },
    {
      title: "Netcentric Rainywords",
      description:
        "Rainywords game implemented using React, Socket.io, Express.",
      img: require("../public/rainywords/rainywords.png"),
      url: "https://github.com/patrawi/NetcentricProject_RainnyWord",
    },
  ];

  return (
    <div>
      <p className="text-5xl px-6 my-4 text-white underline">Completed</p>
      <div className="grid justify-items-center bg-gray-900 grid-cols-2 p-10 gap-2">
        {ACHIEVEMENTS.map((item, key) => {
          return (
            <Card
              key={key}
              sx={{ display: "flex" }}
              className="h-50 p-4 w-full relative"
            >
              <Box className="object-contain flex justify-item-center">
                <Image
                  src={item.img}
                  alt={`${item.title} image.`}
                  objectFit="cover"
                  width={220}
                  height={220}
                />
              </Box>
              <CardContent className="w-full">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="flex flex-wrap w-100">{item.description}</p>
              </CardContent>
              <div className="absolute bottom-4 right-4">
                {item.url ? (
                  <IconButton>
                    <Link href={item.url} color="primary">
                      <ExitToAppIcon />
                    </Link>
                  </IconButton>
                ) : (
                  <></>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementList;
