import React ,{useState,useEffect} from "react";
import Button from "./Button";

const Select = () => {
  const [checkboxStates, setCheckboxStates] = useState([0, 0, 0, 0]);

  const handleChange = (index) => {
    setCheckboxStates((prev)=>{
      let newArr = [...prev]
      newArr[index] =  newArr[index]===0 ? 1:0
      return newArr
    })
  };

 


  return (
    <div className="mb-8 text-2xl font-body w-full">
      <h3 class="mb-4  text-gray-900 dark:text-white">How are you feeling?</h3>
      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              checked={checkboxStates[0]}
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={()=>handleChange(0)}
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
              
            >
              Happy
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value=""
              checked={checkboxStates[1]}
              onChange={()=>handleChange(1)}

              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="react-checkbox-list"
              class="w-full py-3 ms-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
            >
              Sad
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value=""
              checked={checkboxStates[2]}
              onChange={()=>handleChange(2)}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="angular-checkbox-list"
              class="w-full py-3 ms-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
            >
              Anxious
            </label>
          </div>
        </li>
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              checked={checkboxStates[3]}
              onChange={()=>handleChange(3)}

              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox-list"
              class="w-full py-3 ms-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
            >
              Angry
            </label>
          </div>
        </li>
      </ul>
      <div className="w-full flex justify-center text-body mt-10">
        <Button newMoods={checkboxStates} />
      </div>
    </div>
  );
};

export default Select;
