import { useState, useEffect } from "react";

interface TerminalTyperProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TerminalTyper = ({ 
  text, 
  className = "", 
  speed = 40,
  delay = 1000 
}: TerminalTyperProps) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      <span className="text-primary/70">{">"}</span>{" "}
      {displayText}
      <span 
        className={`inline-block w-2 h-5 ml-1 bg-primary align-middle transition-opacity ${
          showCursor ? "opacity-100" : "opacity-0"
        } ${isComplete ? "animate-pulse" : ""}`}
      />
    </span>
  );
};

export default TerminalTyper;