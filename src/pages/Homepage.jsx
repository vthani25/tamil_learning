import React from 'react';
import { HomeHeader } from '../components/HomeHeader';

export const Homepage = () => {
  return (
    <div>
      <HomeHeader />
      
      <div>
        <h3>📌 Why Learn Tamil?</h3>
        <ul>
            <li>🗣️ Connect Globally – Over 80 million speakers worldwide.</li>
            <li>🌍 Explore Culture – Classical dance, cinema, festivals, and timeless literature</li>
            <li>🧠 Train Your Mind – A unique script and sound system sharpen memory and creativity.</li>
            <li>❤️ Stay Close to Roots – Perfect for heritage learners wanting to speak with family and community.</li>
        </ul>
      </div>
      <div>
        <h3>📜 A Glimpse Into Tamil History</h3>
        <p>More than 2,000 years old – Ancient inscriptions date to the 3rd century BCE.</p>
        <p>Sangam Age – Flourishing of classical poetry and philosophy.</p>
        <p>Continuous evolution – From palm-leaf manuscripts to modern social media Tamil.</p>
        <p>Recognized as a Classical Language of India and part of global cultural heritage.</p>
      </div>
      <div>
        <h3>🌟 Fun Facts!</h3>
        <p>Tamil is the official language in Tamil Nadu (India), Sri Lanka, and Singapore.</p>
        <p>Tamil movies and music have global fanbases from Toronto to Tokyo.</p>
        <p>The script has 12 vowels & 18 consonants, creating over 200 compound letters.</p>
        <p>The Thirukkural, a 2,000-year-old text, has been translated into more than 80 languages.</p>
      </div>
      <div>
        <h3>✏️ Ready to Start?</h3>
        <p>Interactive & friendly learning:</p>
        <ul>
          <li>🎧 Audio & video lessons – Hear native pronunciation.</li>
          <li>📝 Quizzes & games – Remember words with ease.</li>
          <li>📖 Everyday phrases – Speak confidently in real life.</li>
          <li>✍️ Learn to write – Step-by-step Tamil script practice.</li>
        </ul>
      </div>
      <div>
        <h2>🚀 Start Learning Now!</h2>
        <button onClick={()=>alert('Beginner')}>Beginner</button>
        <button onClick={()=>alert('Intermediate')}>Intermediate</button>
        <button onClick={()=>alert('Advanced')}>Advanced</button>
      </div>
      <footer>
        <p>We’re a small team of language lovers and native speakers on a mission to make Tamil learning accessible, modern, and fun for everyone — wherever you are in the world.</p>
        <img src="/instagram_logo.png" alt="Insta" />
        <img src="/linkedin_logo.png" alt="Linkedin" />
        <img src="/facebook_logo.png" alt="Facebook" />
        <p>© 2025 Learn Tamil. All rights reserved.</p>
      </footer>
    </div>
    
  );
}