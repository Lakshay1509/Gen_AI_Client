import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import { Link } from "react-router-dom";

const AppStore = () => {
  return (
    <>
      <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-2xl text-center sm:text-4xl font-semibold "
          >
            Get Started with our app
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center sm:px-20"
          >
            Choose our products for unparalleled quality, innovative solutions,
            and a commitment to your mental well-being.
          </p>
          <div className="flex justify-center">
            <Link to="/chatbot">
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-btn"
            >
              Chat with S.A.M
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
