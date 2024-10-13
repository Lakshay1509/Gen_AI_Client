import React from 'react'
import Card from "./Card";
import { happy, sad, anxious, angry } from "../images/index.js";
import { useSelector } from 'react-redux';

const Stats = () => {
    const moods  =  useSelector((state) => state.user.moods)

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card icon={happy} title="Happy" value={ moods[0]+"%"} />
        <Card icon={sad} title="Sad" value={moods[1] +  "%"} />
        <Card icon={anxious} title="Anxious" value={moods[2] + "%"} />
        <Card icon={angry} title="Angry" value={ moods[3]+ "%"} />
      </div>
    </div>
  )
}

export default Stats