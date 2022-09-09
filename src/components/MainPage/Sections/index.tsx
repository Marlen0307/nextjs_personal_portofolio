import React from "react";
import { mainPageSections } from "../../../config/data";
import LandingPageSection from "../../utils/UiComponents/PageSections";
import sectionStyles from './sectionstyles.module.css';

export default function MainPageSections() {
  return (
    <section className={sectionStyles.seperatedContainer}>
      {mainPageSections.map((dt, i) => (
        <LandingPageSection
          key={dt.title}
          description={dt.description}
          index={i}
          title={dt.title}
          image={dt.image}
        />
      ))}
    </section>
  );
}
