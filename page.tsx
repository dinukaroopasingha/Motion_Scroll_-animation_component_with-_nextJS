"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Home() {
  // Hook to get the current vertical scroll position
  const { scrollY } = useScroll();

  // Animation for the first div (blue box)
  // Transform the `x` position based on scroll range [0, 1000] to move from 0px to 300px
  const x1 = useTransform(scrollY, [0, 1000], [0, 300]);
  // Transform the `y` position based on scroll range [0, 1000] to move from 0px to 200px
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  // Apply spring physics to smooth out the `x` movement
  const springX1 = useSpring(x1, { stiffness: 100, damping: 20 });
  // Apply spring physics to smooth out the `y` movement
  const springY1 = useSpring(y1, { stiffness: 100, damping: 20 });

  // Animation for the second div (red box)
  const delayStart = 1500; // Introduce a delay; animations start when `scrollY` is 1500px
  // Fade in the second div: opacity changes from 0 to 1 between scroll range [1500, 2000]
  const opacity2 = useTransform(
    scrollY,
    [delayStart, delayStart + 500],
    [0, 1]
  );
  // Scale up the second div: size scales from 50% to 100% between scroll range [1500, 2000]
  const scale2 = useTransform(
    scrollY,
    [delayStart, delayStart + 500],
    [0.5, 1]
  );
  // Rotate the second div: rotates from 0° to 360° between scroll range [2000, 1500]
  const rotate2 = useTransform(
    scrollY,
    [delayStart + 500, delayStart],
    [0, 360]
  );

  return (
    <div className="h-[300vh] bg-gray-100">
      {/* First Div (Blue Box) */}
      <motion.div
        style={{
          x: springX1, // Smooth horizontal movement based on scroll
          y: springY1, // Smooth vertical movement based on scroll
          width: "100px", // Fixed width
          height: "100px", // Fixed height
          backgroundColor: "blue", // Background color
        }}
        className="fixed top-20 left-20" // Fixed position
      />

      {/* Second Div (Red Box) */}
      <motion.div
        style={{
          opacity: opacity2, // Fade in effect
          scale: scale2, // Scaling effect
          rotate: rotate2, // Rotating effect
          width: "100px", // Fixed width
          height: "100px", // Fixed height
          backgroundColor: "red", // Background color
        }}
        className="fixed top-40 left-40" // Fixed position
      />
    </div>
  );
}
