import React from 'react'
import '../styles/HomeContent.css';
import {HomeContent2} from './HomeContent2';

export const HomeContent = () => {
  return (
    <div className="why-learn-section">

        <h3 className="section-title">Why Learn Tamil?</h3>
        <ul className="reasons-list">
            <li className="reason-item">
                <div className="accent-number">1</div>
                <div className="reason-content">
                    <div className="reason-emoji">🗣️</div>
                    <div className="reason-text">
                        <div className="reason-title">Connect Globally</div>
                        <div className="reason-description">Over 80 million speakers worldwide.</div>
                    </div>
                </div>
            </li>
            <li className="reason-item">
                <div className="accent-number">2</div>
                <div className="reason-content">
                    <div className="reason-emoji">🌍</div>
                    <div className="reason-text">
                        <div className="reason-title">Explore Culture</div>
                        <div className="reason-description">Classical dance, cinema, festivals, and timeless literature</div>
                    </div>
                </div>
            </li>
            <li className="reason-item">
                <div className="accent-number">3</div>
                <div className="reason-content">
                    <div className="reason-emoji">🧠</div>
                    <div className="reason-text">
                        <div className="reason-title">Train Your Mind</div>
                        <div className="reason-description">A unique script and sound system sharpen memory and creativity.</div>
                    </div>
                </div>
            </li>
            <li className="reason-item">
                <div className="accent-number">4</div>
                <div className="reason-content">
                    <div className="reason-emoji">❤️</div>
                    <div className="reason-text">
                        <div className="reason-title">Stay Close to Roots</div>
                        <div className="reason-description">Perfect for heritage learners wanting to speak with family and community.</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
