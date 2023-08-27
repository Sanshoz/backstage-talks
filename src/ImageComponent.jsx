import React from "react";

const ImageComponent = (props) => {
  const color = "#" + props.color;
  const imageColor = props.color;
  const issue = props.issue;

  const setVisibility = (issue) => {
    if(issue !== '1'){
        return "invisible"
    }
  }

  return (
    <div
      className="flex flex-col items-center w-full h-full child justify-center"
      style={{ backgroundColor: color }}
    >
            <div className="absolute top-0 left-0 mt-4 ml-4 text-xl md:invisible">FAKE BACKSTAGE</div>
      <div className="book">
        <img
          src={`https://placehold.co/400x500/${imageColor}/white?text=Hello+World`}
          className="h-80 md:h-auto"
          alt="book image"
        />
      </div>

      <div className="text-center">
        Issue #{issue}<br />
        is sold out. <br />
        If you are lucky, you may get the last pieces in selected stores.
      </div>
      <p className={`text-center bottom-0 md:invisible ${setVisibility(issue)} `} >
        Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
        <br />© 2023 Published by Büro Milk
        <br />Privacy Policy
      </p>
    </div>
  );
};

export default ImageComponent;
