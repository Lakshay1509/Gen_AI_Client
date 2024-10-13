import React from "react";
import ReactMarkdown from "react-markdown";
import {logo1} from '../../assets/index.js'
const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-2 rounded-lg my-[10px] overflow-auto ${
            message.type === "user"
              ? "bg-chat text-font font-body"
              : "bg-theme text-font font-body text-lg"
          }`}
        >
          {message.type === "user" && (
            <span className="mr-2 font-medium text-gray-600">You:</span>
          )}
          {message.type === "bot" && (
            <span className="mr-2 font-bold text-gray-600">S.A.M:</span>
          )}

          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
