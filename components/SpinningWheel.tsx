"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const SpinningWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [spinsCount, setSpinsCount] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Segments of the wheel
  const segments = [
    { text: "Try Again", color: "#FF6B6B" },
    { text: "Spin Again", color: "#4ECDC4" },
    { text: "Go to Dashboard!", color: "#45B7D1" },
    { text: "Try Again", color: "#FFBE0B" },
    { text: "Spin More", color: "#FB5607" },
    { text: "Go to Dashboard!", color: "#8338EC" },
  ];

  // Spin the wheel
  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    // Calculate a random rotation (at least 2 full rotations)
    const degrees = 360 * 5 + Math.floor(Math.random() * 360);
    const newRotation = rotation + degrees;

    setRotation(newRotation);

    // Calculate which segment will be selected
    setTimeout(() => {
      const segmentDegree = 360 / segments.length;
      const normalizedRotation = newRotation % 360;
      const segmentIndex =
        segments.length - 1 - Math.floor(normalizedRotation / segmentDegree);

      const selectedSegment = segments[segmentIndex];
      setResult(selectedSegment.text);
      setSpinning(false);

      // Update spin count
      const newSpinsCount = spinsCount + 1;
      setSpinsCount(newSpinsCount);

      // Redirect to dashboard if it's the "Go to Dashboard!" segment and user has spun a few times
      if (selectedSegment.text === "Go to Dashboard!" && newSpinsCount >= 2) {
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      }
    }, 4000); // Match this with CSS transition duration
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative w-64 h-64">
        {/* Wheel container */}
        <div
          ref={wheelRef}
          className={`w-full h-full rounded-full overflow-hidden relative transition-transform duration-4000 ease-out ${
            spinning ? "spinning" : ""
          }`}
          style={{
            transform: `rotate(${rotation}deg)`,
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          }}
        >
          {/* Wheel segments */}
          {segments.map((segment, index) => {
            const segmentDegree = 360 / segments.length;
            const rotation = index * segmentDegree;

            return (
              <div
                key={index}
                className="absolute w-full h-full origin-bottom"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  clipPath: `polygon(50% 50%, 50% 0%, ${
                    50 + 50 * Math.tan(Math.PI / segments.length)
                  }% 0%)`,
                }}
              >
                <div
                  className="absolute w-full h-full origin-bottom"
                  style={{
                    transform: `rotate(${segmentDegree / 2}deg)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "20px",
                    backgroundColor: segment.color,
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textAlign: "center",
                    transformOrigin: "center",
                  }}
                >
                  <span
                    style={{
                      transform: `rotate(-${rotation + segmentDegree / 2}deg)`,
                    }}
                  >
                    {segment.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center circle and pointer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10 shadow-md"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-45 bg-red-500 z-20 shadow-md"></div>
      </div>

      {/* Spin button */}
      <button
        onClick={spinWheel}
        disabled={spinning}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
      >
        {spinning ? "Spinning..." : "Spin the Wheel!"}
      </button>

      {/* Result display */}
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
          <p className="font-semibold">Result: {result}</p>
          {result === "Go to Dashboard!" && spinsCount >= 2 && (
            <p className="text-sm text-green-600 mt-2">
              Redirecting to dashboard...
            </p>
          )}
          {result === "Go to Dashboard!" && spinsCount < 2 && (
            <p className="text-sm text-gray-600 mt-2">
              Spin {2 - spinsCount} more times to unlock dashboard access!
            </p>
          )}
        </div>
      )}

      <style jsx>{`
        .spinning {
          transition-timing-function: cubic-bezier(0.17, 0.67, 0.21, 0.99);
        }
      `}</style>
    </div>
  );
};

export default SpinningWheel;
