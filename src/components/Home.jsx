import React from "react";
import { ContentOnImage } from "./ContentOnImage";
import { NavBar } from "./NavBar";
import { colorPallete } from "./ColorPallete";
import { products } from "../assets/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Glass } from "./Glass";
import { images } from "../assets/images/images";
import { newestReleases } from "../assets/releases";
import { hosts } from "../assets/hosts";

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
                      key={idx}
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

        <div className="bg-gradient-to-br from-[#050505] via-[#004545] to-[#050505] py-24 grid gap-12">
          {/* Newest Release */}
          <div className="container mx-auto p-4">
            <h2 className="text-white text-5xl font-bold">
              Newest
              <br />
              Releases
            </h2>
            <h2 className="text-white mt-8">Auto Captions Ready.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 my-12 gap-6">
              {newestReleases.map((release, idx) => (
                <Glass
                  opacity={0.95}
                  key={idx}
                  contentClassName="bg-gradient-to-br from-[#004545] via-[#004545] to-[#004545da]"
                >
                  <div className="p-4">
                    <div className="min-h-[30vh] flex relative">
                      <div className="flex overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src={images.microphone}
                        />
                      </div>
                      <div className="absolute bottom-[10%] left-8 right-8">
                        <Glass
                          opacity={0.6}
                          contentClassName="bg-white/10 border-2 border-white/20"
                          className="p-4 backdrop-blur-md"
                        >
                          <div className="text-white font-bold my-2 text-xl">
                            {release.title}
                          </div>
                        </Glass>
                      </div>
                    </div>
                    <h2 className="text-gray-400 font-bold py-2">
                      {release.release}
                    </h2>
                    <div className="text-gray-100 pt-4 pb-12 max-w-xs">
                      {release.desc}
                    </div>
                  </div>
                </Glass>
              ))}
            </div>
          </div>

          {/* Hosts */}
          <div className="container mx-auto py-12">
            <h2 className="text-white text-5xl font-bold">
              Meet
              <br />
              Your Hosts
            </h2>

            <div className="grid lg:grid-cols-2 gap-6 mt-12">
              <div className="">
                <div className="min-h-[70vh] max-w-lg relative mx-auto">
                  <div className="rounded-2xl overflow-hidden absolute top-0 right-32 left-0 bottom-32">
                    <img
                      className="h-full w-full object-cover"
                      src={images.recording}
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden absolute top-32 right-0 left-32 bottom-0">
                    <img
                      className="h-full w-full object-cover"
                      src={images.turntable}
                    />
                  </div>

                  <div className="absolute left-2 bottom-12 peer group">
                    <Glass
                      className="overflow-hidden backdrop-blur"
                      contentClassName="rounded-2xl bg-white/10"
                    >
                      <div className="flex gap-4 p-2 text-xl">
                        <div className="p-2 pr-12 text-white">
                          Listen to our hosts!
                        </div>
                        <button className="px-4 text-sm rounded-2xl text-white bg-gradient-to-r from-[#050505] via-[#004545] to-[#050505] group-hover:from-[#004545] group-hover:via-[#050505] group-hover:to-[#004545] duration-300">
                          Connect Now
                        </button>
                      </div>
                    </Glass>
                  </div>
                </div>
              </div>
              <div className="justify-end grid md:grid-cols-2 gap-12 px-2">
                {hosts.map((host, idx) => (
                  <div className="max-w-[40vh]" key={idx}>
                    <ContentOnImage
                      className="min-h-[40vh] max-w-[40vh] flex-grow"
                      imageContainerClassName="z-10"
                      image={host.image}
                    >
                      <div className="absolute z-20 inset-0 bg-[#004545a4]"></div>
                    </ContentOnImage>
                    <div className="text-xl mt-4 text-gray-100 font-bold">
                      {host.name}
                    </div>
                    <div className="uppercase gray-text font-extrabold">
                      {host.position}
                    </div>
                    <div className="py-6 text-gray-200">{host.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
