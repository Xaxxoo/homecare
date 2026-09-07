import {
  Stethoscope,
  Heart,
  Pill,
  Activity,
  Users,
  Brain,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  shortDescription: string;
  heroDescription: string;
  imagePath: string;
  imageAlt: string;
  howWeHelp: string;
  supportAreas: string[];
  whoThisHelps: string[];
  benefits: string[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "skilled-nursing-care",
    name: "Skilled Nursing Care",
    shortName: "Nursing Care",
    icon: Stethoscope,
    tagline: "Professional nursing support in the comfort of home",
    shortDescription:
      "In-home nursing support including wound care, health monitoring, IV therapy, and chronic disease management — delivered where you're most comfortable.",
    heroDescription:
      "When health needs call for professional nursing attention, receiving that care at home can make a real difference. Our skilled nursing services support your health while keeping you in the surroundings you know best.",
    imagePath: "/images/services/skilled-nursing-care.jpg",
    imageAlt: "A nurse providing care to a patient in their home",
    howWeHelp:
      "Our nursing team works closely with your healthcare providers to deliver support that aligns with your care plan. From routine health monitoring to more involved clinical needs, we bring attentive, skilled care directly to your home.",
    supportAreas: [
      "Wound care and dressing changes",
      "IV therapy and infusion support",
      "Chronic disease management and education",
      "Ongoing health monitoring and assessment",
      "Care coordination with physicians and specialists",
      "Post-surgical recovery support",
      "Vital signs monitoring",
      "Health status documentation and reporting",
    ],
    whoThisHelps: [
      "Individuals recovering from surgery or hospitalization",
      "People managing chronic health conditions at home",
      "Those requiring regular wound care or IV therapy",
      "Clients whose care plans include professional nursing support",
    ],
    benefits: [
      "Professional nursing support at home",
      "Coordinated communication with your healthcare team",
      "Consistent monitoring aligned with your care plan",
      "Fewer trips to clinics and facilities",
    ],
    relatedSlugs: [
      "medication-management",
      "rehabilitation-services",
      "personal-care-assistance",
    ],
  },
  {
    slug: "personal-care-assistance",
    name: "Personal Care Assistance",
    shortName: "Personal Care",
    icon: Heart,
    tagline: "Respectful support with everyday personal needs",
    shortDescription:
      "Compassionate help with bathing, dressing, grooming, mobility, and daily routines — delivered with patience and respect for your dignity and privacy.",
    heroDescription:
      "Everyone deserves to feel comfortable and cared for in their daily routine. Our personal care assistance helps with the activities that keep you feeling like yourself, delivered with patience, respect, and care for your dignity.",
    imagePath: "/images/services/personal-care-assistance.jpg",
    imageAlt: "A caregiver helping a senior with daily activities at home",
    howWeHelp:
      "Our caregivers provide gentle, respectful assistance with everyday personal needs. We follow your preferences and routines, adapting to what feels comfortable for you while helping you maintain the independence you value.",
    supportAreas: [
      "Bathing and shower assistance",
      "Dressing and clothing selection",
      "Grooming and personal hygiene",
      "Mobility support and transfers",
      "Toileting assistance",
      "Morning and evening routine support",
      "Positioning and comfort adjustments",
      "Skin care and personal maintenance",
    ],
    whoThisHelps: [
      "Older adults who need help with daily personal care",
      "Individuals with limited mobility or physical challenges",
      "People recovering from illness or injury",
      "Anyone who benefits from personal care support at home",
    ],
    benefits: [
      "Maintain personal hygiene with compassionate support",
      "Preserve dignity and independence in daily routines",
      "Feel comfortable and cared for each day",
      "Reduce the physical strain of self-care tasks",
    ],
    relatedSlugs: [
      "companion-care",
      "skilled-nursing-care",
      "house-cleaning-services",
    ],
  },
  {
    slug: "medication-management",
    name: "Medication Management",
    shortName: "Medication Mgmt",
    icon: Pill,
    tagline: "Helping maintain proper medication routines",
    shortDescription:
      "Stay on track with medication schedules through reminders, compliance support, prescription coordination, and communication with your healthcare providers.",
    heroDescription:
      "Managing multiple medications can feel overwhelming, especially when routines change or prescriptions are adjusted. Our medication management support helps you stay organized and on schedule, working alongside your healthcare providers to keep everything coordinated.",
    imagePath: "/images/services/medication-management.jpg",
    imageAlt: "A caregiver reviewing medication schedules with a client",
    howWeHelp:
      "We provide structured support for your medication routine, helping ensure that prescriptions are taken as directed and that any concerns are communicated to your healthcare team promptly. Our role is to make medication management simpler and more reliable.",
    supportAreas: [
      "Medication reminders and administration support",
      "Medication schedule organization",
      "Compliance monitoring and documentation",
      "Prescription coordination and refill tracking",
      "Communication with healthcare providers about medication concerns",
      "Monitoring according to the client's care plan",
      "Medication inventory management",
      "Education on medication purposes and schedules",
    ],
    whoThisHelps: [
      "Individuals managing multiple prescriptions",
      "Older adults who may need reminders for medication schedules",
      "People whose care plans include medication oversight",
      "Families who want peace of mind about a loved one's medication routine",
    ],
    benefits: [
      "Reduced risk of missed or incorrect doses",
      "Better communication with your healthcare providers",
      "Organized, reliable medication routines",
      "Greater peace of mind for you and your family",
    ],
    relatedSlugs: [
      "skilled-nursing-care",
      "personal-care-assistance",
      "companion-care",
    ],
  },
  {
    slug: "rehabilitation-services",
    name: "Rehabilitation Services",
    shortName: "Rehabilitation",
    icon: Activity,
    tagline: "Helping you rebuild strength, function, and confidence",
    shortDescription:
      "Physical therapy, occupational therapy, and speech therapy at home — supporting your recovery, improving mobility, and building confidence in daily activities.",
    heroDescription:
      "Recovery and rehabilitation look different for everyone. If you're working to regain mobility after surgery, strengthen your ability to manage daily tasks, or improve communication, our home-based rehabilitation services meet you where you are and support your progress at your own pace.",
    imagePath: "/images/services/rehabilitation-services.jpg",
    imageAlt: "A therapist working with a client on rehabilitation exercises at home",
    howWeHelp:
      "Our rehabilitation support brings therapy services into your home, where you can practice and build skills in the environment where they matter most. We work alongside your prescribed therapy program to help you move toward greater function and independence.",
    supportAreas: [
      "Physical therapy exercises and mobility work",
      "Occupational therapy for daily living skills",
      "Speech therapy and communication support",
      "Balance and fall-prevention exercises",
      "Strength and endurance building",
      "Adaptive technique training",
      "Home safety assessments related to mobility",
      "Progress tracking and care plan coordination",
    ],
    whoThisHelps: [
      "Individuals recovering from surgery, stroke, or injury",
      "People working to improve mobility and physical function",
      "Those with speech or communication challenges",
      "Anyone following a prescribed rehabilitation program at home",
    ],
    benefits: [
      "Practice recovery in your own familiar environment",
      "Build functional skills that apply to your daily life",
      "Work at a pace that respects your progress",
      "Reduce the burden of traveling to therapy appointments",
    ],
    relatedSlugs: [
      "skilled-nursing-care",
      "personal-care-assistance",
      "companion-care",
    ],
  },
  {
    slug: "companion-care",
    name: "Companion Care",
    shortName: "Companion Care",
    icon: Users,
    tagline: "Warm companionship and emotional support",
    shortDescription:
      "Compassionate companionship, conversation, and help with daily routines to reduce isolation and stay engaged with the people and activities you enjoy.",
    heroDescription:
      "Good health isn't just physical. Feeling connected and valued plays a real role in overall wellbeing. Our companion care gives you someone to share conversations, activities, and everyday moments with — a consistent, caring presence in your day.",
    imagePath: "/images/services/companion-care.jpg",
    imageAlt: "A caregiver sharing a conversation with a senior in a bright living room",
    howWeHelp:
      "Our companions bring warmth, patience, and real interest into each visit. From sharing a meal to going for a walk, playing a game, or simply having someone to talk to, we help fill the day with connection and support.",
    supportAreas: [
      "Conversation and active listening",
      "Social interaction and engagement",
      "Participation in hobbies and activities",
      "Assistance with light daily routines",
      "Accompaniment to appointments or outings",
      "Reading, puzzles, games, and entertainment",
      "Emotional support and encouragement",
      "Helping reduce feelings of isolation and loneliness",
    ],
    whoThisHelps: [
      "Older adults living alone who want regular social interaction",
      "Individuals experiencing loneliness or isolation",
      "People whose families live far away",
      "Anyone who values having a consistent, caring presence at home",
    ],
    benefits: [
      "Reduced feelings of loneliness and isolation",
      "Regular companionship and social connection",
      "Increased engagement with hobbies and activities",
      "Emotional wellbeing and a brighter outlook",
    ],
    relatedSlugs: [
      "personal-care-assistance",
      "alzheimers-dementia-care",
      "shopping-assistance",
    ],
  },
  {
    slug: "alzheimers-dementia-care",
    name: "Alzheimer's & Dementia Care",
    shortName: "Dementia Care",
    icon: Brain,
    tagline: "Compassionate, specialized support for cognitive care",
    shortDescription:
      "Specialized care for individuals living with Alzheimer's or dementia, focused on safety, familiar routines, comfort, dignity, and quality of life.",
    heroDescription:
      "Living with Alzheimer's or dementia brings unique challenges for individuals and their families. Our specialized care focuses on creating a safe, supportive environment that honors the person behind the diagnosis — prioritizing familiar routines, engagement, and the dignity every person deserves.",
    imagePath: "/images/services/alzheimers-dementia-care.jpg",
    imageAlt: "A caregiver engaging warmly with a senior client in their home",
    howWeHelp:
      "Our approach to dementia care is built on patience, consistency, and deep respect. We learn what matters to each individual and structure support around their routines, preferences, and comfort. Every interaction is guided by compassion and an understanding of how cognitive changes affect daily life.",
    supportAreas: [
      "Maintaining familiar daily routines and structure",
      "Safety monitoring and environmental awareness",
      "Engagement through activities and conversation",
      "Redirection and gentle behavioral support",
      "Personal care with patience and sensitivity",
      "Nutrition support and meal assistance",
      "Coordination with family members and healthcare teams",
      "Creating calm, reassuring environments",
    ],
    whoThisHelps: [
      "Individuals living with Alzheimer's disease",
      "People diagnosed with various forms of dementia",
      "Families seeking specialized support for a loved one with cognitive changes",
      "Caregivers who need additional help managing dementia-related care needs",
    ],
    benefits: [
      "Consistent, patient support from caregivers who understand cognitive care",
      "A focus on safety, comfort, and quality of life",
      "Familiar routines that provide stability and reassurance",
      "Peace of mind for families navigating cognitive care",
    ],
    relatedSlugs: [
      "companion-care",
      "personal-care-assistance",
      "medication-management",
    ],
  },
  {
    slug: "shopping-assistance",
    name: "Shopping Assistance",
    shortName: "Shopping Help",
    icon: ShoppingCart,
    tagline: "Help getting the essentials you need",
    shortDescription:
      "Support with grocery shopping, essential errands, and household necessities so you can access what you need without the stress of shopping alone.",
    heroDescription:
      "Getting to the store, navigating aisles, and carrying groceries home can become difficult when health or mobility changes. Our shopping assistance takes the stress out of essential errands, helping you keep your home stocked and your needs met.",
    imagePath: "/images/services/shopping-assistance.jpg",
    imageAlt: "A caregiver helping organize groceries in a home kitchen",
    howWeHelp:
      "We assist with planning shopping lists, making trips to the store, picking up prescriptions, and handling everyday errands. You can come along or have us shop on your behalf — either way, your home has everything you need.",
    supportAreas: [
      "Grocery shopping and food procurement",
      "Essential household supply shopping",
      "Prescription and pharmacy pickups",
      "Errands and essential appointments",
      "Shopping list planning and organization",
      "Accompaniment to stores when preferred",
      "Carrying, unpacking, and organizing purchases",
      "Helping locate specific items and brands",
    ],
    whoThisHelps: [
      "Individuals with limited mobility who find shopping difficult",
      "Older adults who prefer not to shop alone",
      "People recovering from surgery or illness",
      "Anyone who needs reliable help keeping their home stocked with essentials",
    ],
    benefits: [
      "Access to groceries and essentials without the physical strain",
      "Reduced stress around errands and shopping trips",
      "A well-stocked home with the items you prefer",
      "Maintained independence in how your household runs",
    ],
    relatedSlugs: [
      "companion-care",
      "house-cleaning-services",
      "personal-care-assistance",
    ],
  },
  {
    slug: "house-cleaning-services",
    name: "House Cleaning Services",
    shortName: "House Cleaning",
    icon: Sparkles,
    tagline: "A clean, safe, and comfortable home environment",
    shortDescription:
      "Keep your home tidy, safe, and comfortable with support for light housekeeping, laundry, kitchen cleaning, and everyday home maintenance tasks.",
    heroDescription:
      "A clean home isn't just about appearances. It's about safety, comfort, and peace of mind. When keeping up with housework becomes difficult, our cleaning services help maintain the kind of home environment that supports your health and wellbeing.",
    imagePath: "/images/services/house-cleaning.jpg",
    imageAlt: "A clean, bright, well-organized home living space",
    howWeHelp:
      "Our housekeeping support covers the everyday tasks that keep your home safe and comfortable. We work around your preferences and schedule, handling the cleaning so you can focus on the things that matter most to you.",
    supportAreas: [
      "Dusting and surface cleaning",
      "Vacuuming and floor care",
      "Light laundry and linen changes",
      "Kitchen cleaning and dish washing",
      "Bathroom cleaning and sanitizing",
      "Trash removal and recycling",
      "General tidying and organization",
      "Maintaining a safe, clutter-free environment",
    ],
    whoThisHelps: [
      "Individuals who find housekeeping physically challenging",
      "Older adults who want to maintain a clean, safe home",
      "People recovering from illness or surgery",
      "Anyone whose health or mobility makes daily cleaning difficult",
    ],
    benefits: [
      "A safer home environment with reduced fall risks",
      "Less physical strain from household chores",
      "A comfortable, well-maintained living space",
      "More time and energy for the things you enjoy",
    ],
    relatedSlugs: [
      "shopping-assistance",
      "personal-care-assistance",
      "companion-care",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => s !== undefined);
}
