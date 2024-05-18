import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HeroSection = () => {
    const textLines = [
        "TOTAL HEALTH CARE SOLUTION",
        "YOUR MOST TRUSTED",
        "HEALTH PARTNER",
        "Healing, Thriving, Uniting ~ Your Path to Wellness"
    ];

    const useTypingEffect = (text, speed = 100) => {
        const [displayText, setDisplayText] = useState("");
        const [currentChar, setCurrentChar] = useState(0);

        useEffect(() => {
            if (currentChar < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText + text[currentChar]);
                    setCurrentChar(currentChar + 1);
                }, speed);
                return () => clearTimeout(timeout);
            }
        }, [displayText, currentChar, text, speed]);

        return displayText;
    };

    const typedLine1 = useTypingEffect(textLines[0]);
    const typedLine2 = useTypingEffect(textLines[1], 100);
    const typedLine3 = useTypingEffect(textLines[2], 100);
    const typedLine4 = useTypingEffect(textLines[3], 100);

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small style={{ color: 'white' }}>{typedLine1}</small>
                    <h1>
                        {typedLine2}<br />
                        {typedLine3}
                    </h1>
                    <small style={{ color: 'white' }}>{typedLine4}</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Appointment</Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
