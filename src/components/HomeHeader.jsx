import React from 'react'
import '../styles/HomeHeader.css'; 
import downArrow from '../assets/down_arrow.png';
import {HomeContent} from './HomeContent';
import { HomeContent2 } from './HomeContent2';

function scrollToContent() {
  const contentSection = document.querySelector('.demo-content');
  contentSection.scrollIntoView({ behavior: 'smooth' });
}

export const HomeHeader = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="tamil-bg">த</div>
        <div className="tamil-bg">மி</div>
        <div className="tamil-bg">ழ்</div>

        <div className="content-wrapper">
            <h1 className="hero-title">Learn Tamil</h1>
            <p className="hero-subtitle">
                Dive into the <span className="accent-text">world's oldest living language</span> – through stories, songs, and fun lessons!
            </p>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToContent()}>
            <div className="scroll-text">Explore</div>
            <div className="scroll-arrow">
                <img src={downArrow} alt="scroll" />
            </div>
        </div>
    </section>
    
    <section className="demo-content"   >
        <HomeContent />
    </section>
    </div>
  )
}
