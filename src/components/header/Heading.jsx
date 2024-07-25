import React from "react";
import { headings } from "../../assets/assets";

const Heading = ({ id }) => {
  return headings.map((item, index) => {
    if (id === item.id) {
      return (
        <React.Fragment key={index}>
          <h4 className="mb-2 text-lg text-center">{item.title}</h4>
          <h3 className="text-4xl sm:text-6xl lg:text-[58px] text-center">
            {item.subTitle}
          </h3>
          <p className="max-w-2xl text-center mb-12 mt-5 mx-auto">
            {item.description}
          </p>
        </React.Fragment>
      );
    }
  });
};

export default Heading;
