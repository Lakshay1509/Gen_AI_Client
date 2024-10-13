import React ,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMoodContext, setWeeklyContext } from "../../../../User/user.js";
import axios from "axios";
import ChartData from "../assets/BarData";

const Button = ({ newMoods }) => {
  const contextId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const [moods, setMoods] = React.useState([0, 0, 0, 0]);
  const [weekly, setWeekly] = React.useState([0, 0, 0, 0, 0, 0, 0]);
  

  const moodJson = {
    mood: newMoods,
  };

  const weeklyJson = {
    mood : newMoods,
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/users/updateMood`,
        moodJson,
        {
          params: {
            id: contextId,
          },
        }
      );

      setMoods(Array.from(response.data.message));
      const response2 =await axios.put(
        `http://localhost:8000/api/v1/users/updateMoodWeek`,
        weeklyJson,
        {
          params: {
            id: contextId,
          },
        }
      ); 
      
      dispatch(setWeeklyContext(Array.from(response2.data.message)));
    } catch (error) {
      throw error;
    }
  };

 

  

  useEffect(() => {
    if (moods.length > 0) {
      calculate(moods);
    }
  }, [moods]);

  function calculate(moods) {
    let arr = [...moods]; // Clone the array to avoid direct state mutation

    let total = arr.reduce((acc, mood) => acc + mood, 0); // Calculate total dynamically

    // Ensure total is not zero to avoid division by zero
    if (total > 0) {
      arr = arr.map(mood => Math.round((mood / total) * 100)); // Calculate percentages
    } else {
      arr.fill(0); // Fill with zeros if total is zero
    }

    
    dispatch(setMoodContext(arr));

  }

 



  return (
    <button
      className="bg-blue-950 text-white border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
      onClick={handleSubmit}
    >
      <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
      Update
    </button>
  );
};

export default Button;
