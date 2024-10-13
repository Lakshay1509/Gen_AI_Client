import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { run } from "./index.js";
import Features from "./Features.jsx";
import Loader from "../Dashboard/src/components/Loader.jsx";
import {gemini} from "../../assets/index.js"

const MyComponent = () => {
  const mood = useSelector((state) => state.user.moods);
  const [tips, setTips] = useState([]);
  const [success, setSuccess] = React.useState(false);

  useEffect(() => {
    async function generate() {

      try{
      const response = await run(
        `Provide me 4 tips where following are my mood stats: \nhappy : ${mood[0]} \nsad : ${mood[1]} \nanxious : ${mood[2]} \nangry : ${mood[3]} \nWith a heading, a short description, and each tip as a new JSON object with heading, description, and subheading for which mood it's a cure. Also, generate a link for the corresponding mood. Add some emojis`
      );  
      
        const data = JSON.parse(response);
        
        
        if (data && Array.isArray(data.tips)) {
          setSuccess(true);
          setTips(data.tips);
          
          
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error in generating tips:", error);
      }
    }

    generate();
  }, []);

  

  return (
    <div className="w-full mt-[50px]">
      
      
      <div >
        <div className="flex justify-center items-center">
        <span><img src={gemini} className="size-10 mr-[10px]"/></span>
        <h1 className="font-extrabold text-4xl text-center
        ">AI Generated Tips for You:</h1>
        </div>
        <div className="flex justify-center mt-[20px]">
        <Loader display={!success} />
        </div>

      </div>
      <Features tips={tips} />
      
    </div>
  );
};

export default MyComponent;
