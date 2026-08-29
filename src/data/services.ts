export interface Service {
 slug: string;
 title: string;
 href: string;
 description: string;
 homeDescription?: string;
 showOnHome?: boolean;
 published: boolean;
}

export const services: Service[] = [
 {
  slug: 'individual-therapy',
  title: 'Individual Therapy',
  href: '/services/individual-therapy/',
  description: 'One-to-one counseling with room for the complicated, unfinished, and hard-to-name parts of real life.',
  published: true,
 },
 {
  slug: 'trauma-ptsd',
  title: 'Trauma & PTSD',
  href: '/services/trauma-ptsd/',
  description: 'Support when a difficult experience is over but your reactions are still behaving as if it is close by.',
  homeDescription: 'When the past keeps interrupting the present in ways you did not ask for.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'anxiety-stress',
  title: 'Anxiety & Stress',
  href: '/services/anxiety-stress/',
  description: 'For overthinking, tension, pressure, perfectionism, and the brain that keeps planning after you are done for the day.',
  homeDescription: 'For worry that keeps holding meetings long after everyone else went home.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'grief-loss',
  title: 'Grief & Loss',
  href: '/services/grief-loss/',
  description: 'A place for loss in all its untidy forms—sadness, anger, numbness, relief, longing, and everything between.',
  homeDescription: 'Space for grief without a timetable or a requirement to carry it neatly.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'depression-emotional-disconnection',
  title: 'Depression & Emotional Disconnection',
  href: '/services/depression-emotional-disconnection/',
  description: 'Counseling when you are getting through the day but feel increasingly absent from your own life.',
  homeDescription: 'For the days when life is moving but you feel farther away from it than you want to be.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'chronic-pain-chronic-illness',
  title: 'Chronic Pain & Chronic Illness Counseling',
  href: '/services/chronic-pain-chronic-illness/',
  description: 'Support for the grief, adjustment, relationships, limits, and identity changes that can come with ongoing health concerns.',
  published: true,
 },
 {
  slug: 'life-transitions',
  title: 'Life Transitions',
  href: '/services/life-transitions/',
  description: 'Counseling for the strange middle ground between a life that changed and the one you have not settled into yet.',
  homeDescription: 'When a change you expected—or even chose—still knocks your footing around.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'relationship-concerns',
  title: 'Relationship Concerns',
  href: '/services/relationship-concerns/',
  description: 'Individual counseling for the conflict, distance, people-pleasing, boundaries, and familiar patterns that show up between people.',
  homeDescription: 'For relationship patterns that keep returning in slightly different clothes.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'self-esteem-personal-growth',
  title: 'Self-Esteem & Personal Growth',
  href: '/services/self-esteem-personal-growth/',
  description: 'A place to work on self-trust, boundaries, values, confidence, and growth without treating yourself like a project to fix.',
  published: true,
 },
];

export const homepageServices = services.filter((service) => service.showOnHome);
