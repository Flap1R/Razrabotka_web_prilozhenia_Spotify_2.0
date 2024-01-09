import React from "react";
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar";
import { FaUsers, FaHeadphones } from "react-icons/fa";
import SongBar from "../MasterBar/SongBar";

const EgorKreed = () => {
  return (
    <Layout>
      <Navbar />
      <div className="min-h-screen flex-grow ml-2 z-1 bg-opacity-60 bg-blur">
        <div className="relative h-96">
          <img src="/assets/artist_ek.jpg" alt="" className="rounded-[6px] left-30 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 bottom-0 p-8 md:p-12 flex flex-col z-3">
            <div className="mt-auto text-white flex items-center justify-between">
              <div className="left">
                <div className="flex items-center">
                  <img src="/assets/check.png" className="w-6 ml-4" alt="" />
                  <h2 className="text-lg font-bold">Verified user</h2>
                </div>

                <div className="flex items-center">
                  <h2 className="text-5xl">EGOR KREED</h2>
                </div>

                <p className="flex mt-2 text-base">
                  <i className="mr-2">
                    <FaHeadphones />
                  </i>
                  1 026 982 <span className="top-2 ml-2">Monthly Listeners</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex item-center sticky px-8 top-0 z-50 rounded-[6px] justify-between p-6 secondary_bg">
        <ul className="flex items-center">
            <li className="mr-5">
              <a href="" className="text-gray-400">Popular</a>
            </li>
            <li className="mr-5">
              <a href="#" className="text-gray-400">Albums</a>
            </li>
            <li className="mr-5">
              <a href="#" className="text-gray-400">Songs</a>
            </li>
            <li className="mr-5">
              <a href="#" className="text-gray-400">Fans</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">About</a>
            </li>
          </ul>
            <p className="text-xs text-gray-300 mx-4">
                <i>
                <FaUsers />
                </i>
                15M <span>Followers</span>
            </p>
        </div>

        <p className="flex mt-5 text-5x mx-4">
        Егор Крид – один из знаковых российских поп-артистов. В 2020-м он выпустил невероятно успешный альбом «58», который возглавил все чарты и мгновенно стал платиновым. А в июле 2021-го Егор резко сменил вектор своей карьеры и представил свой первый полноценный рэп-альбом «PUSSY BOY», в записи которого принимала участие целая команда первых имен рэп-сцены: OG Buda, Guf, SODA LUV, MAYOT и другие. Дерзкий рэп-эксперимент официально удался: альбом в кратчайшие сроки стал трижды платиновым, а клип «PUSSY BOY» набрал 3 миллионов просмотров всего за три дня.
        </p>
        
        <p className="flex mt-5 text-5x mx-4">
Egor Kreed is one of the most prominent pop acts on the Russian music scene. In 2020 he cemented this status by releasing the incredibly successful album “58”, that topped all of the main charts and immediately went platinum. Then in July 2021 Egor has made a U-turn and dropped his first ever proper rap album “PUSSY BOY”, recorded with some of the most influential artists on the local rap scene: OG Buda, Guf, SODA LUV, MAYOT and others. This daring experiment has paid off in spades: the record went triple platinum, while the music video “PUSSY BOY” has gained 3M views in just three days.
        </p>
      </div>

    <SongBar />
    </Layout>
  );
};

export default EgorKreed;
