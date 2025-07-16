import React from 'react'
import '../styles/HomeContent.css';

export const HomeContent = () => {
  return (
    <div class="why-learn-section">
        
        <h3 class="section-title">Why Learn Tamil?</h3>
        <ul class="reasons-list">
            <li class="reason-item">
                <div class="accent-number">1</div>
                <div class="reason-content">
                    <div class="reason-emoji">🗣️</div>
                    <div class="reason-text">
                        <div class="reason-title">Connect Globally</div>
                        <div class="reason-description">Over 80 million speakers worldwide.</div>
                    </div>
                </div>
            </li>
            <li class="reason-item">
                <div class="accent-number">2</div>
                <div class="reason-content">
                    <div class="reason-emoji">🌍</div>
                    <div class="reason-text">
                        <div class="reason-title">Explore Culture</div>
                        <div class="reason-description">Classical dance, cinema, festivals, and timeless literature</div>
                    </div>
                </div>
            </li>
            <li class="reason-item">
                <div class="accent-number">3</div>
                <div class="reason-content">
                    <div class="reason-emoji">🧠</div>
                    <div class="reason-text">
                        <div class="reason-title">Train Your Mind</div>
                        <div class="reason-description">A unique script and sound system sharpen memory and creativity.</div>
                    </div>
                </div>
            </li>
            <li class="reason-item">
                <div class="accent-number">4</div>
                <div class="reason-content">
                    <div class="reason-emoji">❤️</div>
                    <div class="reason-text">
                        <div class="reason-title">Stay Close to Roots</div>
                        <div class="reason-description">Perfect for heritage learners wanting to speak with family and community.</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
