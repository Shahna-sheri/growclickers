export interface CaseStudyResult {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  businessCategory: string;
  campaignObjective: string;
  campaignPeriod: string;
  challenge: string;
  strategy: string;
  execution: string[];
  keyResults: CaseStudyResult[];
  summaryNote: string;
  screenshotPlaceholder: boolean;
  screenshotImage?: string;
  clientLogo?: string;
  tags: string[];
  isVerified?: boolean;
  metricBadge?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cocs-messaging-campaign",
    clientName: "COCS — Comes With One Dream",
    businessCategory: "Apparel & Lifestyle Brand",
    campaignObjective: "Direct Customer Inquiries & Messaging Lead Generation",
    campaignPeriod: "April – May 2025",
    clientLogo: "/images/cocs-logo.jpg",
    screenshotImage: "/images/cocs-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "739 LEADS @ ₹4.30",
    challenge:
      "The client needed to drive immediate, warm buyer inquiries for their brand without inflating acquisition costs. Traditional website traffic and awareness campaigns were generating clicks but not enough direct customer conversations.",
    strategy:
      "Built a high-converting Meta Ads Messaging campaign (Click-to-Chat / Direct Conversations) designed to route prospective customers straight into one-on-one sales chats with automated starter prompts and compelling lifestyle creatives.",
    execution: [
      "Audience research & interest-based segmentation targeting fashion and lifestyle enthusiasts",
      "High-contrast visual ad creatives engineered for maximum thumb-stop on Instagram and Facebook feeds",
      "Click-to-Message funnel optimization with automated conversational prompts to minimize drop-off",
      "Daily ad set budget optimization (ABO) and creative rotation to drive cost-per-conversation down to record lows",
    ],
    keyResults: [
      { label: "Conversations Started", value: "739 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹4.30", highlight: true },
      { label: "Total Ad Spend", value: "₹3,176.18" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 739 direct customer inquiries generated at an exceptional ₹4.30 per lead on an ad spend of just ₹3,176.18.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging"],
  },
  {
    id: "gifted-messaging-campaign",
    clientName: "GIFTED — Personalized Gift Centre",
    businessCategory: "Personalized Gifting & D2C",
    campaignObjective: "Custom Gift Inquiries & Direct WhatsApp Consultations",
    campaignPeriod: "May 2025",
    clientLogo: "/images/gifted-logo.jpg",
    screenshotImage: "/images/gifted-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "213 LEADS @ ₹5.00",
    challenge:
      "The client needed to capture high-intent inquiries from shoppers looking for bespoke, customized gifts for birthdays, anniversaries, and special moments. Standard website traffic ads were failing to convert because custom-crafted products require personalized 1-on-1 consultations before purchase.",
    strategy:
      "Constructed a high-converting Meta Ads Click-to-WhatsApp messaging funnel featuring emotional product showcase reels, personalized gift unboxing highlights, and automated WhatsApp chat starters to route potential buyers straight into sales conversations.",
    execution: [
      "Audience targeting based on upcoming birthdays, anniversaries, and relationship milestones",
      "High-engagement video and carousel creatives highlighting personalized customization options",
      "Streamlined Click-to-Message funnel with automated starter prompts to qualify customer requirements instantly",
      "Dynamic ad spend optimization keeping cost per conversation capped at an exceptional ₹5.00",
    ],
    keyResults: [
      { label: "Conversations Started", value: "213 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹5.00", highlight: true },
      { label: "Total Ad Spend", value: "₹1,064.59" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 213 direct customer conversations generated at ₹5.00 per lead with a total ad spend of just ₹1,064.59.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging", "E-Commerce"],
  },
  {
    id: "kokkadans-gas-stove-campaign",
    clientName: "KOKKADANS — Gas Stove Centre",
    businessCategory: "Retail & Kitchen Appliances",
    campaignObjective: "Direct Customer Inquiries & Stove Upgrade Orders",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/kokkadans-logo.png",
    screenshotImage: "/images/kokkadans-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "561 LEADS @ ₹6.72",
    challenge:
      "Retail appliance centres often struggle with high customer acquisition costs through conventional local advertising. The brand needed a predictable digital stream of high-intent inquiries from local homeowners actively looking for gas stove models, glass-top cooktops, and repair/upgrade services.",
    strategy:
      "Engineered a hyperlocal Meta Ads Click-to-WhatsApp campaign highlighting premium glass-top and stainless gas stoves, bundle pricing, and quick doorstep delivery, enabling direct consultation and order confirmation via chat.",
    execution: [
      "Radius-targeted audience modeling focused on homeowners, families, and residential communities",
      "Product-focused visual creatives showcasing glass-top aesthetics, burner reliability, and safety certifications",
      "Direct WhatsApp message routing with pre-configured chat starters for product specifications and pricing",
      "Bid optimization and audience trimming maintaining an ultra-efficient ₹6.72 acquisition cost across 561 conversations",
    ],
    keyResults: [
      { label: "Conversations Started", value: "561 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹6.72", highlight: true },
      { label: "Total Ad Spend", value: "₹3,770.08" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 561 direct buyer inquiries generated at ₹6.72 per lead with a total ad spend of ₹3,770.08.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging", "Retail & Local"],
  },
  {
    id: "noushis-naturals-messaging-campaign",
    clientName: "Noushi's Naturals — Sales Inquiries",
    businessCategory: "Organic Wellness & Natural Care",
    campaignObjective: "Direct Customer Inquiries & Product Consultations",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/noushis-naturals-logo.jpg",
    screenshotImage: "/images/noushis-naturals-messaging-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "353 LEADS @ ₹7.89",
    challenge:
      "Natural wellness and herbal care brands require direct customer trust and personalization. Potential buyers often want consultations about their skin type, natural ingredients, and product compatibility before placing an order.",
    strategy:
      "Engineered a targeted Meta Ads Click-to-WhatsApp messaging funnel featuring authentic natural product storytelling, ingredient purity highlights, and direct chat prompts connecting interested buyers immediately with consultation specialists.",
    execution: [
      "Audience targeting focusing on health-conscious consumers, organic lifestyle enthusiasts, and natural skincare buyers",
      "High-converting visual creatives and reels highlighting pure natural formulations and 'a bond with the nature' philosophy",
      "Frictionless Click-to-Message CTAs opening WhatsApp directly with instant customer consultation prompts",
      "Dynamic budget optimization capping cost per messaging conversation at an efficient ₹7.89 across 353 inquiries",
    ],
    keyResults: [
      { label: "Conversations Started", value: "353 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹7.89", highlight: true },
      { label: "Total Ad Spend", value: "₹2,786.69" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 353 direct customer consultation conversations generated at ₹7.89 per lead with a total ad spend of ₹2,786.69.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging", "E-Commerce"],
  },
  {
    id: "noushis-naturals-reach-campaign",
    clientName: "Noushi's Naturals — Viral Reach",
    businessCategory: "Organic Wellness & Natural Care",
    campaignObjective: "Mass Brand Awareness & Hyper-Viral Regional Reach",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/noushis-naturals-logo.jpg",
    screenshotImage: "/images/noushis-naturals-reach-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "100,911 REACH @ ₹296.62",
    challenge:
      "New and growing natural wellness brands need rapid top-of-funnel brand recall, visibility, and credibility across regional consumers without burning large budgets on conventional broad awareness ads.",
    strategy:
      "Engineered a high-efficiency Meta Ads Reach campaign leveraging authentic natural product visuals, clean ingredient storytelling, and high-frequency delivery algorithms to blanket the target demographic at record-low cost per thousand impressions.",
    execution: [
      "Audience modeling targeting eco-friendly consumers, wellness enthusiasts, and natural skincare buyers",
      "High-resonance creative storytelling emphasizing pure formulations and 'a bond with the nature' brand philosophy",
      "Algorithm-optimized delivery focused on unique user reach rather than repetitive ad fatigue",
      "Phenomenal cost efficiency achieving 100,911 unique individuals reached on an ad spend of just ₹296.62",
    ],
    keyResults: [
      { label: "Total People Reached", value: "100,911 Reach", highlight: true },
      { label: "Cost Per Result", value: "₹2.94", highlight: true },
      { label: "Total Ad Spend", value: "₹296.62" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 100,911 unique people reached at just ₹2.94 cost per result with a total ad spend of only ₹296.62.",
    tags: ["Meta Ads", "Brand Awareness", "E-Commerce"],
  },
  {
    id: "radgiver-business-advisors-campaign",
    clientName: "RADGIVER — Business Advisors",
    businessCategory: "B2B & Business Advisory",
    campaignObjective: "Executive Business Consultation Inquiries",
    campaignPeriod: "October – November 2026",
    clientLogo: "/images/radgiver-logo.png",
    screenshotImage: "/images/radgiver-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "182 LEADS @ ₹16.40",
    challenge:
      "B2B and professional consulting firms typically suffer from astronomical customer acquisition costs on digital channels. Reaching founders, executives, and business owners ready for strategic advisory without wasting budget on irrelevant traffic is exceptionally difficult.",
    strategy:
      "Constructed an executive-targeted Meta Ads Click-to-WhatsApp messaging funnel using authoritative business advisory creatives, diagnostic business prompts, and immediate 1-on-1 advisor consultation routing.",
    execution: [
      "Targeted business owners, enterprise founders, and senior decision-makers by industry interest and managerial roles",
      "High-authority ad creatives addressing core SME scaling hurdles, financial structuring, and operational bottlenecks",
      "Direct WhatsApp consultation funnel with automated pre-qualification prompts to filter high-intent executive inquiries",
      "Tight budget discipline achieving 182 qualified business consultations at an extraordinary B2B acquisition cost of just ₹16.40 per conversation",
    ],
    keyResults: [
      { label: "Consultation Inquiries", value: "182 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹16.40", highlight: true },
      { label: "Total Ad Spend", value: "₹2,985.31" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 182 high-intent business advisory consultations generated at ₹16.40 per lead on a total ad spend of ₹2,985.31.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging", "B2B & Consulting"],
  },
  {
    id: "ajmal-isudheen-reach-campaign",
    clientName: "Ajmal Isudheen",
    businessCategory: "Personal Brand & Creator",
    campaignObjective: "Mass Public Reach & Personal Brand Authority",
    campaignPeriod: "October – November 2026",
    clientLogo: "/images/ajmal-isudheen-logo.png",
    screenshotImage: "/images/ajmal-isudheen-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "242,390 REACH @ ₹900.80",
    challenge:
      "Personal brands, thought leaders, and creators often struggle to establish massive visibility without burning substantial marketing budgets. The goal was to build immediate, wide-scale recognition and top-of-mind recall across regional target audiences.",
    strategy:
      "Orchestrated a hyper-efficient Meta Ads Reach & Awareness campaign leveraging dynamic video content, authoritative personal branding creatives, and optimized algorithmic distribution to achieve viral scale at rock-bottom CPMs.",
    execution: [
      "Targeted broad interest groups, young professionals, and digital media consumers",
      "High-impact visual creatives and short-form video content optimized for maximum hook-rate and retention",
      "Frequency-capped algorithm delivery ensuring expansive unique reach without ad fatigue",
      "Exceptional budget efficiency reaching 242,390 unique individuals for an ad spend of only ₹900.80",
    ],
    keyResults: [
      { label: "Total People Reached", value: "242,390 Reach", highlight: true },
      { label: "Cost Per Result", value: "₹3.72", highlight: true },
      { label: "Total Ad Spend", value: "₹900.80" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 242,390 unique people reached at just ₹3.72 cost per result with a total ad spend of only ₹900.80.",
    tags: ["Meta Ads", "Brand Awareness", "Personal Brand"],
  },
  {
    id: "cocs-sprint-campaign",
    clientName: "COCS — Collection Test Sprint",
    businessCategory: "Apparel & Lifestyle Brand",
    campaignObjective: "Direct Product Sales & Collection Launch Orders",
    campaignPeriod: "January 2026",
    clientLogo: "/images/cocs-logo.jpg",
    screenshotImage: "/images/cocs-sprint-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "33 SALES @ ₹6.64",
    challenge:
      "Testing new apparel SKU drops typically requires agile, low-risk ad spend validation. The brand wanted to validate customer demand and generate immediate direct sales orders for a new apparel release without committing substantial capital upfront.",
    strategy:
      "Deployed a rapid-fire Meta Ads Click-to-WhatsApp direct sales campaign with tight micro-budget pacing (₹219 total spend) to test immediate audience purchase intent and generate instant buyer sales conversations.",
    execution: [
      "Direct-to-chat sales creative testing for new apparel silhouettes and colorways",
      "Focused demographic targeting on high-affinity repeat and lookalike fashion shoppers",
      "Low-friction WhatsApp conversation prompts for quick stock checks, sizing, and direct order placements",
      "Ultra-lean campaign efficiency generating 33 direct sales orders/inquiries at ₹6.64 on a test budget of just ₹219.07",
    ],
    keyResults: [
      { label: "Sales Inquiries Started", value: "33 Orders / Leads", highlight: true },
      { label: "Cost Per Sale Inquiry", value: "₹6.64", highlight: true },
      { label: "Total Ad Spend", value: "₹219.07" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 33 direct sales orders and customer purchase inquiries generated at ₹6.64 per result on an ultra-lean test budget of just ₹219.07.",
    tags: ["Sales", "Meta Ads", "Direct Messaging"],
  },
  {
    id: "rayyan-reach-campaign",
    clientName: "RAYYAN",
    businessCategory: "Fashion & Lifestyle Brand",
    campaignObjective: "Brand Recall & Large-Scale Demographic Reach",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/rayyan-logo.jpg",
    screenshotImage: "/images/rayyan-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "106,536 REACH @ ₹418.03",
    challenge:
      "Modern fashion and lifestyle labels face intense advertising competition on digital feeds. Generating high brand recall and extensive demographic exposure usually requires substantial budget investments.",
    strategy:
      "Constructed an algorithm-optimized Meta Ads Awareness & Reach campaign featuring bold brand visuals, high-contrast lifestyle creatives, and precision frequency capping to achieve maximum unique impressions at minimal cost.",
    execution: [
      "Audience modeling targeting fashion-forward demographics, trend-conscious youth, and lifestyle shoppers",
      "High-impact visual creatives highlighting modern apparel aesthetics and bold brand identity",
      "Delivery optimization focused on broad unique impressions rather than repetitive impression fatigue",
      "High-efficiency media buying achieving 106,536 unique reach on an ultra-modest ad spend of just ₹418.03",
    ],
    keyResults: [
      { label: "Total People Reached", value: "106,536 Reach", highlight: true },
      { label: "Cost Per Result", value: "₹3.92", highlight: true },
      { label: "Total Ad Spend", value: "₹418.03" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 106,536 unique people reached at just ₹3.92 cost per result with an ad spend of ₹418.03.",
    tags: ["Meta Ads", "Brand Awareness", "E-Commerce"],
  },
  {
    id: "pecific-appliances-campaign",
    clientName: "Pecific Appliances",
    businessCategory: "Home & Kitchen Appliances",
    campaignObjective: "Direct Customer Inquiries & Appliance Sales",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/pecific-appliances-logo.jpg",
    screenshotImage: "/images/pecific-appliances-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "35 LEADS @ ₹5.77",
    challenge:
      "Appliances retail and distribution businesses need to capture localized buyer intent without burning budget on broad visibility that fails to convert into direct customer conversations.",
    strategy:
      "Deployed a high-intent Meta Ads Click-to-WhatsApp messaging funnel featuring durable appliance showcases, clear product features, and instant consultation routing for model selection and doorstep delivery.",
    execution: [
      "Targeted residential homeowners, kitchen renovators, and family decision-makers across target territories",
      "Visual product showcase creatives highlighting appliance durability, aesthetics, and warranty guarantees",
      "Instant WhatsApp chat triggers with pre-filled inquiries for model pricing and delivery queries",
      "Tight budget discipline generating 35 qualified customer conversations at just ₹5.77 per lead with an ad spend of only ₹202.11",
    ],
    keyResults: [
      { label: "Conversations Started", value: "35 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹5.77", highlight: true },
      { label: "Total Ad Spend", value: "₹202.11" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 35 direct customer inquiries generated at ₹5.77 per lead on an ultra-lean spend of just ₹202.11.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging", "Retail & Local"],
  },
  {
    id: "momo-chat-awareness-campaign",
    clientName: "Momo Chat — A Tales of Taste",
    businessCategory: "Food & Beverage / QSR",
    campaignObjective: "Hyper-Local Brand Awareness & Footfall Reach",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/momo-chat-logo.jpg",
    screenshotImage: "/images/momo-chat-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "104,544 REACH @ ₹281.26",
    challenge:
      "Local quick-service food outlets and eateries must compete with saturated regional restaurant feeds. Driving hungry local foodies and young diners to discover a new outlet requires high-frequency visual stimulation without spending heavily on generic radius ads.",
    strategy:
      "Constructed an appetizing, mouth-watering Meta Ads Reach & Awareness campaign spotlighting steaming hot signature momos, vibrant dipping chutneys, and brand playfulness ('A tales of taste..!'), algorithmically targeted to young food lovers within dining proximity.",
    execution: [
      "Geo-fenced audience targeting focused on college students, food enthusiasts, and young professionals within dining proximity",
      "Mouth-watering, short-form food visual creatives engineered for maximum culinary craving and stop-scrolling power",
      "Cost-per-result algorithmic bidding ensuring hyper-efficient local reach without over-serving the same users",
      "Phenomenal media efficiency achieving 104,544 unique local foodies reached on a micro-budget of only ₹281.26",
    ],
    keyResults: [
      { label: "Total People Reached", value: "104,544 Reach", highlight: true },
      { label: "Cost Per Result", value: "₹2.69", highlight: true },
      { label: "Total Ad Spend", value: "₹281.26" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 104,544 unique foodies reached at an incredible ₹2.69 cost per result on an ad spend of just ₹281.26.",
    tags: ["Meta Ads", "Brand Awareness", "Food & Beverage", "Retail & Local"],
  },
  {
    id: "savari-cycles-campaign",
    clientName: "Savari Cycles",
    businessCategory: "Bicycles & Sports Retail",
    campaignObjective: "Direct Customer Inquiries & Cycle Booking Consultations",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/savari-cycles-logo.jpg",
    screenshotImage: "/images/savari-cycles-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "358 LEADS @ ₹5.68",
    challenge:
      "Cycle dealerships and fitness mobility retailers face stiff competition from online discount aggregators and large retail showrooms. Prospective cycle buyers need personal guidance on gear systems, frame sizing, and accessories before visiting or booking.",
    strategy:
      "Engineered a targeted Meta Ads Click-to-WhatsApp messaging funnel featuring mountain bikes, road hybrids, kids cycles, and gear packages, connecting interested riders directly with cycle experts for sizing consultations and store deals.",
    execution: [
      "Radius-targeted audience segmentation focusing on fitness enthusiasts, parents, cycling hobbyists, and outdoor commuters",
      "Dynamic video and carousel showcase ads highlighting gear precision, frame durability, and assembly quality",
      "Click-to-WhatsApp lead routing with automated starter prompts for model availability, pricing, and test-ride bookings",
      "Continuous bid optimization maintaining a cost-effective ₹5.68 per conversation across 358 customer inquiries on a ₹2,034 budget",
    ],
    keyResults: [
      { label: "Conversations Started", value: "358 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹5.68", highlight: true },
      { label: "Total Ad Spend", value: "₹2,034.50" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 358 direct buyer inquiries generated at ₹5.68 per lead with a total ad spend of ₹2,034.50.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging", "Retail & Local"],
  },
  {
    id: "sizore-designer-wear-campaign",
    clientName: "SIZORE — Cut Beyond Limits",
    businessCategory: "Designer Wear & Bespoke Fashion",
    campaignObjective: "Direct Inquiries & Custom Tailoring Bookings",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/sizore-logo.jpg",
    screenshotImage: "/images/sizore-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "132 LEADS @ ₹6.02",
    challenge:
      "Designer tailoring and bespoke couture require high client confidence and consultation before placing an order. Generic apparel e-commerce funnels fail because custom-fit customers demand 1-on-1 style advisory, fabric guidance, and measurement support.",
    strategy:
      "Constructed an exquisite Meta Ads Click-to-WhatsApp messaging funnel featuring premium stitching details, silhouette previews, and tailored styling consultations that directed high-intent fashion enthusiasts directly into conversational chat appointments.",
    execution: [
      "Targeted affluent fashion buyers, wedding shoppers, and custom apparel connoisseurs",
      "High-end aesthetic video and carousel showcases emphasizing 'Cut Beyond Limits' craftsmanship",
      "Instant Click-to-WhatsApp triggers with pre-configured bespoke tailoring consultation prompts",
      "Exceptional bid optimization capping customer acquisition cost at an ultra-efficient ₹6.02 per conversation across 132 inquiries",
    ],
    keyResults: [
      { label: "Conversations Started", value: "132 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹6.02", highlight: true },
      { label: "Total Ad Spend", value: "₹794.34" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 132 custom tailoring consultations generated at ₹6.02 per lead on an ad spend of just ₹794.34.",
    tags: ["Meta Ads", "Lead Generation", "Direct Messaging", "E-Commerce"],
  },
  {
    id: "z-dance-fitness-studio-campaign",
    clientName: "Z1fitto",
    businessCategory: "Fitness & Dance Studio",
    campaignObjective: "Trial Class Registrations & Studio Membership Inquiries",
    campaignPeriod: "Active Verified Campaign",
    clientLogo: "/images/z-dance-fitness-logo.jpg",
    screenshotImage: "/images/z-dance-fitness-meta-ads-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "83 LEADS @ ₹13.06",
    challenge:
      "Local fitness, Zumba, and dance studios often face high lead attrition and skepticism before prospects attend an in-person trial session. Standard contact forms produce low show-up rates because fitness seekers prefer direct, friendly consultation regarding schedule flexibility, batch timings, and trainer credentials.",
    strategy:
      "Engineered a high-energy Meta Ads Click-to-WhatsApp messaging campaign featuring dynamic workout video snippets, rhythm-packed class highlights, and instant free trial bookings connecting interested locals straight into conversational WhatsApp consultations.",
    execution: [
      "Geo-targeted radius modeling focusing on women, young professionals, and fitness enthusiasts within studio commute distance",
      "Vibrant, high-energy class footage showcasing inclusive choreography, calorie-burning routines, and supportive community vibes",
      "Frictionless Click-to-WhatsApp triggers with pre-configured slot booking prompts for trial sessions and monthly memberships",
      "Continuous cost-per-result optimization delivering 83 qualified member inquiries at an efficient ₹13.06 per lead on a ₹1,084 budget",
    ],
    keyResults: [
      { label: "Conversations Started", value: "83 Leads", highlight: true },
      { label: "Cost Per Conversation", value: "₹13.06", highlight: true },
      { label: "Total Ad Spend", value: "₹1,084.20" },
      { label: "Campaign Status", value: "Live Verified Data" },
    ],
    summaryNote:
      "Verified Meta Ads Manager data: 83 qualified trial and membership inquiries generated at ₹13.06 per lead on an ad spend of ₹1,084.20.",
    tags: ["Branding", "Retail & Local", "Direct Messaging"],
  },
  {
    id: "prep-d-ready-to-cook-campaign",
    clientName: "PREP D | Ready-to-Cook Foods",
    businessCategory: "D2C Food & FMCG",
    campaignObjective: "Social-First Brand Launch & Video Commercial Campaign",
    campaignPeriod: "Active Brand Campaign",
    clientLogo: "/images/prep-d-logo.jpg",
    screenshotImage: "/images/prep-d-campaign-showcase.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "D2C BRAND & COMMERCIAL LAUNCH",
    challenge:
      "Entering the ready-to-cook and fresh pre-cut food sector requires breaking traditional cooking habits and building instant hygiene trust. Consumers need clear proof of freshness, hygienic preparation, and time savings before ordering daily meal prep packs.",
    strategy:
      "Orchestrated a cinematic, social-first launch campaign featuring compelling ad film commercials ('Kerala will no longer pick up a knife!'), clear pack-to-pan convenience showcases, and direct-to-order WhatsApp and Instagram funnels for subscription and daily orders.",
    execution: [
      "Creative direction and high-production commercial video ad shoots demonstrating 'From Pack to Pan' convenience",
      "Targeted demographic distribution focusing on urban working professionals, busy households, and healthy food lovers",
      "Structured social media brand architecture with dedicated story highlights for Hygiene, Products, Combos, and Reviews",
      "Direct-to-order WhatsApp ordering integration capturing subscription meal kit orders and daily deliveries",
    ],
    keyResults: [
      { label: "Creative Focus", value: "Commercial Video Ad Campaign", highlight: true },
      { label: "Brand Concept", value: "Pack to Pan • Zero Waste", highlight: true },
      { label: "Ordering Channel", value: "Direct WhatsApp & D2C" },
      { label: "Campaign Tier", value: "Production & Social Growth" },
    ],
    summaryNote:
      "High-production commercial video ads and social media launch for PREP D Ready-to-Cook Foods, driving strong regional engagement and direct customer orders.",
    tags: ["Branding", "Food & Beverage", "Creative & Launch"],
  },
  {
    id: "saife-valappra-clarity-mentor-campaign",
    clientName: "Saife Valappra — The Clarity Mentor",
    businessCategory: "Executive Coaching & Consulting",
    campaignObjective: "Executive Personal Branding & Founder Authority",
    campaignPeriod: "Active Growth Retainer",
    clientLogo: "/images/saife-valappra-logo.jpg",
    screenshotImage: "/images/saife-valappra-profile-proof.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "22.5K+ FOUNDER COMMUNITY",
    challenge:
      "Establishing authority in the high-stakes SME consulting and business auditing space requires supreme credibility. Founders and CEOs rarely respond to generic marketing—they demand proven methodologies, structured thinking, and demonstrated leadership.",
    strategy:
      "Architected an executive personal branding and content ecosystem for Saife Valappra, establishing him as 'The Business Clarity Mentor' through high-value frameworks, SOP breakdowns, podcasts, and systematic founder growth content that built a dedicated 22,500+ founder following.",
    execution: [
      "Strategic positioning as a premier Business Performance Auditing Specialist for SMEs & expanding enterprises",
      "Authority-building content strategy breaking down complex business systems (SOPs, KPIs, Scalability Roadmaps)",
      "Podcast and media asset integration positioning the mentor alongside top industry leaders",
      "Conversion funnels turning social visibility into high-ticket 1-on-1 business performance audits and corporate advisory retainers",
    ],
    keyResults: [
      { label: "Founder Community", value: "22.5K+ Followers", highlight: true },
      { label: "Target Audience", value: "SMEs & Enterprise Founders", highlight: true },
      { label: "Core Expertise", value: "SOP • KPI • Business Audit" },
      { label: "Authority Assets", value: "Podcasts & Media Highlights" },
    ],
    summaryNote:
      "Strategic executive personal branding and authority positioning for Saife Valappra, scaling his audience to 22.5K+ founders and generating consistent inbound business audit inquiries.",
    tags: ["Branding", "Personal Brand", "B2B & Consulting"],
  },
  {
    id: "vipin-kk-ca-campaign",
    clientName: "VIPIN KK & CO — Chartered Accountants",
    businessCategory: "Finance, Taxation & Advisory",
    campaignObjective: "Authority Video Production & NRI Tax Advisory Inquiries",
    campaignPeriod: "Active Growth Retainer",
    clientLogo: "/images/vipin-kk-ca-logo.jpg",
    screenshotImage: "/images/vipin-kk-reels-showcase.jpg",
    screenshotPlaceholder: false,
    isVerified: true,
    metricBadge: "700K+ VIRAL REEL VIEWS",
    challenge:
      "Chartered accountancy and NRI taxation require absolute technical precision and high client trust. Complex topics like FEMA compliance, foreign asset reporting, and property repatriation are usually dry and overlooked, making it difficult to capture attention while maintaining professional compliance.",
    strategy:
      "Engineered a high-authority educational reel production strategy breaking down critical NRI tax laws, property sales, NRE accounts, and repatriation rules into engaging, bite-sized video insights that consistently hit 50K–65K+ organic views per video.",
    execution: [
      "Scriptwriting and production of high-retention educational reels addressing urgent NRI financial and FEMA pain points",
      "Authoritative professional framing establishing CA Vipin KK as the go-to authority for cross-border taxation",
      "Consistent distribution generating viral view counts (64K, 60K, 59K, 58K, 57K, 55K views per reel)",
      "Direct consultation funnels converting hundreds of thousands of organic viewers into high-ticket NRI tax advisory clients",
    ],
    keyResults: [
      { label: "Total Reel Views", value: "700K+ Video Views", highlight: true },
      { label: "Viral Reel Range", value: "50K–65K+ Views / Reel", highlight: true },
      { label: "Target Audience", value: "NRIs & Global HNWIs" },
      { label: "Advisory Practice", value: "FEMA • NRI Taxation • Audit" },
    ],
    summaryNote:
      "Viral educational reel production and authority positioning for VIPIN KK & CO Chartered Accountants, generating 700K+ views and consistent high-ticket NRI tax advisory retainers.",
    tags: ["Branding", "Personal Brand", "B2B & Consulting"],
  },
];
