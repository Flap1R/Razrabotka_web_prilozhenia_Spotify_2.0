import React from "react";
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar";
import { FaUsers, FaHeadphones } from "react-icons/fa";
import SongBar from "../MasterBar/SongBar";

const BigBabyTape = () => {
  return (
    <Layout>
      <Navbar />
      <div className="min-h-screen flex-grow ml-2 z-1 bg-opacity-60 bg-blur">
        <div className="relative h-96">
          <img src="/assets/bbt_logo.jpeg" alt="" className="rounded-[6px] left-30 w-full h-full object-cover " />
          <div className="absolute top-0 left-0 right-0 bottom-0 p-8 md:p-12 flex flex-col z-3">
            <div className="mt-auto text-white flex items-center justify-between">
              <div className="left">
                <div className="flex items-center">
                  <img src="/assets/check.png" className="w-6 ml-4" alt="" />
                  <h2 className="text-lg font-bold">Verified user</h2>
                </div>

                <div className="flex items-center">
                  <h2 className="text-5xl">BIG BABY TAPE</h2>
                </div>

                <p className="flex mt-2 text-base">
                  <i className="mr-2">
                    <FaHeadphones />
                  </i>
                  879 502 <span className="top-2 ml-2">Monthly Listeners</span>
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
                2M <span>Followers</span>
            </p>
        </div>

        <p className="flex mt-5 text-5x mx-4">
        Big Baby Tape — российский рэп-исполнитель и автор песен. Создатель и лидер объединения Benzo Gang. Выступает также под псевдонимами DJ Tape и альтер эго Tape LaFlare.
        </p>
      </div>

    <SongBar />
    </Layout>
  );
};

export default BigBabyTape;
