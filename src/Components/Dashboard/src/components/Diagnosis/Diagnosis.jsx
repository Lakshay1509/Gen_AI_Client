import React , {useState} from "react";
import styled from "styled-components";
import {run} from "./index";
import Loader from "./Loader";

const Input = () => {

    const [symptoms, setSymptoms] = useState("");
    const [ans,setAns] = useState("");
    const [success,setSuccess] = useState(false);
    const [loading,setLoading] = useState(false);

    const handleClick = async() => {

        if(symptoms === "") return;
        console.log(symptoms);
        setLoading(true);
        const response = await run(`These are my medical symptoms: ${symptoms}, Please tell accordingly the medical diagnosis .Store the answer in the variable named description . Make text bold where the disease is mentioned.`);

        const data = JSON.parse(response);
        setAns(data.description);

        setSuccess(true);
        setLoading(false);
        
    }

  return (
    <StyledWrapper>
        <div className="flex flex-col justify-center items-center">
        <div className=" text-3xl">
            <h1>Quick Diagnosis ?</h1>
            </div>
      <div className="InputContainer mt-[10px] mb-[10px] flex gap-4">
        <input
          placeholder="Type your symptoms here"
          id="input"
          className="input"
          name="text"
          type="text"
            value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button className="bg-white p-4 rounded-full hover:bg-[#faedcd] h-10 flex justify-center items-center cursor-pointer
        "
        onClick={handleClick}
        >Diagnose</button>
      </div>
      <Loader display={loading}/>
      {success && (
      <div className="bg-white w-3/4 p-4 rounded-2xl mb-[30px]">{ans}</div>
      )}
      </div>
      
      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .InputContainer {
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom,rgb(227, 213, 255),rgb(255, 231, 231));
  border-radius: 30px;
  padding: 0 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

.input {
  width: 590px;
  height: 40px;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 15px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: 13.4px;
}

`;

export default Input;
