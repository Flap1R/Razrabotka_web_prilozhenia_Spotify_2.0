import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Devil Eyes",
    artist: "Hippie Sabotage",
    mp3: new Audio("/assets/mp3/Devil_Eyes.mp3"),
    img: "/assets/Devil_Eyes.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Becane",
    artist: "Yame",
    mp3: new Audio("/assets/mp3/Yame_Becane.mp3"),
    img: "/assets/Yame_Becane.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Nevesta",
    artist: "Egor Kreed",
    mp3: new Audio("/assets/mp3/Nevesta.mp3"),
    img: "/assets/EgorKreedHolostyak.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Lost Angeles",
    artist: "FRIENDLY THUG 52 NGG",
    mp3: new Audio("/assets/mp3/Lost_Angeles.mp3"),
    img: "/assets/Lost_Angeles.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Na Belom Pokrivale Yanvarya",
    artist: "Kamazz",
    mp3: new Audio("/assets/mp3/Na_Belom.mp3"),
    img: "/assets/Na_Belom.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "4x4",
    artist: "Big Baby Tape",
    mp3: new Audio("/assets/mp3/4x4.mp3"),
    img: "/assets/4x4.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Mama Lyba",
    artist: "Serebro",
    mp3: new Audio("/assets/mp3/Serebro-mama.mp3"),
    img: "/assets/Serebro.jpeg",
  },
];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
