import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import GradientText from "@/components/GradientText";

export default ({
  text,
  hiddenText,
  className,
}: {
  text: string;
  hiddenText: string;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "flex flex-col justify-center w-[40rem] text-center relative overflow-hidden",
        className
      )}
    >
      <div className="relative flex flex-col justify-center h-40 overflow-hidden">
        {/* Hidden content */}
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0.1 } : { duration: 1 }}
          className="absolute z-20 will-change-transform"
        >
          <p className="sm:text-[3rem] bg-clip-text font-light text-transparent bg-chuva-white">
            <GradientText text={hiddenText} />
          </p>
        </motion.div>

        {/* Reveal divider */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0.1 } : { duration: 1 }}
          className="h-36 w-[6px] bg-gradient-to-b from-transparent via-chuva-green to-transparent absolute z-50 will-change-transform blur-xs"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />

        {/* Visible content */}
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 0 0 ${widthPercentage}%)`,
                }
              : {
                  clipPath: `inset(0 0 0 ${widthPercentage}%)`,
                }
          }
          transition={isMouseOver ? { duration: 0.1 } : { duration: 1 }}
          className="absolute z-20 will-change-transform"
        >
          <p className="sm:text-[3rem] bg-clip-text font-light text-transparent bg-chuva-white">
            {text}
          </p>
        </motion.div>
      </div>
      <MemoizedStars />
    </div>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

const MemoizedStars = memo(Stars);
