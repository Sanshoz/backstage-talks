import React from "react";
import { useNavigate } from "react-router-dom";




const ImageComponent = (props) => {
  const img = props.imgUrl
  const txtPicture = props.txtPicture
  const artistName = props.artistName
  const picture = props.picture
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






  return (
    <div
      className="flex flex-col items-center w-full h-full child justify-center z-10"
    >
            <div className="absolute top-0 left-0 mt-4 ml-4 text-xl md:invisible">FAKE BACKSTAGE</div>
      <div className="book"  style={{height: "500px"}}>
        <img
          src={img}
          className="h-80 md:h-auto w-auto h-auto max-h-[100%]"
          alt="book image"
          
        /> 
      </div>

      <div className="text-center w-96">
        Issue #{issue}<br />
        <div className="mb-3 mt-3 text-sm">
          <div className="text-white text-xl">{picture}</div>
           {artistName}
        </div>  
         
        {txtPicture}
      </div>
      <p className={`text-center mt-20 mb-2 bottom-0  sm:hidden ${setVisibility(issue)} `}  >
        thank you to see my site. I'll do more soon. <br /><a href="https://github.com/Sanshoz"><box-icon name='github' type='logo' animation='tada' /></a>
        <br /> <div className="text-xs">  </div>
        <br /> <div className="text-xs">github</div>
      </p>
    </div>
  );
};

export default ImageComponent;
