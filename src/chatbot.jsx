import React, { useState , useRef,useEffect} from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {send,delete1,logo1,gemini} from './assets/index.js'
import { useTypewriter,Cursor } from "react-simple-typewriter";
import { useSelector,useDispatch } from "react-redux";

// Style components using Tailwind CSS
import ChatHistory from './Components/ChatHistory/index.jsx';
import Loader from './Components/Loader.jsx';

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const [name, setName] = useState("");

 

  const apiKey = import.meta.env.VITE_REACT_API;
 
  // Initialize your Gemini API
  const genAI = new GoogleGenerativeAI(
    apiKey
  );
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are a dedicated Mental Healthcare Adviser and Psychologist. You are based out of India so answer accordingly. In this role, you are responsible for providing comprehensive mental health and emotional support to students. Your primary goal is to foster a safe and nurturing environment where students feel comfortable seeking help for a range of emotional and psychological issues. You will actively listen to their concerns, offer evidence-based guidance, and develop personalized strategies to help them navigate their challenges. Additionally, you will promote mental wellness through educational initiatives, workshops, and one-on-one counseling sessions. Your empathetic and non-judgmental approach is key to building trust and encouraging students to openly discuss their mental health. Your ultimate aim is to empower students with the tools and resilience needed to achieve emotional well-being and academic success.Keep your answer in maximum of 60-70 words.If you want to ask follow up's please ask them one by one Please block another queries that are not related to the role of a Mental Healthcare Adviser and Psychologist.
    
    Please answer the queries in context of prevoius conversation. using this JSON

    ${JSON.stringify([chatHistory.map((item) => item.message)])}
    
    `
    ,
  });
  

  // Handle user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Send message to Gemini API
  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch {
      console.error("Error sending message");
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Clear chat history
  const clearChat = () => {
    setChatHistory([]);
  };

  const [text] = useTypewriter({
    words: ['Feel Free to ask anything 😊! Your conversations are private and confidential. How can I help you today?'],
    typeSpeed: 15,
    delaySpeed : false,
  });
  
  useEffect(() => {
    if (!isLoading) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isLoading]);

  const contextName = (useSelector((state) => state.user.username));
  

  
  return (
    <div className="flex flex-col h-screen bg-theme overflow-auto">
      {/* Header */}
      <header className="bg-theme text-white py-4">
        <div className="container mx-auto text-left">
          <h1 className="text-3xl font-bold font-body" >Hi {contextName},{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                I'm S.A.M
          </span>
          </h1>
          <h2 className="mt-2 font-body text-white">{text}<Cursor /></h2>
          
        </div>
      </header>


      <main className="flex flex-col flex-grow container mx-auto px-4 py-8 mb-16">
      
        <ChatHistory chatHistory={chatHistory} />
      
        <Loader isLoading={isLoading} />
        <div ref={chatEndRef} />
      </main>

      {/* Footer with Input and Buttons */}
      <footer className="bg-theme p-4 fixed bottom-0 left-0 w-full">
        <div className="flex container mx-auto">
          <span className="mt-[15px] mr-[10px]"><img src={logo1} className="size-10 rounded-full"/></span><input
            type="text"
            className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 bg-search focus:ring-blue-500 mt-[10px] text-white"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleUserInput}
            disabled={isLoading}
          />
          <button
            className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={sendMessage}
            disabled={isLoading}
          >
            <img src={send} className="size-6"/>
          </button>
          <button
            className="ml-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            onClick={clearChat}
          >
            <img src={delete1} className="size-6"/>
          </button>
          
        </div>  
      </footer>
    </div>
  );
};

export default Chatbot;
