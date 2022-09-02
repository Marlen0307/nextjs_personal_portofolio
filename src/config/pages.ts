export interface SitePages {
  slug: string;
  name: string;
  type :string;
}

export const pages: SitePages[] = [
  {
    name: "Home",
    slug: "/",
    type: "link",
  },
  {
    name: "About me",
    slug: "/about",
    type: 'link'
  },
  {
    name: "Experience",
    slug: "/experience",
    type: 'link'
  },
  {
    name: "Blog",
    slug: "/blog",
    type: 'link'
  },
];
