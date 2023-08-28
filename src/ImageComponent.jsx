import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";



const ImageComponent = (props) => {
  const color = props.color;
  const issue = props.issue;
  const navigate = useNavigate()

  

  // const handleInfoUpdate = (info) => {
  //   setIssueInfo(info);
  // };

  const setVisibility = (issue) => {
    console.log(issue)
    if(issue !== 5){
      return "hidden";
        
    }
  }


  //    const scrollTop = scrollContainerRef.current.scrollTop;

  const navigateTo = (issue) => {
    console.log("navigateTo")
    navigate(`/test`)
} 

const componentRef = useRef(null);



  return (
    <div
      className="flex flex-col items-center w-full h-full child justify-center z-10"
      ref={componentRef}
    >
            <div className="absolute top-0 left-0 mt-4 ml-4 text-xl md:invisible">FAKE BACKSTAGE</div>
      <div className="book " onClick={()=>navigateTo(issue)}>
        <img
          src={`https://placehold.co/400x500/${color.replace('#', '')}/white?text=Hello+World`}
          className="h-80 md:h-auto cursor-pointer"
          alt="book image"
          
        /> 
      </div>

      <div className="text-center">
        Issue #{issue}<br />
        is sold out. <br />
        If you are lucky, you may get the last pieces in selected stores.
      </div>
      <p className={`text-center mt-20 mb-2 bottom-0  sm:hidden ${setVisibility(issue)} `}  >
        Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
        <br /> <div className="text-xs">© 2023 Published by Büro Milk</div>
        <br /> <div className="text-xs">Privacy Policy</div>
      </p>
    </div>
  );
};

export default ImageComponent;
