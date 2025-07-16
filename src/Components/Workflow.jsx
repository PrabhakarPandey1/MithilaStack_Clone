import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const cars = [
  { id: 1, color: "bg-blue-500", delay: 0 },
  { id: 2, color: "bg-red-500", delay: 1 },
  { id: 3, color: "bg-yellow-500", delay: 2 },
  { id: 4, color: "bg-purple-500", delay: 3 },
  { id: 5, color: "bg-green-500", delay: 4 },
];

export default function RoadWithCars() {
  const containerRef = useRef(null);

  useEffect(() => {
    cars.forEach((car, index) => {
      const el = containerRef.current.querySelector(`#car-${car.id}`);
      gsap.to(el, {
        x: "100vw",
        repeat: -1,
        duration: 10,
        ease: "linear",
        delay: car.delay,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth),
        },
      });
    });
  }, []);

  return (
    <div className="relative h-[300px] w-full overflow-hidden bg-gradient-to-b from-blue-100 to-pink-100" ref={containerRef}>
      {/* Road */}
      <div className="absolute top-1/2 left-0 w-full h-24 bg-gray-800 rounded-full transform -translate-y-1/2">
        <div className="absolute w-full h-[2px] top-1/2 bg-white bg-dash-pattern"></div>
      </div>

      {/* Cars */}
      {cars.map((car) => (
        <div
          key={car.id}
          id={`car-${car.id}`}
          className={`absolute top-1/2 w-10 h-5 ${car.color} rounded-sm shadow-md transform -translate-y-1/2`}
          style={{ left: `${car.delay * 100}px` }}
        ></div>
      ))}
    </div>
  );
}
