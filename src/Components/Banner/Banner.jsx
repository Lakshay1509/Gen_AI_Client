import React from "react";
import BannerPng from "../../assets/banner1.png";
import BANNER from "../../assets/BANNER.png";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false" className="mr-[10px]">
            <img src={BANNER} alt="" className="w-full max-w-[800px] rounded-2xl" />
          </div>
          {/* text content section */}
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Meet S.A.M,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Your AI Companion for Mental Health Support
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              S.A.M is an AI-powered mental health chatbot designed to provide real-time emotional support and guidance. Available 24/7, it listens, understands, and offers personalized coping strategies. With an intuitive interface, Gemini creates a safe, judgment-free space, empowering users to manage stress, anxiety, and emotional challenges with expert-driven insights.
              </p>
              <div className="flex gap-6">
                <Link to="/chatbot">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                >
                  Chat with S.A.M
                </button>
                </Link>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
