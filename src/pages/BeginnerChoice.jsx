import React from 'react'
import dora_intro from '../assets/dora_intro.gif';
import doraemon_intro from '../assets/doraemon_intro.gif';
import shinchan_intro from '../assets/shinchan_intro.gif';
import jackiechan_intro from '../assets/jackiechan_intro.gif';  
import mickey_intro from '../assets/mickey_intro.gif';
import minions_intro from '../assets/minion_intro.gif';
import '../styles/choose.css';



const BeginnerChoice = () => {
  return (
    <div className="character-container">
        <div className="character-item">
            <img src={dora_intro} alt="Dora" className="character-image"/>
            <p className="character-name">Dora</p>
        </div>
        
        <div className="character-item">
            <img src={doraemon_intro} alt="Doraemon" className="character-image"/>
            <p className="character-name">Doraemon</p>
        </div>
        
        <div className="character-item">
            <img src={shinchan_intro} alt="Shin Chan" className="character-image"/>
            <p className="character-name">Shin Chan</p>
        </div>
        
        <div className="character-item">
            <img src={jackiechan_intro} alt="Jackie Chan" className="character-image"/>
            <p className="character-name">Jackie Chan</p>
        </div>
        
        <div className="character-item">
            <img src={mickey_intro} alt="Mickey Mouse" className="character-image"/>
            <p className="character-name">Mickey Mouse</p>
        </div>
        
        <div className="character-item">
            <img src={minions_intro} alt="Minions" className="character-image"/>
            <p className="character-name">Minions</p>
        </div>
    </div>
  )
}

export default BeginnerChoice
