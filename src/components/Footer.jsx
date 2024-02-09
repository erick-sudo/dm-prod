import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SlLocationPin, SlCallOut, SlEnvolope } from "react-icons/sl";


export function Footer() {
  return (
    <div
      className={`bg-[#060312]`}
    >
      <footer className="text-white py-12">
        <div className="container mx-auto border-t border-gray-700 grid md:grid-cols-2 xl:grid-cols-4 px-4 py-12">
          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex items-center gap-4"><SlEnvolope /><div className="break-all px-4">info@mediaproductions.com</div></div>
            <div className="flex items-center gap-4"><SlCallOut /><div className="break-all px-4">+1 (123) 456-7890</div></div>
            <div className="flex items-center gap-4"><SlLocationPin /><div className="break-all px-4">123 Media Street, Cityville, USA</div></div>
          </div>

          {/* Services Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul>
              <li>Documentaries</li>
              <li>Podcasts</li>
              <li>Short Films</li>
              <li>Feature Films</li>
              <li>Web Series</li>
              {/* Add more services as needed */}
            </ul>
          </div>

          {/* Team Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Meet the Team</h3>
            <ul>
              <li>Alexandra Reynolds - Host & Producer</li>
              <li>Elijah Thompson - Co-Host & Creative Director</li>
              {/* Add more team members as needed */}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                <FontAwesomeIcon  icon={faFacebook} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              {/* Add more social media icons and links as needed */}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t container mx-auto border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            © 2024 Media Productions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
