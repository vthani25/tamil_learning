import React from 'react';
import '../styles/Homepage.css';
import { HomeHeader } from '../components/HomeHeader';
import { HomeContent2 } from '../components/HomeContent2';
import { HomeContent3 } from '../components/HomeContent3';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
  const navigate = useNavigate();
    const handleChoice = () => {
        navigate('/choose');
    };
  return (
    <div>
      <HomeHeader />
      <HomeContent3/>
      <HomeContent2/>
    <section className="learning-section">
        <div className="decorative-elements">
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="decorative-circle circle-3"></div>
        </div>
        
        <div className="content">
            <h3 className="title">✏️ Ready to Start?</h3>
            <p className="subtitle">Interactive & friendly learning experience</p>
            
            <div className="features-grid">
                <div className="feature-card">
                    <span className="feature-icon">🎧</span>
                    <h4 className="feature-title">Audio & Video Lessons</h4>
                    <p className="feature-description">Hear native pronunciation and immerse yourself in authentic Tamil sounds</p>
                </div>
                
                <div className="feature-card">
                    <span className="feature-icon">📝</span>
                    <h4 className="feature-title">Quizzes & Games</h4>
                    <p className="feature-description">Remember words with ease through engaging interactive activities</p>
                </div>
                
                <div className="feature-card">
                    <span className="feature-icon">📖</span>
                    <h4 className="feature-title">Everyday Phrases</h4>
                    <p className="feature-description">Speak confidently in real life with practical conversational skills</p>
                </div>
                
                <div className="feature-card">
                    <span className="feature-icon">✍️</span>
                    <h4 className="feature-title">Learn to Write</h4>
                    <p className="feature-description">Step-by-step Tamil script practice with guided writing exercises</p>
                </div>
            </div>
            
            <button className="cta-button" onClick={handleChoice}>Start Learning Now</button>
        </div>
    </section>
    <Footer />
    </div>
    
  );
}