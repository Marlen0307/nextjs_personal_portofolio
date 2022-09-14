import React from "react";
import { mainPageSections } from "../../../config/mainPageSections";
import LandingPageSection from "../../utils/UiComponents/PageSections";
import sectionStyles from "./sectionstyles.module.css";

export default function MainPageSections() {
  return (
    <section className={sectionStyles.seperatedContainer}>
      {mainPageSections.map((pageSection, i) => (
        <LandingPageSection
          key={pageSection.title}
          description={pageSection.description}
          sideElement={pageSection.illustrationSide || null}
          index={i}
          title={pageSection.title}
          image={pageSection.image}
        />
      ))}
    </section>
  );
}
