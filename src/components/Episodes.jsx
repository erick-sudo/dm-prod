import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Glass } from "./Glass";
import { Episode } from "./Episode";
import { episodes } from "../assets/episodes/episodes";

export function Episodes() {
  const [search, setSearch] = useState("Searching");

  return (
    <div>
      <div
        className={`bg-gradient-to-br from-indigo-950 via-black to-indigo-950`}
      >
        <div className="container mx-auto pb-12">
          <NavBar />
          <div className="p-4">
            <div className="text-center mx-auto py-4 text-gray-300 text-4xl font-extrabold">
              EPISODES
            </div>
            <div className="text-gray-200 text-xl text-center max-w-2xl mx-auto py-12 px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar.
            </div>
          </div>
          <div className="px-6 border">
            <Glass
              className="p-2 max-w-4xl mx-auto flex line-shadow rounded-[100px] overflow-hidden"
              contentClassName="bg-white/10 "
            >
              <div className="flex items-center gap-4 flex-grow px-4 backdrop-blur">
                <FontAwesomeIcon
                  className="text-xl text-gray-400"
                  icon={faSearch}
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none py-1 px-6 flex-grow bg-transparent text-lg text-gray-400"
                  placeholder="Search"
                />
              </div>
            </Glass>
            <div className="absolute z-50 bg-white/10 ">
              {search.split("").map((t, i) => (
                <div className="text-white" key={i}>
                  {search.slice(0, i + 1)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Episode Preview */}
        <div className="container mx-auto px-4">
          <Episode />
        </div>

        {/* Related */}
        <div className="container mx-auto mt-12 py-12">
          <div>
            <h2 className="text-white text-3xl font-bold px-8">Related</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {episodes.map((episode, idx) => (
              <Glass
                contentClassName="bg-white/5"
                className="max-w-lg backdrop-blur-sm border-2 border-white/10"
                key={idx}
              >
                <div className="backdrop-blur h-full">
                  <div className="h-[30vh] relative">
                    <div className="absolute inset-0">
                      <img
                        src={episode.image}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-4 py-4">
                    <h2 className="gray-text font-bold">{episode.episode}</h2>
                    <h2 className="text-2xl text-gray-300">{episode.title}</h2>
                    <div className="py-4 text-gray-100">
                      {episode.description}
                    </div>
                  </div>
                </div>
              </Glass>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
