import React, { useState, useEffect, useRef } from 'react';

import './PreTestStunning.css'; // Import your CSS styles

function PreTestStunning({ onClickBtn }) {
const [visibleCards, setVisibleCards] = useState(new Set());
  const journeyRef = useRef(null);
  const cardsRef = useRef([]);

  // Smooth scroll handler
  const handleCTAClick = () => {
    if (journeyRef.current) {
      journeyRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cardIndex = cardsRef.current.indexOf(entry.target);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Activity hover handlers
  const handleActivityMouseEnter = (e) => {
    e.target.style.transform = 'translateX(10px) scale(1.02)';
  };

  const handleActivityMouseLeave = (e) => {
    e.target.style.transform = 'translateX(0) scale(1)';
  };
    
  return (
    <div>


   <section class="hero">
       <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">🚀 Skill First Approach</div>
              <div>
                  <a class="cta-button download-btn"  href={require("../../assets/Notes/🧠 Course Details.docx")} download={"Mentor Bro Pre-test"} title='Dowload pre-test details'  >Dowload Pdf</a>
                <button class="cta-button"   onClick={()=>onClickBtn()} >Start Your Journey</button>
              </div>
            </div>
        </div>
    </header>
        <div class="container">
            <div class="hero-content">
                <h1   className='gradient-heading'  >Pre-Test Journey</h1>
                <p>Transform your tech career in 17 days with our comprehensive day-by-day plan</p>
                <div class="hero-stats">
                    <div class="stat">
                        <div class="stat-number">17</div>
                        <div class="stat-label">Days Program</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">15</div>
                        <div class="stat-label">Array Questions</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Practical Learning</div>
                    </div>
                </div>
            </div>
        </div>
    </section>


       <section className="journey">
      <div className="container">
        <h2 className="section-title">Your Learning Journey</h2>

        <div className="timeline">
          {/* Day 1 */}
          <div className="day-card">
            <div className="day-number">1</div>
            <div className="day-title">🟢 Pre-Motivation 💡</div>
            <div className="day-description">Get inspired to start your journey.</div>
            <ul className="day-activities">
              <li>🎯 Set personal and career goals</li>
              <li>🧘 Complete simple mindset-building tasks</li>
              <li>🔁 Understand the power of consistent learning</li>
              <li>🏅 Know about your completion certificate</li>
            </ul>
          </div>

          {/* Days 2–8 */}
          <div className="day-card">
            <div className="day-number">2–8</div>
            <div className="day-title">🔵 Trial Preparation Phase 🛠</div>
            <div className="day-description">Structured technical prep to build confidence.</div>
            <ul className="day-activities">
              <li>📘 Learn 7 array questions (out of 15 total)</li>
              <li>🎧 Get 15 array problems with detailed voice explanations</li>
              <li>🎥 Watch 2 C programming videos</li>
              <li>🎞 Watch video on 10+ pattern questions</li>
              <li>🧵 Practice 6 pattern questions with answers</li>
            </ul>
          </div>

          {/* Developer Event */}
          <div className="highlight-card">
            <h3>🔶 Meet The Developer Event 👨‍💻</h3>
            <p>
              A live session with real tech professionals where you'll learn about real work environments, tools,
              tech stacks, and hear their career stories & advice.
            </p>
          </div>

          {/* Day 9 */}
          <div className="day-card">
            <div className="day-number">9</div>
            <div className="day-title">🟣 Trial Review 🎓</div>
            <div className="day-description">Your trial performance is reviewed by an Industry Expert.</div>
            <ul className="day-activities">
              <li>📄 Theory questions assessment</li>
              <li>✅ 2 Array questions (from practiced set)</li>
              <li>✍ Feedback on strengths & improvement areas</li>
              <li>🎤 Interview-style environment simulation</li>
              <li>🎙 Communication interview with 1-on-1 session</li>
              <li>🗣 Tests fluency, clarity, and confidence</li>
            </ul>
          </div>

          {/* Project Intro */}
          <div className="day-card">
            <div className="day-number">🧩</div>
            <div className="day-title">Project Introduction Session 🏗</div>
            <div className="day-description">Begin your industry-style journey.</div>
            <ul className="day-activities">
              <li>🧾 Learn how your first real project will be handled</li>
              <li>📂 Understand API flow and testing (using Postman)</li>
              <li>🎨 UI designing principles</li>
              <li>📋 Schema design & documentation</li>
              <li>🛠 Get a professional project roadmap</li>
            </ul>
          </div>

          {/* Days 10–16 */}
          <div className="day-card">
            <div className="day-number"   >10–16</div>
            <div className="day-title">🔴 Final Pre-Test Preparation ⏳</div>
            <div className="day-description">Intensive practice phase to master all concepts.</div>
            <ul className="day-activities">
              <li>🧠 Practice remaining 8 array questions</li>
              <li>🎯 Review all 6 pattern questions</li>
              <li>📢 Group Discussion #2: Evaluate growth in communication</li>
              <li>🎧📝 Use all study materials & voice notes to revise</li>
            </ul>
          </div>

          {/* Day 17 */}
          <div className="day-card" style={{borderBottomRightRadius:0}}  >
            <div className="day-number">17</div>
            <div className="day-title">🔴 Final Pre-Test Exam 🎯</div>
            <div className="day-description">Face the real challenge with Industry Expert Reviewer.</div>
            <ul className="day-activities">
              <li>📘 Theory questions</li>
              <li>📌 2 Array questions</li>
              <li>🧵 1 Pattern printing question</li>
              <li>📝 Detailed feedback, suggestions, and performance analysis</li>
            </ul>
          </div>
        </div>


      </div>
    </section>
    <section className="certificate-section">
        <div className="container">
            <h2 className="section-title">🏅 Your Achievement Certificate</h2>
            <div className="certificate-preview">
                <div className="certificate-seal">Mentor Bro</div>
                <div className="certificate-title">Certificate of Completion</div>
                <div className="certificate-body">
                    <p><strong>This is to certify that</strong></p>
                    <p style={{fontSize: "1.5rem", color: "#667eea", margin: "20px 0"}}><strong>[Your Name]</strong></p>
                    <p>has successfully completed the</p>
                    <p style={{fontSize: "1.3rem", color: "#333", margin: "15px 0"}}><strong>17-Day Pre-Test Journey Program</strong></p>
                    <p>demonstrating dedication, technical learning, and professional growth in software development fundamentals.</p>
                    <p style={{marginTop: "30px", color: "#666"}}>
                        <strong>Program Highlights:</strong><br />
                        ✓ Mastered 15 Array Programming Questions<br />
                        ✓ Completed 6 Pattern Programming Challenges<br />
                        ✓ Industry Expert Review & Feedback<br />
                        ✓ Real Developer Interaction Session<br />
                        ✓ Professional Project Introduction
                    </p>
                </div>
            </div>
        </div>
    </section>


    <footer class="footer">
        <div class="container">
            <div class="footer-content">
         
                <div class="footer-section">
                    <h3>Program Features</h3>
                    <p>✓ Industry Expert Reviews</p>
                    <p>✓ Real Developer Interactions</p>
                    <p>✓ Practical Project Experience</p>
                    <p>✓ Communication Skills Training</p>
                </div>
                <div class="footer-section">
                    <h3>What You'll Learn</h3>
                    <p>• Array Programming</p>
                    <p>• Pattern Recognition</p>
                    <p>• API Development</p>
                    <p>• Professional Communication</p>
                </div>
            </div>
        </div>
    </footer>
  
    </div>
  )
}

export default PreTestStunning
