import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const glitchChars = "!<>-_\\/[]{}—=+*^?#_01";

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        
        let iterations = 0;
        const maxIterations = 3;
        
        const glitchAnimation = setInterval(() => {
          setDisplayText(
            text
              .split("")
              .map((char, idx) => {
                if (char === " ") return " ";
                if (Math.random() > 0.7) {
                  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                return char;
              })
              .join("")
          );
          
          iterations++;
          if (iterations >= maxIterations) {
            clearInterval(glitchAnimation);
            setDisplayText(text);
            setIsGlitching(false);
          }
        }, 50);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        textShadow: isGlitching 
          ? "2px 0 #a855f7, -2px 0 #6366f1" 
          : "none",
        animation: isGlitching ? "glitch-skew 0.1s infinite" : "none"
      }}
    >
      {displayText}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 w-full text-gradient opacity-70"
            style={{ 
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, 0)"
            }}
          >
            {displayText}
          </span>
          <span 
            className="absolute top-0 left-0 w-full text-gradient opacity-70"
            style={{ 
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translate(2px, 0)"
            }}
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;