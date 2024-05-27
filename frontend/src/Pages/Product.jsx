import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";

export const Product = () => {
  const { productId } = useParams();
  return (
    <div>
      <NavBar />
      <Breadcrum productId={productId} />
      <ProductDisplay productId={productId} />
      <DescriptionBox />
      <RelatedProducts productId={productId} />
      <Footer />
    </div>
  );
};
