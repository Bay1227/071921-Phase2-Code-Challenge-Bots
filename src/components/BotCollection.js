import React from "react";

function BotCollection({bot, setBotChosen}) {
  // Your code here
  const {id, name, avatar_url, chosen } = bot;
  function handleClick(e){
    e.preventDefault();
    setBotChosen(e.target.value)
    console.log(e.target.value)


  }


  return (
    <div className="ui four column grid" >
      <div className="row"  onClick={(e)=> setBotChosen(e.target.value)} >
        
        <h2>{name}</h2>
        <img src={avatar_url}
        alt={name} />
       
        {/* Collection of all bots */}
      </div>
    </div>
  );
}

export default BotCollection;
