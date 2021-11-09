import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AchievementList from "../components/AchievementList";
import MyPhoto from "../public/ck_image.jpg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
        className="h-80 w-80 rounded-full absolute right-8 top-5 z-20"
        style={{ overflow: "hidden" }}
      >
        <Image
          src={MyPhoto}
          alt="Picture of the Chuwong Kulrattanarak"
          objectFit="cover"
        />
      </div>
      <div className=" w-screen p-6 flex-col pt-10">
        <div className="text-6xl text-gray-200 flex-auto font-light">
          My name is
        </div>
        <div className="font-medium text-8xl text-gray-50 underline flex-auto">
          Chuwong Kulrattanarak
        </div>
      </div>
      <div className="bg-gray-600 px-8 py-6 mt-8 text-2xl backdrop-opacity-70 font-light">
        <div>
          <div className="text-blue-300">
            A highly enthusiastic, polite, optimistic person that is craving for
            more tech-related knowledge & experience.
          </div>
          <div className="text-blue-300">
            I am always eager to learn new things, especially in tech fields.
          </div>
          <div className="text-blue-300">
            Also interested in Machine Learning 🤖 & Blockchain.
          </div>
        </div>
        <div className="text-blue-500 font-semibold text-base">
          Proficient in English (IELTS 7.0), JavaScript/Typescript, JAVA,
          Python, Git & Github.
        </div>
        <div className="text-blue-500 font-semibold text-base">
          Familiar with React, React Native, NestJs, Node.js, Ionic, Flask,
          Pandas.
        </div>
      </div>
      <AchievementList />
    </div>
  );
};

export default Home;
