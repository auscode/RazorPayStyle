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

  const tripleReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const speed = 0.5;
    let frame;

    const animate = () => {
      if (!isPaused) {
        setOffset((prev) => {
          const cardWidth = 380;
          const oneSet = reviews.length * cardWidth;

          if (prev >= oneSet) return prev - oneSet;
          return prev + speed;
        });
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-left md:items-center  mb-12">
          <h2 className="text-5xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            LaZerPay grows with <span className="text-blue-500">you!</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-gray-500">
            1,50,000+ Businesses
          </p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden py-4">
        <div
          className="flex gap-12"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {tripleReviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[352px] h-[480px] relative cursor-pointer overflow-hidden rounded-lg"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* MOBILE VERSION (NO FLIP) */}
              <div className="md:hidden w-full h-full bg-white flex flex-col">
                <div className="h-[60%] w-full">
                  <img
                    src={review.image}
                    className="w-full h-full object-cover object-top rounded-t-lg grayscale"
                  />
                </div>

                <div className="h-1/2 p-4 flex flex-col justify-center">
                  <h3 className="text-xl font-bold">{review.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{review.role}</p>

                  <p className="text-gray-800 text-sm leading-relaxed">
                    {review.description}
                  </p>
                </div>
              </div>

              {/* DESKTOP VERSION (FLIP CARD) */}
              <div className="hidden md:block flip-card">
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

                  <div className="flip-back shadow-lg flex flex-col justify-center items-center">
                    <p className="text-center text-xl font-semibold px-6">
                      {review.description}
                    </p>

                    <p className="font-bold text-lg mt-4">{review.name}</p>
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
