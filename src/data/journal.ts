export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const journal: JournalPost[] = [
  {
    slug: "friday-afternoons",
    title: "Friday afternoons are for getting outside",
    date: "March 2026",
    excerpt:
      "I close the books a little early on Fridays. Not because the work is finished — because a life that only happens on the other side of a clinic door is not a life I want to model.",
    body: [
      "I close the books a little early on Fridays. Not because the work is finished — because a life that only happens on the other side of a clinic door is not a life I want to model.",
      "Patients sometimes apologise for taking up time. I wish they wouldn't. The hour in the chair is the point of the day; the walk afterwards is how I keep the next hour honest.",
      "If you ever sit with me on a Friday, you'll get the same attention as a Tuesday. The only difference is that I will be thinking about the water, and that usually makes me kinder.",
    ],
  },
  {
    slug: "how-i-talk-about-pain",
    title: "How I talk about pain",
    date: "February 2026",
    excerpt:
      "I don't say 'this might pinch.' I say what will happen, how long it lasts, and that you can stop me. Surprise is what makes a mouth close.",
    body: [
      "I don't say 'this might pinch.' I say what will happen, how long it lasts, and that you can stop me. Surprise is what makes a mouth close.",
      "Most of the fear people bring in is leftover from a visit where nobody explained the next thirty seconds. I would rather sound plain than soothing.",
      "If something is going to hurt, you will hear it from me first. If it won't, I will not dress it up as drama. That is the whole method.",
    ],
  },
  {
    slug: "before-clinic",
    title: "What I pack before clinic",
    date: "January 2026",
    excerpt:
      "A second pair of socks, a notebook, and the same coffee order. Ritual is not branding — it is how I arrive already paying attention.",
    body: [
      "A second pair of socks, a notebook, and the same coffee order. Ritual is not branding — it is how I arrive already paying attention.",
      "The notebook is for the things people say in the chair that do not belong in a chart: a wedding, a child starting school, a parent who is unwell. I like to remember them the next time, without performing that I do.",
      "The coffee is just coffee. Some mornings are a walk. Some are rain on the window of a small room. Both are the job.",
    ],
  },
];

export function getPost(slug: string) {
  return journal.find((post) => post.slug === slug);
}
