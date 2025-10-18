
import React, { useEffect, useState } from 'react';

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const createPetals = () => {
      const petalCount = 30;
      const newPetals = Array.from({ length: petalCount }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${5 + Math.random() * 5}s`,
          transform: `scale(${0.7 + Math.random() * 0.5})`,
        };
        return <div key={i} className="petal" style={style}></div>;
      });
      setPetals(newPetals);
    };

    createPetals();
  }, []);

  return <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">{petals}</div>;
};

export default FallingPetals;
