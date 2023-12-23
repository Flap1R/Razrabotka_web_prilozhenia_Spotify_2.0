import React from 'react';
import Layout from '../../Layout/Layout';
import {FaBackward, FaForward, FaLessThan, FaGreaterThan} from "react-icons/fa";
const Home = () => {
  return <Layout>
      <div className="flex justify-between items-center mb-2"> 
        <div className="flex gap-2 items-center">
          <FaLessThan className="bg-white/10 text-3xl p-1 rounded-[50%]"/>
          <FaGreaterThan className="bg-white/10 text-3xl p-1 rounded-[50%]"/>
        </div>
        <div>
          <buttonn className="rounded-full mt-4 px-8 text-base py-2 text-white- font-semibold">
              Sign up
          </buttonn>
          <buttonn className="rounded-full text-black mt-4 px-8 text-base py-3 bg-white font-semibold">
              Log in
          </buttonn>
        </div>
      </div>
      <div className="tertiary_bg mx-4 px-4 py-4">
      <div className="flex justify-between my-4 items-center">
          <span className="text=xl font-bold hover:underline cursor-pointer ">Focus</span>
          <span>Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text=xl font-bold hover:underline cursor-pointer ">Spotify List</span>
          <span>Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </Layout>
}

export default Home