import React, { useState } from 'react';

const Card = ({ title, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`title ${isHovered ? 'hovered' : ''}`}
        style={{
          height: isHovered ? '70%' : '20%', // Ajuste la hauteur au survol
        }}
      >
        <span><h3>{title}</h3></span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus veritatis at consectetur</p>

          <button className="button">Cliquez ici</button>

      </div>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
};

export default Card;
