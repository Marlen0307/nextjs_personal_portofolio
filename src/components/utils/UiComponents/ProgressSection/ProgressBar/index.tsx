import { Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import progressBarStyles from "../progressStyles.module.css";

interface AnimatedProgressBarProps {
  label: string;
  progressBarVal: string;
}

export default function AnimatedProgressBar({
  label,
  progressBarVal,
}: AnimatedProgressBarProps) {
  const [animate, setAnimate] = useState<boolean>(false);
  const color = useColorModeValue("telegram.500", "telegram.400");

  const toggle = () => setAnimate((prev) => !prev);
  return (
    <motion.div
      className={progressBarStyles.bar}
      onViewportEnter={toggle}
      onViewportLeave={toggle}
    >
      <div className={progressBarStyles.bar}>
        <div className={progressBarStyles.info}>
          <span>{label}</span>
        </div>
        <div
          className={`${progressBarStyles.progressLine} ${progressBarStyles.html}`}
        >
          {animate && (
            <Text
              as={"span"}
              sx={{
                width: animate ? progressBarVal : 0,
                backgroundColor: color,
                _after: {
                  content: `"${progressBarVal }"`,
                },
              }}
            ></Text>
          )}
        </div>
      </div>
    </motion.div>
  );
}
