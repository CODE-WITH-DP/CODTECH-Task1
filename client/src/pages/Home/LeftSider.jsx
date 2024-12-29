import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          
        <a href="">
        <i className="ri-facebook-circle-line text-gray-400 ">
        </i>
        </a>
          
        <a href="">
        <i className="ri-mail-ai-line text-gray-600 "></i>
        </a>
        
        <a href="">
        <i className="ri-instagram-line text-gray-600 "></i>
        </a>
        
        <a href="https://www.linkedin.com/in/dhairya-patel-a6558a1aa/">
        <i className="ri-linkedin-fill text-gray-600 "></i>
        </a>

        <a href="https://github.com/CODE-WITH-DP">
        <i className="ri-github-fill text-gray-600 "></i>
        </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
