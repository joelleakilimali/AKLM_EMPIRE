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
    <div>
      <Header />
      <div className="mt-16 conic-gradient(at left center, rgb(136, 19, 55), rgb(146, 64, 14), rgb(251, 113, 133))">
        <div className="flex justify-between items-center border-2 px-2 mx-10 border-y-yellow-400 border-x-white ">
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
      <div className="mt-5 p-10 h-[450px] bg-black text-white">
        <div>
          <div className=" flex items-center justify-around text-xl ">
            <div>
              <div>
                <h1 className="text-yellow-500 font-bold">ELEVAGE</h1>
                <h1 className="cursor-pointer p-2 ">La Ferme kongo central</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">CHARITE</h1>

                <h1 className="cursor-pointer p-2 ">Tosungana na bomoko </h1>
                <h1 className="cursor-pointer p-2 ">Drepa-Over </h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">Mariage</h1>
                <h1 className="cursor-pointer p-2 ">We belong together </h1>
              </div>
            </div>
            <div className=" ">
              <div>
                <h1 className="text-yellow-500 font-bold">PARFUMERIE</h1>
                <h1 className="cursor-pointer p-2 ">JOe</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">
                  Production Musical et Annimation
                </h1>
                <h1 className="cursor-pointer p-2 ">Benj & AIM music</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">AGENCE DE VOYAGE</h1>
                <h1 className="cursor-pointer p-2 ">Acacia</h1>
              </div>
              <div>
                <h1 className="text-yellow-500 font-bold">BOUTIQUE</h1>
                <h1 className="cursor-pointer p-2 ">Eben Ezer Boutique</h1>
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
          <article className="flex justify-between flex-wrap items-center p-10   mt-5  border-b-2 mx-3 ">
            <img src="./assets/wbt.png" alt="wbt" className="w-[30%]" />
            <p className="text-yellow-800 font-bold">
              Nous organisons vos mariages The term Lorem ipsum refers to those
              texts which are incomprehensible, i.e. no one can make any logical
              sense out of them, and they are created with the aim of presenting
              to the reader only the graphic features, in themselves, of a text
              or a visual presentation and
            </p>
            <GrLinkNext
              size={90}
              className="ml-5 cursor-pointer rounded-full"
            />
          </article>
          <article className="flex justify-between flex-wrap items-center p-10  mt-10  border-b-2 mx-3">
            <img src="./assets/tsgn.png" alt="wbt" className="w-[25%] px-2 " />
            <p className="text-yellow-800 font-bold">
              Oeuvre de charite The term Lorem ipsum refers to those texts which
              are incomprehensible, i.e. no one can make any logical sense out
              of them, and they are created with the aim of presenting to the
              reader only the graphic features, in themselves, of a text or a
              visual presentation and
            </p>
            <GrLinkNext size={90} className="ml-5 cursor-pointer" />
          </article>
          <article className="flex justify-between flex-wrap items-center p-10  mt-5  border-b-2 mx-3">
            <img src="./assets/empire.png" alt="wbt" className="w-[30%]" />
            <p className="text-yellow-800 font-bold">
              Nos chevres du kongo central sont hereux lol The term Lorem ipsum
              refers to those texts which are incomprehensible, i.e. no one can
              make any logical sense out of them, and they are created with the
              aim of presenting to the reader only the graphic features, in
              themselves, of a text or a visual presentation and
            </p>
            <GrLinkNext size={90} className="ml-5 cursor-pointer" />
          </article>
          <article className="flex justify-between flex-wrap items-center p-10 mt-10  border-b-2 mx-3 ">
            <img src="../assets/drepa.png" alt="wbt" className="w-[30%]" />
            <p className="text-yellow-800 font-bold">
              Projet de sensibilisation, depistage et accompagnement des malades
              drepanocytairesThe term Lorem ipsum refers to those texts which
              are incomprehensible, i.e. no one can make any logical sense out
              of them, and they are created with the aim of presenting to the
              reader only the graphic features, in themselves, of a text or a
              visual presentation and
            </p>
            <GrLinkNext size={90} className="ml-5 cursor-pointer" />
          </article>
          <article className="flex justify-between flex-wrap items-center p-10 mt-10  border-b-2 mx-3 ">
            <img src="./assets/acacia.png" alt="wbt" className="w-[20%]" />
            <p className="text-yellow-800 font-bold">
              Etudier en Europe devient plus facilesThe term Lorem ipsum refers
              to those texts which are incomprehensible, i.e. no one can make
              any logical sense out of them, and they are created with the aim
              of presenting to the reader only the graphic features, in
              themselves, of a text or a visual presentation and
            </p>
            <GrLinkNext size={90} className="ml-5 cursor-pointer" />
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
