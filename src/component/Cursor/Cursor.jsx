import React, { useEffect } from "react";
import gsap from "gsap";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    let cursor = document.querySelector(".cursor");

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        opacity: 1,
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursers">Space</div>
    </div>
  );
};

export default Cursor;
