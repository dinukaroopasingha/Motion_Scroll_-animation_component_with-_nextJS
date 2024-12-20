"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  // First Div Animation
  const x1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const springX1 = useSpring(x1, { stiffness: 100, damping: 20 });
  const springY1 = useSpring(y1, { stiffness: 100, damping: 20 });

  // Second Div Animation (Starts after a delay in scroll range)
  const delayStart = 1500; // Delay start at scrollY = 1000
  const opacity2 = useTransform(
    scrollY,
    [delayStart, delayStart + 500],
    [0, 1]
  ); // Fade in
  const scale2 = useTransform(
    scrollY,
    [delayStart, delayStart + 500],
    [0.5, 1]
  ); // Scale up
  const rotate2 = useTransform(
    scrollY,
    [delayStart + 500, delayStart],
    [0, 360]
  ); // Rotate

  return (
    <div className="h-[300vh] bg-gray-100">
      {/* First Div */}
      <motion.div
        style={{
          x: springX1,
          y: springY1,
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
        }}
        className="fixed top-20 left-20"
      />

      {/* Second Div */}
      <motion.div
        style={{
          opacity: opacity2,
          scale: scale2,
          rotate: rotate2,
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        className="fixed top-40 left-40"
      />
    </div>
  );
}
