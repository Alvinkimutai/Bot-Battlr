import React, { useState, useEffect } from "react";
import './App.css';

function BotCollection({ onBotSelect }) {
  const [bots, setBot] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => {
        setBot(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="botCollection">
      <h2>AVAILABLE BOTS</h2>
      {bots.length > 0 ? (
        bots.map((bot) => (
          <div key={bot.id} onClick={() => onBotSelect(bot)} className="bot-item">
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p><strong>Health:</strong> {bot.health}</p>
            <p><strong>Damage:</strong> {bot.damage}</p>
            <p><strong>Armor:</strong> {bot.armor}</p>
            <p><strong>Class:</strong> {bot.bot_class}</p>
            <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
            <p><strong>Created At:</strong> {new Date(bot.created_at).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No bots available.</p>
      )}
    </div>
  );
}

export default BotCollection;