import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  
  
  useEffect(()=> {
    fetch('http://localhost:8002/bots')
    .then((r) => r.json())
    .then((json) => setBots(json));
  }, []);

  function enlistBot(id) {
    setBots(
      bots.map((bot) => (bot.id === id ? {...bot, enlisted: true} : bot))
    );
  }

  function releaseBot(id) {
    setBots(
      bots.map((bot) => (bot.id === id ? {...bot, enlisted: false} : bot))
    );
  }

 
  function dischargeBot(id){
    // console.log('discharging', id)
    //console.log(bots.filter((bot) => bot.id !== id)) // this will log the rest of the bots except I deleted 'x'-d ones. if array is hundred after I click the x it should be 99
    setBots(bots.filter((bot) => bot.id !== id));
  }


  return (
    <div>
      <YourBotArmy bots={bots.filter((bot) => bot.enlisted)} handleClick={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} handleClick={enlistBot} dischargeBot={dischargeBot} /> 
      
      
    </div>
  )
}

export default BotsPage;
