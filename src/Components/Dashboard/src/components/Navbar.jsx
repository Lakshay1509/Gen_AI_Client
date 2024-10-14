import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../context/ThemeContextProvider'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
    const storedUsername = useSelector((state) => state.user.username);
    console.log(
      storedUsername
    )

  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white font-body '>
        <h1 className='text-4xl'>Hi {storedUsername} !</h1>
        <Link to="/chatbot">
                <button className="primary-btn ">Chat with S.A.M</button>
        </Link>
       
    </div>
  )
}

export default Navbar