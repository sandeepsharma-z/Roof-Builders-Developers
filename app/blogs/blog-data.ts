export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  read: string;
  image: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-time-buyer-property-checklist",
    tag: "Buyer Basics",
    title: "A First-Time Buyer’s Checklist Before Shortlisting a Property",
    excerpt: "A clear starting point for comparing your needs, budget, location and essential project information before you shortlist.",
    read: "6 min read",
    image: "/generated-blogs/first-time-buyer-checklist-v1.webp",
    intro: "The first shortlist should make a property search clearer, not more crowded. Begin with a few practical filters that help you compare options on the same terms.",
    sections: [
      {
        heading: "Start with the purpose of the purchase",
        paragraphs: ["A home for end use, a plotted opportunity and a commercial investment answer different needs. Define how you expect to use the property, how long you may hold it and what flexibility you need before comparing projects."],
      },
      {
        heading: "Build a complete budget",
        paragraphs: ["Look beyond the headline price. Registration, maintenance, fit-out, financing and other applicable charges can influence the total commitment."],
        points: ["Set a comfortable overall range", "Keep room for applicable additional costs", "Compare payment timelines, not only the final amount"],
      },
      {
        heading: "Compare location through everyday use",
        paragraphs: ["Connectivity matters most when it supports real routines. Consider access to work, education, healthcare, daily essentials and the roads you are likely to use regularly."],
      },
      {
        heading: "Review information before deciding",
        paragraphs: ["Ask for the project details, approvals and documents relevant to the property. Where needed, take independent legal and financial advice before making a commitment."],
      },
    ],
  },
  {
    slug: "plots-vs-apartments",
    tag: "Property Formats",
    title: "Plots or Apartments: Which One Fits Your Plans Better?",
    excerpt: "Understand how control, convenience, timelines and everyday use differ before choosing between plotted land and a ready residential format.",
    read: "7 min read",
    image: "/generated-blogs/plots-vs-apartments-v1.webp",
    intro: "Plots and apartments can both be meaningful choices, but they solve different problems. The better option depends on how soon you want to use the property and how much control you want over it.",
    sections: [
      {
        heading: "Choose a plot when flexibility matters",
        paragraphs: ["A plotted property can offer greater control over future construction and space planning. It may suit buyers who are comfortable with a longer timeline and the responsibilities that come with building later."],
      },
      {
        heading: "Choose an apartment when convenience matters",
        paragraphs: ["An apartment can provide a clearer path to occupancy, shared amenities and managed common areas. It may suit buyers who value predictability and lower day-to-day involvement."],
      },
      {
        heading: "Compare the complete experience",
        paragraphs: ["Do not compare only the unit or plot price. Consider infrastructure, maintenance, security, community planning, financing and the time required before the property becomes usable."],
        points: ["Expected use and possession timeline", "Maintenance and shared services", "Freedom to customise", "Surrounding infrastructure and access"],
      },
      {
        heading: "Let the decision follow your priorities",
        paragraphs: ["There is no universal winner. A useful comparison begins with your purpose, preferred location, available time and comfort with future responsibilities."],
      },
    ],
  },
  {
    slug: "make-a-site-visit-more-useful",
    tag: "Site Visit Guide",
    title: "How to Make a Property Site Visit More Useful",
    excerpt: "Use your visit to understand access, surroundings, planning and actual development—not simply the presentation shown in a brochure.",
    read: "5 min read",
    image: "/generated-blogs/site-visit-guide-v1.webp",
    intro: "A site visit becomes valuable when you arrive with a clear set of questions. It is your opportunity to connect the project presentation with the location and conditions on the ground.",
    sections: [
      {
        heading: "Observe the approach before entering",
        paragraphs: ["Notice the roads, traffic patterns, public transport options and nearby essentials on the way to the site. The approach often explains more about everyday convenience than a map alone."],
      },
      {
        heading: "Ask to understand the complete plan",
        paragraphs: ["Review the site layout, access points, internal circulation, open areas and the relationship between different parts of the development."],
        points: ["Current development status", "Planned infrastructure and common areas", "Available configurations or plot locations", "Expected next steps and timelines"],
      },
      {
        heading: "Take notes you can compare later",
        paragraphs: ["Record the questions you asked, the information shared and what you observed. Consistent notes make it easier to compare multiple properties after the visits are complete."],
      },
      {
        heading: "Do not treat the visit as final verification",
        paragraphs: ["A site visit is one part of due diligence. Review the relevant documents and seek qualified legal or financial advice where required before making a property decision."],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
