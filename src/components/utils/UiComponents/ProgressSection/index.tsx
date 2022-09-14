import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { mySkills } from "../../../../config/data/skills";
import AnimatedProgressBar from "./ProgressBar";
import progressBarStyles from "./progressStyles.module.css";

export default function ProgressSectionCard() {
  return (
    <Box className={progressBarStyles.skillBars}>
      {mySkills.map((skill, index) => (
        <AnimatedProgressBar
          key={`${skill.name}_${index}_skill`}
          label={skill.name}
          progressBarVal={skill.level}
        />
      ))}
    </Box>
  );
}
