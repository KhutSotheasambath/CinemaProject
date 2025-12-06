import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";


// Import your images
import cover1 from "../image/cover1.jpeg";
import cover2 from "../image/cover2.jpeg";
import cover3 from "../image/cover3.jpeg";
import cover4 from "../image/cover4.jpeg";
import cover5 from "../image/cover5.jpeg";
import cover6 from "../image/cover6.jpeg";

// Put all images in an array
const images = [cover1, cover2, cover3, cover4, cover5, cover6];

function AutoScrollCarousel() {
  const sliderRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 1; // smaller = slower, larger = faster
    let scrollInterval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0; // reset to start
      } else {
        slider.scrollLeft += scrollAmount;
      }
    }, 15 );

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-[200px] rounded-3xl">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex h-full w-full overflow-x-scroll scroll-smooth no-scrollbar gap-5"
      >
        {images.concat(images).map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover  rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoScrollCarousel;
