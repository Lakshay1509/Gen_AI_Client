import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../context/ThemeContextProvider'
import { useSelector } from 'react-redux';


const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
    const storedUsername = useSelector((state) => state.user.username);
    console.log(
      storedUsername
    )
  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white font-body text-4xl'>
        <h1>Hi {storedUsername} !</h1>
        <button onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
       
    </div>
  )
}

export default Navbar