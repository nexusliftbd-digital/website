export type Insight = {
  id: string;
  title: string;
  category: 'Case Study' | 'Growth Insight' | 'System Architecture';
  excerpt: string;
  img: string;
  stats?: string;
  date: string;
};

export const insights: Insight[] = [
  {
    id: "fcommerce-scale",
    title: "How an F-Commerce Brand Scaled from 30 to 150 Daily Orders Without Chaos",
    category: "Case Study",
    excerpt: "By implementing the Facebook Commerce OS, this clothing brand reduced courier returns by 30% and fully delegated inbox management.",
    img: "/case-studies/fcommerce.jpg",
    stats: "30% Return Reduction",
    date: "March 15, 2026"
  },
  {
    id: "founder-delegation",
    title: "Escaping the Founder Trap: Delegating Day-to-Day Operations",
    category: "Growth Insight",
    excerpt: "If your business stops when you take a vacation, you don't have a business—you have a demanding job. Here is how to build autonomous teams.",
    img: "/case-studies/founder.jpg",
    stats: "88% Task Delegation",
    date: "April 2, 2026"
  },
  {
    id: "corporate-profile-trust",
    title: "Why Your Corporate Profile is Costing You B2B Deals",
    category: "System Architecture",
    excerpt: "A breakdown of the exact psychology and information architecture B2B buyers look for before signing a premium contract.",
    img: "/case-studies/corporate.jpg",
    stats: "2x Deal Closing Rate",
    date: "May 10, 2026"
  },
  {
    id: "makecom-automation",
    title: "WhatsApp CRM Automation: Saving 20 Hours a Week",
    category: "Case Study",
    excerpt: "How a service agency connected their Lead generation ads directly to WhatsApp routing, closing leads 5x faster.",
    img: "/case-studies/crm.jpg",
    stats: "20hrs Saved/Week",
    date: "June 22, 2026"
  },
  {
    id: "team-raci",
    title: "The RACI Matrix: Stop Playing the Blame Game in Your Team",
    category: "Growth Insight",
    excerpt: "A deep dive into how clear Roles and Responsibilities (RACI) fix 90% of internal communication issues in SMEs.",
    img: "/case-studies/raci.jpg",
    stats: "Zero Communication Lag",
    date: "July 5, 2026"
  },
  {
    id: "digital-presence",
    title: "The 3 Pillars of an Institutional Grade Brand Identity",
    category: "System Architecture",
    excerpt: "Moving from a 'hustle' brand to a trusted institution requires specific design, operational, and messaging consistency.",
    img: "/case-studies/brand.jpg",
    stats: "100% Brand Consistency",
    date: "August 18, 2026"
  }
];
