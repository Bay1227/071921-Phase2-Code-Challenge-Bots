import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({bots, }) {
  const [botChosen, setBotChosen] = useState ([])
  const [result, setResult] = useState([])
  //start here with your code for step one
  // setBotChosen(
  //   bots.map((bot) => bot.id === bot.id)
  // )

  function chosenBot (){
    const chosenbots = bots.filter((bot) => bot.id === botChosen.id)
    setResult(chosenbots)



  }

  console.log({bots})

  return (
    <div>
      <YourBotArmy result={result} />
      {bots.map((bot)=> 
      <BotCollection bot={bot} key={bot.id} image={bot} setBotChosen={setBotChosen} /> )}
      
    </div>
  )
}

export default BotsPage;
