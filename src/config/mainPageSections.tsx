import { ReactElement } from "react";
import ProgressSectionCard from "../components/utils/UiComponents/ProgressSection";

export interface MainPageSection {
  title: string;
  description: string;
  illustrationSide?: ReactElement;
  image?: string;
}

export const mainPageSections: MainPageSection[] = [
  {
    title: "Your title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
    image: "/images/code-review-bro.png",
  },
  {
    title: "Programming Skills",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
    illustrationSide: <ProgressSectionCard />,
  },
  {
    title: "Your title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
    image: "/images/code-review-bro.png",
  },
];
