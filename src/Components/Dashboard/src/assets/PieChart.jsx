import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
const Pie = () => {
  const [week, setWeek] = React.useState();
  const [weekend, setWeekend] = React.useState();

  const mood = useSelector((state) => state.user.weekly);

  React.useEffect(() => {
    setWeek(mood[0] + mood[1] + mood[2] + mood[3] + mood[4]);
    setWeekend(mood[5] + mood[6]);
  }, [mood]);

  React.useEffect(() => {
    console.log(week, weekend);
  }, [week, weekend]);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-[20px] bg-white rounded-xl shadow-lg py-[15px]">
      <h1 className="text-start text-2xl mb-[10px] font-semibold  ">
        {" "}
        WeekDay V/s Weekend{" "}
      </h1>

      <PieChart
        data={[
          { title: "Week", value: week, color: "#E38627" },
          { title: "Weekend", value: weekend, color: "#C13C37" },
        ]}
        style={{ width: "200px", height: "200px" }} // Set width and height here
      />
      <div className="flex justify-center items-center gap-4 mt-[5px]">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#E38627]"></div> {/* Weekday color box */}
          <div>Weekday</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#C13C37]"></div> {/* Weekend color box */}
          <div>Weekend</div>
        </div>
      </div>
    </div>
  );
};

export default Pie;
