import React from 'react'

const Podcasts = ({podcasts}) => {
  return (
    <div className="w-1/2  gap-4 mt-[20px]">
    <div>
      <h1 className="text-start text-2xl mb-[10px] font-bold  ">
        {" "}
        Suggested podcasts for you :{" "}
      </h1>
      {podcasts?.map((podcasts, index) => (
      
      <div className="bg-white p-4 rounded-xl my-[10px] w-4/5"
      key={index}>
        <h1 className="text-2xl font-semibold">
          {podcasts.name}
        </h1>
        <p className="text-sm">
          {podcasts.description}
        </p>

        <a
          
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
  )
}

export default Podcasts