import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Stats from "./Stats.jsx";
import Select from "./Select.jsx";
import BarData from "../assets/BarData.jsx";
import LineData from "../assets/LineData.jsx";
import { setMoodContext, setWeeklyContext } from "../../../../User/user.js";
import { useDispatch } from "react-redux";
import MyComponent from "../../../Bento/Bento.jsx";
import Books from "./Books/Books.jsx";
import { Link } from "react-router-dom";
import Pie from "../assets/PieChart.jsx"
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Dashboard = () => {
  const [moods, setMoods] = React.useState([0, 0, 0, 0]);
  const [weekly, setWeekly] = React.useState([0, 0, 0, 0, 0, 0, 0]);

  const contextId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMood = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/users/getMood`,
          {
            params: {
              id: contextId,
            },
          }
        );
        setMoods(Array.from(response.data.message));

        const response2 = await axios.get(
          `http://localhost:8000/api/v1/users/getWeekly`,
          {
            params: {
              id: contextId,
            },
          }
        );
        console.log(response2.data.message);
        setWeekly(Array.from(response2.data.message));
        dispatch(setWeeklyContext(Array.from(response2.data.message)));
      } catch (error) {
        console.error("Error fetching mood:", error);
      }
     
    };

    if (contextId) {
      fetchMood();
    }
  }, [contextId]);

  useEffect(() => {
    if (moods.length > 0) {
      calculate(moods);
    }
  }, [moods]);

  // useEffect(() => {
  //   console.log(weekly);
  // }, [weekly]);

  

  function calculate(moods) {
    let arr = [...moods]; // Clone the array to avoid direct state mutation

    let total = arr.reduce((acc, mood) => acc + mood, 0); // Calculate total dynamically

    // Ensure total is not zero to avoid division by zero
    if (total > 0) {
      arr = arr.map((mood) => Math.round((mood / total) * 100)); // Calculate percentages
    } else {
      arr.fill(0); // Fill with zeros if total is zero
    }

    dispatch(setMoodContext(arr));
  }

  return (
    <div className="grow p-8 font-body bg-[#bde0fe]">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <Stats />

      <Select />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <LineData moods={useSelector((state)=> state.user.weekly)} />
        </div>
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <BarData moods={useSelector((state) => state.user.moods)} />
        </div>
      </div>
      <Pie/>
      <MyComponent />

      <Books />
      <div className="text-center mt-[30px] text-lg mb-[20px] ">
      <span className="bg-[#fefae0] p-4 rounded-xl text-sm">Need Assistance ? Feel Free to ask anything</span>
      </div>
      <div className="w-full flex justify-center items-center">

      <Link to="/chatbot">
        <button className="primary-btn">Chat with S.A.M</button>
      </Link>
      </div>

      

    </div>
  );
};

export default Dashboard;
