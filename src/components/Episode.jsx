import React, { useState } from "react";
import { videos } from "../assets/videos";
import { episodeDetails } from "../assets/episodes/episodes";
import { Glass } from "./Glass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiStarLine, RiStarSFill } from "react-icons/ri";
import { images } from "../assets/images/images";

export function Episode() {

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="grid">
        <h2 className="text-violet-600 font-bold text-2xl">
          {episodeDetails.title}
        </h2>
        <h2 className="gray-text font-bold px-4 bg-indigo-600/10 my-2 py-2 backdrop-blur">
          SEASON {episodeDetails.season_number}
        </h2>
        <h2 className="gray-text font-bold px-4 bg-indigo-600/10 my-2 py-2 backdrop-blur">
          EPISODE {episodeDetails.episode_number}
        </h2>
        <div className="">
          <div className="min-h-[40vh]">
            <video
              src={videos.conferenceVideo}
              controls
              className="h-[40vh] w-full p-4 bg-black backdrop-blur"
            ></video>
          </div>
        </div>

        <div>
          <button className=""></button>
        </div>

        <div className="max-w-lg text-gray-200">{episodeDetails.summary}</div>

        <div className="gray-text flex text-2xl text-indigo-400">
          {new Array(10)
            .fill(1)
            .map((_, idx) =>
              episodeDetails.ratings.IMDb <= idx + 1 ? (
                <RiStarLine key={idx} />
              ) : (
                <RiStarSFill key={idx} />
              )
            )}
        </div>
      </div>

      <div className="p-6">
        <Glass
          className="backdrop-blur-sm"
          contentClassName="bg-indigo-600/10"
          backgroundContent={
            <img
              className="w-full h-full blur-2xl opacity-25"
              src={images.turntable}
            />
          }
        >
          <div className="text-white grid gap-4 py-12">
            <div className="grid grid-cols-2 gap-2">
              <h2 className="text-end px-4">Duration:</h2>
              <div>{episodeDetails.duration}</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <h2 className="text-end px-4">Release Date:</h2>
              <div>{episodeDetails.release_date}</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <h2 className="text-end px-4">Genres:</h2>
              <div className="flex flex-wrap gap-2 items-center">
                {episodeDetails.genres.map((g, idx) => (
                  <button
                    className="bg-white/10 py-2 px-4 backdrop-blur"
                    key={idx}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <h2 className="text-gray-300 text-center text-2xl font-extrabold">
              Cast
            </h2>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <h2 className="text-end px-4">Name</h2>
                <h2>Character</h2>
              </div>
              {episodeDetails.cast.map((c, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-2">
                  <h2 className="text-end px-4">{c.name}</h2>
                  <h2>{c.character}</h2>
                </div>
              ))}
            </div>
            <h2 className="text-gray-300 text-center text-2xl font-extrabold">
              Crew
            </h2>
            <div>
              {Object.keys(episodeDetails.crew).map((crew, idx) => {
                const data = episodeDetails.crew[crew];
                if (Array.isArray(data)) {
                  return (
                    <div className="grid grid-cols-2 gap-2" key={idx}>
                      <div className="capitalize text-end px-4">{crew}:</div>
                      <div>
                        {data.map((p, idx2) => (
                          <div key={idx2}>{p.name}</div>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="grid grid-cols-2 gap-2" key={idx}>
                      <div className="capitalize text-end px-4">{crew}:</div>
                      <div>{data.name}</div>
                    </div>
                  );
                }
              })}
            </div>

            <h2 className="text-gray-300 text-center text-2xl font-extrabold">
              Locations
            </h2>
            <div className="flex flex-col justify-center items-center">
              {episodeDetails.locations.map((p, idx2) => (
                <div key={idx2}>{p.name}</div>
              ))}
            </div>
          </div>
        </Glass>
      </div>
    </div>
  );
}
