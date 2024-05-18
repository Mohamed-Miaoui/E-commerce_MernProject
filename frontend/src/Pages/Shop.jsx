import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Items } from "../Components/Items/Items";
import { Offers } from "../Components/Offers/Offers";
import { NewCollections } from "../Components/NewCollections/NewCollections";

export const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Items></Items>
      <Offers></Offers>
      <NewCollections></NewCollections>
    </div>
  );
};
