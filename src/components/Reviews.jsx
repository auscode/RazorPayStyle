import { useState, useEffect, useRef } from "react";
import "../assets/styles/flip.css";
import face1 from "../assets/images/face1.jpg";
import faceM1 from "../assets/images/face-m1.jpg";
import face2 from "../assets/images/face2.jpg";
import faceM2 from "../assets/images/face-m2.jpg";
import face3 from "../assets/images/face3.jpg";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Founder, NovaPay",
    image: face1,
    description:
      "LaZerPay has transformed our payment workflow. The API is fast, stable, and extremely developer-friendly.",
  },
  {
    name: "Priya Sharma",
    role: "Co-founder, SwiftHR",
    image: faceM1,
    description:
      "Our team loves the smooth settlement experience. The dashboard is simple, clean, and powerful.",
  },
  {
    name: "Rohan Gupta",
    role: "CEO, CloudBits",
    image: face2,
    description:
      "After switching to LaZerPay, our payment failures dropped drastically. Truly a reliable solution.",
  },
  {
    name: "Ananya Rao",
    role: "Founder, BloomWell",
    image: faceM2,
    description:
      "LaZerPay provides the insights we need to grow fast. Their analytics and support are top-tier.",
  },
  {
    name: "Kabir Malhotra",
    role: "CTO, FinEdge",
    image: face3,
    description:
      "The speed, security, and consistency of LaZerPay make it the best choice for scaling businesses.",
  },
];
export default function Reviews() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Triple the array for seamless looping
  const tripleReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const speed = 0.5; // pixels per frame
    let animationFrame;

    const animate = () => {
      if (!isPaused) {
        setOffset((prev) => {
          const cardWidth = 380; // 352px width + 28px gap
          const singleSetWidth = reviews.length * cardWidth;

          // When we've scrolled past one complete set, reset to show the second set
          // This creates the infinite illusion
          if (prev >= singleSetWidth) {
            return prev - singleSetWidth;
          }
          return prev + speed;
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            LaZerPay grows with <span className="text-blue-500">you!</span>
          </h2>
          <p className="text-sm font-medium  text-gray-600">1,50,000+ Businesses</p>
        </div>
      </div>
      <div ref={containerRef} className="overflow-hidden py-4">
        <div
          className="flex gap-12"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform",
          }}
        >
          {tripleReviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[352px] h-[480px] relative group cursor-pointer overflow-hidden rounded-lg"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)} 
            >
              <div className="flip-card ">
                <div className="flip-inner">
                  <div className="flip-front grayscale">
                    <img
                      src={review.image}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <h3 className="font-bold text-white text-xl mb-1">
                        {review.name}
                      </h3>
                      <p className="text-gray-200 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flip-back shadow-lg flex flex-col">
                    <p className="text-center text-sm md:text-lg lg:text-2xl font-bold p-4">
                      {review.description}
                    </p>
                    <p className="font-bold text-xl mt-5">{review.name}</p>
                    <p className="text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
