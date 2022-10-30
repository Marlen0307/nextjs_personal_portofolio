import React from "react";
import { mainPageSections } from "../../../config/mainPageSections";
import LandingPageSection from "../../utils/UiComponents/PageSections";
import sectionStyles from "./sectionstyles.module.css";

export default function MainPageSections() {
  return (
    <section className={sectionStyles.seperatedContainer}>
      {mainPageSections.map((pageSection, i) => (
        <LandingPageSection key={pageSection.title} index={i} pageSection={pageSection} />
      ))}
    </section>
  );
}
