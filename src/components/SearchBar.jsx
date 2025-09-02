import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({search}) => {
  const [inputmaterail, setInputmaterail] = useState()
    const handleKeyPress = (e) => { // For now leave this function
         if (e.key === 'Enter'){
            console.log("I am good")
         }
    }
    const handleInput = (e) => {
      let inputValue = e.target.value
      setInputmaterail(inputValue)
    }

    return (
      <div className="bg-gray-800 flex justify-center items-center gap-3 m-3">
      <input
        type="text"
        placeholder="Enter city name..."
        onChange={(e) => {handleInput(e)}}
        className="bg-gray-900 text-white  px-4 py-2 focus:outline-none border border-gray-900 rounded-3xl w-2xs"
        />
      <button  className="bg-gray-800 text-white px-2 py-1.5 rounded-3xl cursor-pointer"> <Search onClick={() => search(inputmaterail)} onKeyPress={(e) => {handleKeyPress(e)}} className="text-green-600 font-bold active:text-green-900" /> </button>
    </div>
  );
};

export default SearchBar;
