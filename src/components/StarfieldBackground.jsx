import React, { useEffect, useState } from 'react';

const StarfieldBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1; // 1px to 3px
      const duration = Math.random() * 3 + 2; // 2s to 5s
      const delay = Math.random() * 5;

      starArray.push({
        id: i,
        style: {
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
          '--twinkle-duration': `${duration}s`,
          animationDelay: `${delay}s`,
        },
      });
    }
    setStars(starArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020B18]">
      {stars.map((star) => (
        <div key={star.id} className="star bg-white opacity-20" style={star.style} />
      ))}
    </div>
  );
};

export default StarfieldBackground;
