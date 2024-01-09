import React from "react";
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar";
import SongBar from "../MasterBar/SongBar";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <Layout>
      <Navbar />
      <div className="min-h-screen flex-grow ml-2 z-1 bg-opacity-60 bg-blur">
        <div className="h-96 relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4">
          <div className="flex items-end">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white">
              <img src="/assets/Account.jpg" className="w-full h-full object-cover" alt=""/>
            </div>
            <div className="ml-8">
              <p className="text-white font-medium text-base">Profile</p>
              <h2 className="text-white font-medium text-9xl mb-2">FLAP1R</h2>
              <Link to={"/subscriptions"} className="text-white font-medium text-base">
                4 subscriptions
              </Link>
            </div>
          </div>
        </div>

        <div className="flex item-center sticky px-8 top-0 z-50 rounded-[6px] justify-between p-6 secondary_bg">
        <ul className="flex items-center">
            <li className="mr-5">
              <a href="#" className="text-gray-400">Subscription</a>
            </li>
            <li className="mr-5">
              <a href="#" className="text-gray-400">Albums</a>
            </li>
            <li className="mr-5">
              <a href="#" className="text-gray-400">Songs</a>
            </li>
          </ul>
        </div>

        <p className="flex mt-5 text-5x mx-4">
        Я студент 3 курса по специальности «Инженер-программист». Моя цель — стать квалифицированным интерфейсным разработчиком программного обеспечения и внести свой вклад в развитие современных веб-технологий. В мои приоритеты входит углубленное изучение основных языков программирования, таких как HTML, CSS, JavaScript и React, разработка эффективного и качественного кода для веб-приложений, а также понимание современных методологий и инструментов, используемых во фронтенд-разработке.
        </p>
        
        <p className="flex mt-5 text-5x mx-4">
        I am a 3nd year student majoring in software engineering. My goal is to become a qualified front-end software developer and contribute to the development of modern web technologies. My priorities include an in-depth study of major programming languages such as HTML, CSS, JavaScript and React the development of effective and high-quality code for web applications, as well as an understanding of modern methodologies and tools used in front-end development.
        </p>
      </div>

    <SongBar />
    </Layout>
  );
};

export default Account;
