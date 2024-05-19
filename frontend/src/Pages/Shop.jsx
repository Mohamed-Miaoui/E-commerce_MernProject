import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Items } from "../Components/Items/Items";
import { Offers } from "../Components/Offers/Offers";
import { NewCollections } from "../Components/NewCollections/NewCollections";
import { NewLetter } from "../Components/NewsLetter/NewLetter";

export const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Items></Items>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewLetter></NewLetter>
    </div>
  );
};
