import React, { useEffect, useState } from "react";
import { toggleHamburgerMenu } from "../Utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";

const Head = () => {
  const [searchQuerry, setSearchQuery] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerry]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerry);
    const json = await data.json();
  };

  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleHamburgerMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenu()}
          alt="menu"
          className="h-8 cursor-pointer"
          src="https://openclipart.org/image/2000px/221605"
        />
        <a href="/">
          <img
            alt="logo"
            className="h-8 mx-2"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
          />
        </a>
      </div>
      <div className="flex col-span-10  ">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
          value={searchQuerry}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className=" border border-gray-500 p-2 rounded-r-full">
          Search
        </button>
        <img
          className="h-8 m-1"
          alt="recod-logo"
          src="https://e7.pngegg.com/pngimages/440/783/png-clipart-red-microphone-button-illustration-symbol-circle-font-voice-recoder-microphone-sound-thumbnail.png"
        />
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
        />
      </div>
    </div>
  );
};

export default Head;
