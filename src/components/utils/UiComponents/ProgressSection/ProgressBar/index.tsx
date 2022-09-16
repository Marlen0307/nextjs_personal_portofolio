import { Box, Text, useColorModeValue } from "@chakra-ui/react";
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
      <Box className={progressBarStyles.bar}>
        <Box className={progressBarStyles.info}>
          <Text as="span" textTransform={"uppercase"}>
            {label}
          </Text>
        </Box>
        <Box
          className={`${progressBarStyles.progressLine} ${progressBarStyles.html}`}
        >
          {animate && (
            <Text
              as={"span"}
              _dark={{
                backgroundColor: "#fff",
              }}
              sx={{
                width: animate ? progressBarVal : 0,
                backgroundColor: color,
                _after: {
                  content: `"${progressBarVal}"`,
                },
              }}
            ></Text>
          )}
        </Box>
      </Box>
    </motion.div>
  );
}
