import React from "react";
import { Vortex } from "../ui/vortex";

export function VortexTwo() {
  return (
    <div className="h-[17rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Want a full stack website?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          A complete full stack website with amazing UX and UI is one click away
          from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="#my-contact">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Let's Connect
            </button>
          </a>
          <button className="px-4 py-2  text-white ">Visit my Portfolio</button>
        </div>
      </Vortex>
    </div>
  );
}
export default VortexTwo;
