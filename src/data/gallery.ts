import { site } from "./site";

export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  span: string;
  aspect: string;
  object?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: site.photo,
    alt: `${site.firstName} at the beach under a clear sky`,
    width: 918,
    height: 1288,
    caption: "The view I walk toward after a long morning.",
    span: "sm:col-span-6",
    aspect: "aspect-[16/9]",
    object: "object-[center_35%]",
  },
  {
    src: site.photo,
    alt: `${site.firstName} standing by a beach sign in a pink linen shirt`,
    width: 918,
    height: 1288,
    caption: "A Sunday that did not involve a waiting room.",
    span: "sm:col-span-4",
    aspect: "aspect-[3/4]",
    object: "object-[center_80%]",
  },
  {
    src: site.photo,
    alt: `${site.firstName} at the beach`,
    width: 918,
    height: 1288,
    caption: "Slow coffee, before the first patient.",
    span: "sm:col-span-2",
    aspect: "aspect-[4/5]",
    object: "object-[center_70%]",
  },
  {
    src: site.photo,
    alt: `${site.firstName} walking toward the water`,
    width: 918,
    height: 1288,
    caption: "Sand, then clinic, then sand again.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
    object: "object-[center_75%]",
  },
  {
    src: site.photo,
    alt: `${site.firstName} smiling at the beach`,
    width: 918,
    height: 1288,
    caption: "A table with nothing on the agenda.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
    object: "object-[center_68%]",
  },
  {
    src: site.photo,
    alt: `${site.firstName} at golden hour by the water`,
    width: 918,
    height: 1288,
    caption: "Last light on the headland.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
    object: "object-[center_55%]",
  },
  {
    src: site.photo,
    alt: `Portrait of ${site.firstName} on the beach`,
    width: 918,
    height: 1288,
    caption: "This is me, without the sunglasses.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
    object: "object-[center_72%]",
  },
  {
    src: site.photo,
    alt: `${site.firstName} on the sand`,
    width: 918,
    height: 1288,
    caption: "The quiet corner of the rooms.",
    span: "sm:col-span-6",
    aspect: "aspect-[16/9]",
    object: "object-[center_85%]",
  },
];

export const homeGallery: GalleryItem[] = [
  { ...gallery[0], span: "sm:col-span-6", aspect: "aspect-[16/9]" },
  { ...gallery[1], span: "sm:col-span-3", aspect: "aspect-[3/4]" },
  { ...gallery[3], span: "sm:col-span-3", aspect: "aspect-[3/4]" },
  { ...gallery[2], span: "sm:col-span-3", aspect: "aspect-[4/3]" },
  { ...gallery[7], span: "sm:col-span-3", aspect: "aspect-[3/4]" },
];
