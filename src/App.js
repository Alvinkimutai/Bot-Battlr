import React, { useState } from "react";
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  const addToArmy = (bot) => {
    if (!selectedBots.some(existingBot => existingBot.id === bot.id)) {
      setSelectedBots((prevBots) => [...prevBots, bot]);
      alert(`${bot.name} added to your army!` )
    } else {
      alert('This bot is already in your army!');
    }
  };

  const removeFromArmy = (botId) => {
    setSelectedBots((prevBots) => prevBots.filter(bot => bot.id !== botId));
  };

  const deleteBot = (botId) => {
    
    const confirmed = window.confirm("Are you sure you want to delete this bot?");
    if (confirmed) {
     
      setSelectedBots((prevBots) => prevBots.filter(bot => bot.id !== botId));

      
      fetch(`http://localhost:3000/bots/${botId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          console.log('Bot deleted successfully');
        } else {
          console.error('Failed to delete bot');
        }
      })
      .catch(error => {
        console.error('Error deleting bot:', error);
      });
    }
  };

  return (
    <>
    <h1 id="heading">BUILD YOUR OWN BOT ARMY</h1>
    <div className="botclass">
      <YourBotArmy bots={selectedBots} onBotRemove={removeFromArmy} onBotDelete={deleteBot} />
      <BotCollection onBotSelect={addToArmy} />
    </div>
    </>
  );
}

export default App;