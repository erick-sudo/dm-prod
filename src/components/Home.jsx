import React from "react";
import { ContentOnImage } from "./ContentOnImage";
import { NavBar } from "./NavBar";
import { colorPallete } from "./ColorPallete";

export function Home() {
  return (
    <div>
      <div>

        {/* Hero section */}
        <div className={`bg-gradient-to-br from-indigo-950 via-black to-indigo-950`}>
          <div className="container mx-auto">
            <NavBar />
            <div className="p-4">
              <div className="text-center mx-auto py-4 text-gray-300 text-2xl font-bold">
                A world of limitless creativity and innovation
              </div>
              <div className="py-12 p-2 flex justify-center items-center">
                <div className="flex flex-wrap justify-center text-6xl lg:text-7xl xl:text-8xl font-[900] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  <div>DESERT</div>
                  <div className="p-2"></div>
                  <div>MAMBA</div>
                </div>
              </div>
              <div className="text-gray-200 text-xl text-center max-w-xl mx-auto p-4">
                Welcome to our world of creativity and innovation at{" "}
                <em className="text-indigo-500 font-bold">
                  Desert Mamba Productions!
                </em>{" "}
                We are thrilled to have you embark on a journey with us where
                imagination knows no bounds. As a dynamic media productions
                company, we pride ourselves on transforming ideas into
                captivating visual and auditory experiences.
              </div>
            </div>
          </div>

          
        </div>

        {/*  */}
      </div>
    </div>
  );
}
