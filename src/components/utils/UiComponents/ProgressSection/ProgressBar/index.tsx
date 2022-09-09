import { Text } from "@chakra-ui/react";
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

  const toggle = () => setAnimate((prev) => !prev);
  return (
    <motion.div
      className={progressBarStyles.bar}
      onViewportEnter={toggle}
      onViewportLeave={toggle}
    >
      <>
        {animate && (
          <motion.div className={progressBarStyles.bar}>
            <div className={progressBarStyles.info}>
              <span>{label}</span>
            </div>
            <div
              className={`${progressBarStyles.progressLine} ${progressBarStyles.html}`}
            >
              <Text
                as={"span"}
                sx={{
                  width: progressBarVal,
                  _after: {
                    content: `"${progressBarVal}"`,
                  },
                }}
              ></Text>
            </div>
          </motion.div>
        )}
      </>
    </motion.div>
  );
}
