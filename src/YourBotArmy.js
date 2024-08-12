import React from "react";
import './App.css';

function YourBotArmy({ bots, onBotRemove, onBotDelete }) {
    return (
        <div className="myBot">
            <h2>YOUR BOT ARMY</h2>
            {bots.length > 0 ? (
                bots.map((bot) => (
                    <div key={bot.id} className="bot-item">
                        <img src={bot.avatar_url} alt={bot.name} />
                        <h2>{bot.name}</h2>
                        <p><strong>Health:</strong> {bot.health}</p>
                        <p><strong>Damage:</strong> {bot.damage}</p>
                        <p><strong>Armor:</strong> {bot.armor}</p>
                        <p><strong>Class:</strong> {bot.bot_class}</p>
                        <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
                        <p><strong>Created At:</strong> {new Date(bot.created_at).toLocaleDateString()}</p>
                        
                        <button
                          className="remove-button"
                          onClick={() => onBotRemove(bot.id)}>
                            Remove from Army
                        </button>
                        
                        <button 
                          className="delete-button"
                          onClick={() => onBotDelete(bot.id)}>
                            &#10006; {/* Unicode character for red "X" */}
                        </button>
                    </div>
                ))
            ) : (
                <>
                 <p>No bots in your army.</p>
                 <p><strong>Click on the Available Bots to add them to your Army</strong></p>
                </>
            )}
        </div>
    );
}

export default YourBotArmy;