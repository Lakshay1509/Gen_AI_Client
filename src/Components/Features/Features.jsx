import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "24/7 Support",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Always available to listen and provide support, no matter the time of day",
    aosDelay: "300",
  },
  {
    name: "Personalized Self-Care Plans",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Tailored strategies and exercises based on individual needs and preferences, designed to improve mental well-being.",
    aosDelay: "500",
  },
  {
    name: "Progress Tracking",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Regular check-ins and mood tracking to help users monitor their progress and adjust their self-care plans accordingly",
    aosDelay: "700",
  },
];

const Features = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Why Choose Us
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
                <a
                  href={data.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
