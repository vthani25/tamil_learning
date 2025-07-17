import React from 'react'
import '../styles/HomeContent2.css';

export const HomeContent2 = () => {

  return (
    
    <div>
        <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
    </div>

    <section className="tamil-history-section">

    <div className="tamil-letter">ஈ</div>
    <div className="tamil-letter">ச</div>
    <div className="tamil-letter">ஔ</div>
    <div className="tamil-letter">ய்</div>
    <div className="tamil-letter">ழ</div>

        <div className="section-header">
            <h1 className="section-title">📜 Tamil History</h1>
            <p className="section-subtitle">A Journey Through Time</p>
            <div className="heritage-badge">
                <div className="heritage-text">🏺 Ancient Heritage 🏺</div>
                <div className="heritage-subtext">More than 2,000 years of civilization</div>
            </div>
        </div>

        <div className="timeline-container">
            <div className="timeline-line"></div>

            <div className="timeline-item">
                <div className="timeline-content">
                    <h3 className="era-title">Ancient Origins</h3>
                    <p className="era-description">
                        More than 2,000 years old, Tamil culture stands as one of the world's oldest continuous civilizations. Ancient inscriptions dating back to the 3rd century BCE mark the beginning of recorded Tamil history, revealing a sophisticated society with advanced knowledge of literature, trade, and governance.
                    </p>
                    <div className="era-details">
                        <div className="era-highlight">Archaeological Evidence:</div>
                        Stone inscriptions, pottery fragments, and ancient coins tell the story of early Tamil settlements across South India and Sri Lanka, showcasing a vibrant maritime culture that connected diverse civilizations.
                    </div>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-content">
                    <h3 className="era-title">The Golden Sangam Age</h3>
                    <p className="era-description">
                        The Sangam Age represents the pinnacle of classNameical Tamil literature and philosophy. During this extraordinary period, scholars, poets, and philosophers gathered in literary academies to create timeless masterpieces that continue to influence Tamil culture today.
                    </p>
                    <div className="era-details">
                        <div className="era-highlight">Literary Achievements:</div>
                        Epic poems like Tolkāppiyam and Silappatikaram were composed, establishing grammatical foundations and narrative traditions that shaped Tamil literature for millennia.
                    </div>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-content">
                    <h3 className="era-title">Evolution & Recognition</h3>
                    <p className="era-description">
                        Tamil has undergone continuous evolution from ancient palm-leaf manuscripts to modern digital communication, adapting to changing times while preserving its essential character and cultural depth.
                    </p>
                    <div className="era-details">
                        <div className="era-highlight">Global Recognition:</div>
                        Officially recognized as a Classical Language of India and celebrated as part of global cultural heritage, Tamil continues to thrive as a living language connecting millions worldwide.
                        <div className="heritage-badge">
                            <div className="heritage-text">🏆 Classical Language Status 🏆</div>
                            <div className="heritage-subtext">Honored by UNESCO & Government of India</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
