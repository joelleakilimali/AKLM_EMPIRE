import React from "react";
import Header from "../components/Header";
import { GiGrLinkNextGoat, GrLinkNext } from "react-icons/gr";
import { GiReceiveMoney, GiShakingHands } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./home.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className="w-full">
      <img
        src="./assets/goat.jpg"
        alt="img"
        onDragStart={handleDragStart}
        role="presentation"
        className=""
      />
    </div>,
    <div className="w-full">
      <img
        src="./assets/bourse.jpg"
        alt="img"
        onDragStart={handleDragStart}
        role="presentation"
        className=""
      />
    </div>,
  ];
  return (
    <div className=" flex flex-col justify-center bg-gradient-to-tr from-zinc-900 to-sky-900 ">
      <Header />
      <div className="  mt-16 conic-gradient(at left center, rgb(136, 19, 55), rgb(146, 64, 14), rgb(251, 113, 133))">
        <div className="flex justify-start items-center p-10 mx-5 mb-24 ">
          <div className="flex justify-center">
            <p className="text-4xl w-[800%] font-bold text-white">
              L'empire AKILIMALI est un empire qui offre des services dans le
              multi sectoriel There is no one who loves pain itself, who seeks
              after it and wants to have it, simply because it is pain..
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <h1 className="text-2xl font-extrabold text-yellow-500 p-3 bg-black w-[200px] ">
          Nos Services
        </h1>
      </div>
      <div className="mt-5 p-5 text-white">
        <div className=" box justify-center text-xl ">
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">ELEVAGE</h1>
            <h1 className="cursor-pointer p-2 ">La Ferme kongo central</h1>
          </div>
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">CHARITE</h1>
            <h1 className="cursor-pointer p-2 ">Tosungana na bomoko </h1>
          </div>
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">AGENCE DE VOYAGE</h1>
            <h1 className="cursor-pointer p-2 ">Acacia Academics </h1>
          </div>
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">Mariage</h1>
            <h1 className="cursor-pointer p-2 ">We belong together </h1>
          </div>
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">PARFUMERIE</h1>
            <h1 className="cursor-pointer p-2 ">JOe</h1>
          </div>

          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">Animation-Musique</h1>
            <h1 className="cursor-pointer p-2 ">Benj & AIM musi </h1>
          </div>
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">AGENCE DE VOYAGE</h1>
            <h1 className="cursor-pointer p-2 ">Acacia Academics </h1>
          </div>
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">ASSOCIATION</h1>
            <h1 className="cursor-pointer p-2 ">Drepa-Over</h1>
          </div>
          <div className="innerBox">
            <h1 className="text-yellow-500 font-bold">BOUTIQUE</h1>
            <h1 className="cursor-pointer p-2 ">Eben ezer </h1>
          </div>
        </div>
      </div>

      <div className="bg-white  ">
        <div className="flex justify-center py-2">
          <h1 className="text-2xl font-extrabold text-yellow-500 p-3 bg-black w-[200px] ">
            Notre Vision
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start  ">
          <div className="flex flex-col justify-center align-middle  items-center p-10  mt-5 w-full border-b-2 mx-3">
            <div className="flex justify-center">
              <img src="../assets/atblogo.jpg" alt="wbt" className="w-[50%]" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-black pt-2  w-[80%] font-bold">
                Oeuvre de charite The term Lorem ipsum refers to those texts
                which are incomprehensible, i.e. no one can make any logical
                sense out of them, and they are created with the aim of
                presenting to the reader only the graphic features, in
                themselves, of a text or a visual presentation and
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <GrLinkNext
                size={60}
                color="yellow"
                className="ml-5 cursor-pointer rounded-full bg-yellow-400 p-4"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center align-middle  items-center p-10  mt-5 w-full border-b-2 mx-3">
            <div className="flex justify-center">
              <img src="../assets/webelong.png" alt="wbt" className="w-[50%]" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-black  w-[80%] font-bold">
                Nous organisons vos mariages The term Lorem ipsum refers to
                those texts which are incomprehensible, i.e. no one can make any
                logical sense out of them, and they are created with the aim of
                presenting to the reader only the graphic features, in
                themselves, of a text or a visual presentation and
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <GrLinkNext
                size={60}
                color="yellow"
                className="ml-5 cursor-pointer rounded-full bg-yellow-400 p-4"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center align-middle  items-center p-10  mt-5 w-full border-b-2 mx-3">
            <div className="flex justify-center">
              <img
                src="../assets/Empire-Akilimali-LogoDesign.png"
                alt="wbt"
                className="w-[30%]"
              />
            </div>
            <div className="flex justify-center">
              <h1 className="text-black w-[80%] font-bold">
                Nos chevres du kongo central sont heureux malades
                drepanocytairesThe term Lorem ipsum refers to those texts which
                are incomprehensible, i.e. no one can make any logical sense out
                of them, and they are created with the aim of presenting to the
                reader only the graphic features, in themselves, of a text or a
                visual presentation and
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <GrLinkNext
                size={60}
                color="yellow"
                className="ml-5 cursor-pointer rounded-full bg-yellow-400 p-4"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center align-middle  items-center p-10  mt-5 w-full border-b-2 mx-3">
            <div className="flex justify-center">
              <img src="../assets/over.jpg" alt="wbt" className="w-[50%]" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-black pt-2  w-[80%] font-bold">
                Projet de sensibilisation, depistage et accompagnement des
                malades drepanocytairesThe term Lorem ipsum refers to those
                texts which are incomprehensible, i.e. no one can make any
                logical sense out of them, and they are created with the aim of
                presenting to the reader only the graphic features, in
                themselves, of a text or a visual presentation and
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <GrLinkNext
                size={60}
                color="yellow"
                className="ml-5 cursor-pointer rounded-full bg-yellow-400 p-4"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center align-middle  items-center p-10  mt-5 w-full border-b-2 mx-3">
            <div className="flex justify-center">
              <img
                src="../assets/Acacia-PNG.png"
                alt="wbt"
                className="w-[50%]"
              />
            </div>
            <div className="flex justify-center">
              <h1 className="text-black pt-2  w-[80%] font-bold">
                Poursuivre ses etudes en Europe devient un jeux d'enfant avec
                acacia academics i.e. no one can make any logical sense out of
                them, and they are created with the aim of presenting to the
                reader only the graphic features, in themselves, of a text or a
                visual presentation and
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <GrLinkNext
                size={60}
                color="yellow"
                className="ml-5 cursor-pointer rounded-full bg-yellow-400 p-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center py-5">
          <h1 className="text-2xl font-extrabold text-yellow-500 p-3 bg-black w-[250px] ">
            Contactez-nous
          </h1>
        </div>

        <div className="flex flex-col  text-white m-5 ">
          <div className="flex p-2">
            <h1> Adresse Email :</h1>
            <input
              type="text"
              placeholder="email@gmail.com"
              className=" text-black p-2 mx-5 w-[300px]"
            />
          </div>
          <div className="flex p-2">
            <h1>votre Message </h1>
            <input
              type="textarea"
              placeholder="Tapez un message"
              className=" text-black p-2 mx-5 w-[300px]"
            />
          </div>
          <div className="flex items-center">
            <button className="px-4 mx-3 rounded-lg font-bold bg-yellow-500  text-black">
              Envoyer
            </button>
          </div>
        </div>
        <div className="flex justify-around my-5 cursor-pointer flex-wrap">
          <div className="flex text-white items-center m-2 flex-col bg-white p-20">
            <FaHandshake size={30} color="orange" />

            <h1 className=" text-black text-lg px-2">Devenir Partenaire</h1>
          </div>
          <div className="flex text-white items-center m-2 flex-col bg-white p-20">
            <GiReceiveMoney size={30} color="orange" />
            <h1 className=" text-black text-lg px-2">Investir dans l empire</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
