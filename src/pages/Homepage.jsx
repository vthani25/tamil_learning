import React from 'react';
import { HomeHeader } from '../components/HomeHeader';
import { HomeContent2 } from '../components/HomeContent2';
import { HomeContent3 } from '../components/HomeContent3';

export const Homepage = () => {
  return (
    <div>
      <HomeHeader />
      <HomeContent3/>
      <HomeContent2/>
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