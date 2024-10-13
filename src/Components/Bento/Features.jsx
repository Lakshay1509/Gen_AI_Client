import React from 'react';

const Features = ({ tips }) => {
  return (
    <>
    <div className='w-full'>
        
        <div className='md:flex md:justify-center'>
            {tips.map((tip, index) => (
            <div key={index} className='w-full p-4 md:w-1/4 '>
                <div className='bg-gray-100 p-4 rounded-lg'>
                <h2 className='font-bold text-xl'>{tip.heading}</h2>
                <p className='mt-2'>{tip.description}</p>

                <a
                    href={`https://www.google.com/search?q=${tip.link}`}
                    target='_blank'
                    rel='noreferrer'
                    className='mt-2 block text-blue-500'
                >
                    Learn more
                </a>
                </div>
            </div>
            ))}
        </div>
    </div>
    </>
  );
};

export default Features;
