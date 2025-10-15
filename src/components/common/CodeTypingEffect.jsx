import React, { useState, useEffect } from 'react';

const CodeTypingEffect = () => {
  const codeLines = [
    'const developer = {',
    '  name: "Elias",',
    '  skills: ["React", "JavaScript", "CSS"],',
    '  passion: "creating amazing websites",',
    '  status: "available for work"',
    '};'
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 50);
        
        return () => clearTimeout(timeout);
      } else {
        // Move to next line
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 500);
        
        return () => clearTimeout(timeout);
      }
    } else {
      // Reset and loop
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex]);

  return (
    <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px] py-8">
      <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          <span className="ml-2 text-[var(--text-secondary)] text-sm font-['Fira_Code']">code.js</span>
        </div>
        <pre className="text-[var(--text-primary)] font-['Fira_Code'] text-sm sm:text-base whitespace-pre-wrap overflow-hidden min-h-[160px]">
          {displayedText}
          <span className="animate-pulse-glow">|</span>
        </pre>
      </div>
    </div>
  );
};

export default CodeTypingEffect;
