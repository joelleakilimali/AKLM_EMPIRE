import React from "react";
import Header from "../components/Header";
import { GiGrLinkNextGoat, GrLinkNext } from "react-icons/gr";

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
    <div className=" bg-gradient-to-r from-indigo-500  ">
      <Header />
      <div className="  mt-16 conic-gradient(at left center, rgb(136, 19, 55), rgb(146, 64, 14), rgb(251, 113, 133))">
        <div className="flex justify-between items-center bpx-2 mx-10 ">
          <div>
            <p className="text-3xl w-[80%] font-bold text-yellow-800">
              L'empire AKILIMALI est un empire qui offre des services dans le
              multi sectoriel
            </p>
          </div>
          <div className="flex flex-row-reverse">
            <img src="../assets/empl.png" alt="logo" className="w-[70%]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <h1 className="text-2xl font-extrabold text-yellow-500 p-3 bg-black w-[200px] ">
          Nos Services
        </h1>
      </div>
      <div className="mt-5 p-5 bg-black text-white">
        <div>
          <div className=" flex flex-row items-center  justify-evenly text-xl ">
            <div className="w-[35%]">
              <div>
                <h1 className="text-yellow-500 font-bold">ELEVAGE</h1>
                <h1 className="cursor-pointer p-2 ">La Ferme kongo central</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">CHARITE</h1>

                <h1 className="cursor-pointer p-2 ">Tosungana na bomoko </h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">Mariage</h1>
                <h1 className="cursor-pointer p-2 ">We belong together </h1>
              </div>
            </div>
            <div className="w-[35%]">
              <div>
                <h1 className="text-yellow-500 font-bold">PARFUMERIE</h1>
                <h1 className="cursor-pointer p-2 ">JOe</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">AGENCE DE VOYAGE</h1>

                <h1 className="cursor-pointer p-2 ">Acacia Academics </h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">BOUTIQUE</h1>
                <h1 className="cursor-pointer p-2 ">Eben ezer </h1>
              </div>
            </div>
            <div className="w-[35%] ">
              <div>
                <h1 className="text-yellow-500 font-bold">PARFUMERIE</h1>
                <h1 className="cursor-pointer p-2 ">JOe</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">ASSOCIATION</h1>
                <h1 className="cursor-pointer p-2 ">Drepa-Over</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">Animation-Musique</h1>
                <h1 className="cursor-pointer p-2 ">Benj & AIM musi </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center py-2">
          <h1 className="text-2xl font-extrabold text-yellow-500 p-3 bg-black w-[200px] ">
            Notre Vision
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start  ">
          <div className="flex flex-col justify-center align-middle  items-center p-10  mt-5 w-full border-b-2 mx-3">
            <div className="flex justify-center">
              <img src="../assets/tsgn.png" alt="wbt" className="w-[50%]" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-yellow-800 pt-2  w-[80%] font-bold">
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
              <img src="../assets/wbt.png" alt="wbt" className="w-[70%]" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-yellow-800  w-[80%] font-bold">
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
              <img src="../assets/empire.png" alt="wbt" className="w-[70%]" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-yellow-800  w-[80%] font-bold">
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
              <img src="../assets/drepa.png" alt="wbt" className="w-[50%]" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-yellow-800 pt-2  w-[80%] font-bold">
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
              <h1 className="text-yellow-800 pt-2  w-[80%] font-bold">
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
      <Footer />
    </div>
  );
}

export default Home;
