import React from 'react'
import './LandingPage.css'

export const LandingPage: React.FC = () => {
return(
    <div className="landing-page">
        <h3>Welcome to Monument Quiz</h3>
        <a href="/tab1"><button className="quiz-btn">Take Quiz</button></a>
    </div>
)


}