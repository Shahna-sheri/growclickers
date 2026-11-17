export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  icon: string;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: "business-growth-strategy",
    title: "Business Growth Strategy",
    shortDescription: "A complete roadmap to identify where your business stands and what it needs to grow sustainably.",
    fullDescription: "We analyse your business from the ground up — your market, your audience, your offer, your competition — and build a clear, structured growth strategy that goes beyond just running ads. This is about building a business that grows with intention.",
    capabilities: [
      "Business and market analysis",
      "Competitor benchmarking",
      "Target audience identification",
      "Offer positioning and value proposition",
      "Marketing roadmap development",
      "KPI and goal setting",
      "Revenue growth planning",
    ],
    icon: "TrendingUp",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Business Growth Strategy services. I would like to understand how you can help my business identify growth opportunities and build a structured growth plan.",
  },
  {
    id: "branding-brand-strategy",
    title: "Branding & Brand Strategy",
    shortDescription: "Build a brand identity that positions your business above competitors and creates lasting recognition.",
    fullDescription: "A strong brand is not just a logo — it is a perception, a promise, and a competitive advantage. We help businesses develop brand identities and strategies that communicate the right message to the right audience.",
    capabilities: [
      "Brand identity development",
      "Brand positioning strategy",
      "Visual identity and design direction",
      "Brand communication guidelines",
      "Brand voice and tone",
      "Brand audit and refresh",
      "Market differentiation strategy",
    ],
    icon: "Layers",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Branding & Brand Strategy services. I would like to build a strong brand identity and positioning for my business. Please share more details.",
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    shortDescription: "Position yourself as a trusted authority in your industry through a strategic personal brand.",
    fullDescription: "Personal branding is one of the most powerful growth assets for founders, consultants, coaches, and business leaders. We help you build a clear, consistent, and compelling personal brand across digital platforms.",
    capabilities: [
      "Personal brand positioning",
      "LinkedIn and social media strategy",
      "Content strategy and planning",
      "Thought leadership development",
      "Professional profile optimisation",
      "Audience growth strategy",
      "Personal brand visibility campaigns",
    ],
    icon: "User",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Personal Branding services. I want to build a strong personal brand and improve my online presence. Please share your process and details.",
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    shortDescription: "Data-driven Facebook and Instagram advertising campaigns built to generate qualified leads and sales.",
    fullDescription: "We plan, build, and manage Meta advertising campaigns across Facebook and Instagram that are built around your business goals. Every campaign is backed by audience research, creative strategy, and continuous performance optimisation.",
    capabilities: [
      "Campaign strategy and planning",
      "Audience research and targeting",
      "Ad creative and copy",
      "A/B testing and optimisation",
      "Lead generation campaigns",
      "Retargeting and conversion campaigns",
      "Performance reporting and insights",
    ],
    icon: "Target",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Meta Ads services. I want to generate quality leads and reach potential customers through Facebook and Instagram advertising. Please share your service details.",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    shortDescription: "High-intent Google advertising campaigns that place your business in front of customers actively searching for your services.",
    fullDescription: "Google Ads puts your business in front of people who are actively searching for what you offer. We build search, display, and performance max campaigns that are strategically structured, carefully optimised, and focused on real business results.",
    capabilities: [
      "Keyword research and planning",
      "Search campaign setup and management",
      "Display and remarketing campaigns",
      "Performance Max campaigns",
      "Landing page strategy",
      "Bid strategy and budget optimisation",
      "Conversion tracking and reporting",
    ],
    icon: "Search",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Google Ads services. I want to reach high-intent customers actively searching for my services. Please share your service details.",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Consistent, strategic social media presence that builds your audience and communicates your brand story.",
    fullDescription: "Social media is not just about posting content — it is about building a brand presence that creates trust, engages your audience, and supports your business growth. We manage your social media with a clear content strategy and consistent posting schedule.",
    capabilities: [
      "Social media strategy and planning",
      "Content calendar creation",
      "Graphic design and content creation",
      "Caption writing and copywriting",
      "Community engagement and management",
      "Instagram, Facebook, and LinkedIn management",
      "Performance tracking and reporting",
    ],
    icon: "Share2",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Social Media Management services. I want to improve my business's social media presence through strategic content and consistent management. Please share your packages and details.",
  },
  {
    id: "website-development",
    title: "Website Development",
    shortDescription: "Professional, conversion-focused websites designed to represent your brand and generate business enquiries.",
    fullDescription: "Your website is your most important digital asset. We design and develop professional websites that accurately represent your brand, communicate your offer clearly, and are built to convert visitors into qualified enquiries.",
    capabilities: [
      "Business website design and development",
      "Landing page design",
      "Mobile-first responsive design",
      "SEO-optimised structure",
      "Conversion-focused layouts",
      "Performance and speed optimisation",
      "CMS integration",
    ],
    icon: "Globe",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Website Development services. I want to build a professional website for my business. Please share your development process and pricing details.",
  },
  {
    id: "lead-generation-marketing-systems",
    title: "Lead Generation & Marketing Systems",
    shortDescription: "Build a systematic, repeatable process for generating qualified leads consistently.",
    fullDescription: "Lead generation is not a single campaign — it is a system. We help businesses build structured lead generation pipelines that combine paid advertising, landing pages, follow-up processes, and performance tracking.",
    capabilities: [
      "Lead generation strategy",
      "Funnel design and development",
      "Landing page creation",
      "Lead magnet development",
      "CRM and follow-up process setup",
      "Multi-channel campaign coordination",
      "Lead quality tracking and reporting",
    ],
    icon: "Zap",
    whatsappMessage: "Hi GrowClickers, I'm interested in your Lead Generation and Marketing Systems services. I want to improve how my business attracts, manages, and converts potential customers. Please share more details.",
  },
];

