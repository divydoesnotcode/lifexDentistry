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
    src: "/images/bondi-horizon.jpg",
    alt: "A shoreline looking out to a deep blue ocean under a clear sky",
    width: 1124,
    height: 614,
    caption: "The view I walk toward after a long morning.",
    span: "sm:col-span-6",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/asha-bondi.png",
    alt: "Etishree at the beach, standing by a beach sign in a pink linen shirt",
    width: 918,
    height: 1288,
    caption: "A Sunday that did not involve a waiting room.",
    span: "sm:col-span-4",
    aspect: "aspect-[3/4]",
    object: "object-[center_80%]",
  },
  {
    src: "/images/still-life.jpg",
    alt: "A porcelain cup on a sage linen napkin with a sprig of eucalyptus",
    width: 1100,
    height: 801,
    caption: "Slow coffee, before the first patient.",
    span: "sm:col-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/asha-walk.jpg",
    alt: "Etishree walking along the beach toward the water",
    width: 825,
    height: 1113,
    caption: "Sand, then clinic, then sand again.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
    object: "object-[center_70%]",
  },
  {
    src: "/images/asha-cafe.jpg",
    alt: "Etishree sitting at a sunny cafe table with a coffee",
    width: 825,
    height: 1113,
    caption: "A table with nothing on the agenda.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/asha-lookout.jpg",
    alt: "Etishree at a coastal lookout at golden hour, looking out at the ocean",
    width: 825,
    height: 1113,
    caption: "Last light on the headland.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/asha-portrait.jpg",
    alt: "Portrait of Etishree on the beach, smiling toward the camera",
    width: 825,
    height: 1113,
    caption: "This is me, without the sunglasses.",
    span: "sm:col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/waiting-corner.jpg",
    alt: "A wooden chair and a leafy plant in a sunlit corner",
    width: 825,
    height: 1068,
    caption: "The quiet corner of the rooms.",
    span: "sm:col-span-6",
    aspect: "aspect-[16/9]",
  },
];

export const homeGallery: GalleryItem[] = [
  { ...gallery[0], span: "sm:col-span-6", aspect: "aspect-[16/9]" },
  { ...gallery[1], span: "sm:col-span-3", aspect: "aspect-[3/4]" },
  { ...gallery[3], span: "sm:col-span-3", aspect: "aspect-[3/4]" },
  { ...gallery[2], span: "sm:col-span-3", aspect: "aspect-[4/3]" },
  { ...gallery[7], span: "sm:col-span-3", aspect: "aspect-[3/4]" },
];
