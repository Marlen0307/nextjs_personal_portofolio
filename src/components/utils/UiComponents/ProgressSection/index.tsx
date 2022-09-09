import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import AnimatedProgressBar from "./ProgressBar";
import progressBarStyles from "./progressStyles.module.css";

export default function ProgressSectionCard() {
  return (
    <Box className={progressBarStyles.skillBars}>
      <AnimatedProgressBar label="HTML" progressBarVal="90%" />
    </Box>
  );
}
