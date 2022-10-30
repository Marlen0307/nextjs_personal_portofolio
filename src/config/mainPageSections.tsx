import { ReactElement } from 'react';
import ProgressSectionCard from '../components/utils/UiComponents/ProgressSection';

export interface MainPageSection {
  title: string;
  description: string;
  illustrationSide?: ReactElement;
  image?: string;
  customSection?: ReactElement;
}

const yearsOfExperience = 2;
const yearsOfLearning = 3;

export const mainPageSections: MainPageSection[] = [
  // {
  //   title: '',
  //   description: '',
  //   customSection: <></>,
  // },
  {
    title: 'Your title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.',
    image: '/images/code-review-bro.png',
  },
  {
    title: 'Programming Skills',
    description: `I am specialized in many relevant technologies. I have been learning JavaScript for more than ${yearsOfLearning} years now, and I have been working for ${yearsOfExperience} years as a Software Developer using it, every day! Most of this time I have been working on building user interfaces with React. I think I am proficient in React and have a good understanding of the tool. Nevertheless, I am open for different opportunities, as in my opinion if you know JavaScript, the framework does not matter 😉️ . I also have a good grasp of CSS and its foundations.`,
    illustrationSide: <ProgressSectionCard />,
  },
];
