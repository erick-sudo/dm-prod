import React from "react";
import { ContentOnImage } from "./ContentOnImage";
import { NavBar } from "./NavBar";
import { colorPallete } from "./ColorPallete";
import { products } from "../assets/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Glass } from "./Glass";
import { images } from "../assets/images/images";
import { newestReleases } from "../assets/releases";

export function Home() {
  return (
    <div>
      <div>
        {/* Hero section */}
        <div
          className={`bg-gradient-to-br from-indigo-950 via-black to-indigo-950`}
        >
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

            <button className="px-12 py-4 mt-4 mx-6 mb-12 rounded-xl text-gray-200 font-extrabold bg-gradient-to-r from-indigo-950 via-blue-800 to-indigo-950">
              LISTEN NOW
            </button>
          </div>
        </div>

        {/* Products */}
        <div
          className={`bg-gradient-to-tr from-indigo-950 via-black to-violet-950 py-24`}
        >
          <div className="container mx-auto py-12 flex gap-6 scroll_x p-4">
            {[0, 2, 4, 6, 8, 10]
              .map((i) => [products[i], products[i + 1]])
              .map((pg, idx0) => (
                <div key={idx0} className="flex flex-col gap-6">
                  {pg.map((prod, idx) => (
                    <Glass
                      className="cursor-pointer flex-grow"
                      contentClassName="bg-white/10 peer-hover:bg-white/20 border border-white/20 rounded-xl"
                      opacity={0.5}
                      key={idx0}
                    >
                      <div
                        key={idx}
                        style={{}}
                        className="min-w-[35vh] p-6 rounded-2xl"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{prod.icon}</div>
                          <div className="text-gray-100 font-extrabold">
                            {prod.title}
                          </div>
                        </div>
                        <div className="text-gray-300 font-bold p-4 text-lg">
                          {prod.description}
                        </div>
                        <div className="h-12"></div>
                      </div>
                    </Glass>
                  ))}
                </div>
              ))}
          </div>
        </div>

        {/* Newest Release */}
        <div>
          <div>
            {newestReleases.map((release, idx) => (
              <div key={idx}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
