import React from 'react'
import {Line} from 'react-chartjs-2'
const LineData = ({moods}) => {

    const dataLine = (arr)=>{
        return {
            labels: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label: 'Sales',
                    data: arr,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                },
            ],
        };
    }




  return (
    

    <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Overall Score over a Week</h3>
          <Line data={dataLine(moods)} />
        </div>
  )
}

export default LineData