import React from "react";
import "./DescriptionBox.css";
export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="db-navigator">
        <div className="db-navbox">Description</div>
        <div className="db-navbox fade">Reviews (122)</div>
      </div>
      <div className="db-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          voluptatem enim consequatur aspernatur, iusto soluta quidem quos odio,
          libero dignissimos, excepturi exercitationem dolore numquam dolorem
          corrupti accusamus unde magnam voluptas.
        </p>
      </div>
    </div>
  );
};
