import React, { useState } from "react";

function MovableElement() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div id='movableElement'
      style={{
        backgroundColor: '#181818',
        borderRadius: '50%',
        zIndex: '10',
        filter: 'blur(30px)',
        position: "absolute",
        height: '50px',
        width: '50px',
        top: position.y,
        left: position.x,
      }}
      onMouseMove={handleMouseMove}
    >      
    </div>
  );
}

export default MovableElement;