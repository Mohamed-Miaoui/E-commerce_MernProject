import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Items } from "../Components/Items/Items";
import { Offers } from "../Components/Offers/Offers";
import { NewCollections } from "../Components/NewCollections/NewCollections";
import { NewLetter } from "../Components/NewsLetter/NewLetter";
import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";

export const Shop = () => {
  return (
    <div>
      <NavBar />
      <Hero></Hero>
      <Items></Items>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewLetter></NewLetter>
      <Footer />
    </div>
  );
};
