import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { run } from "./index.js";
import Loader from "../Loader.jsx";

const Books = () => {
  const mood = useSelector((state) => state.user.moods);
  const [books, setBooks] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [success, setSuccess] = React.useState(false);
  const [quote, setQuote] = React.useState("");

  useEffect(() => {
    async function generate() {
      const response =
        await run(`Provide me 3 podcast link of google search for the following moods .my mood stats: \nhappy : ${mood[0]} \nsad : ${mood[1]} \nanxious : ${mood[2]} \nangry : ${mood[3]} \n  Also, provide me with a brief description of each podcast.Provide me 3 books link of google search.Use some emojis. Also, provide me with a brief description of each book and heading.Store books response in variable named booksResponse and podcast response in variable named podcastResponse.Store book title in variable named name and book description in variable named description and book link in variabled named link .Store podcast title in variable named name and podcast description in variable named description. 
            All links should be a google search link not from any other website.Also generate a Quote with emojis ans store it in a variable named quote. `);
      const data = JSON.parse(response);
      setBooks(data.booksResponse);
      setPodcasts(data.podcastResponse);
      setQuote(data.quote);
      setSuccess(true);
    }
    if (mood.length) {
      generate();
    }
  }, [mood]);

  return (
    <>
      <div className="w-full md:flex ">
        <div className=" gap-4 mt-[20px] md:w-1/2 ">
          <h1 className="text-start text-2xl mb-[10px] font-bold  ">
            {" "}
            Suggested reading for you :{" "}
          </h1>

          {books.map((book, index) => (
            <div
              className="bg-white p-4 rounded-xl my-[10px] w-4/5"
              key={index}
            >
              <h1 className="text-2xl font-semibold">{book.name}</h1>
              <p className="text-sm">{book.description}</p>

              <a
                href={book.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-blue-500"
              >
                Learn More{" "}
              </a>
            </div>
          ))}
        </div>

        <div className="gap-4 mt-[20px] md:w-1/2">
          <h1 className="text-start text-2xl mb-[10px] font-bold  ">
            {" "}
            Suggested podcasts for you :{" "}
          </h1>
          {podcasts.map((podcast, index) => (
            <div
              className="bg-white p-4 rounded-xl my-[10px] w-4/5"
              key={index}
            >
              <h1 className="text-2xl font-semibold">{podcast.name}</h1>
              <p className="text-sm">{podcast.description}</p>

              <a
                href={podcast.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-blue-500"
              >
                Learn More{" "}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Loader display={!success} />
      </div>
      <div className="w-full  flex flex-col justify-center items-center mt-[20px]">
        <div className="w-3/4 flex justify-center p-4 bg-white rounded-xl mb-[10px]">
          <p className="font">{quote}</p>
        </div>
        <div className="w-3/4 flex justify-center p-4 bg-white rounded-xl">
          <p className="font">
            National Helpline Number : 011-22592818 , 1800-599-0019
          </p>
        </div>
      </div>
    </>
  );
};

export default Books;
