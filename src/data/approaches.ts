export interface Approach {
 slug: string;
 title: string;
 seoTitle?: string;
 shortTitle: string;
 href: string;
 description: string;
 cardDescription: string;
 hero: string;
 whatItIsTitle: string;
 whatItIs: string[];
 sessionTitle: string;
 session: string[];
 considerationsTitle: string;
 considerations: string[];
 related: { label: string; href: string }[];
}

export const approaches: Approach[] = [
 {
 slug: 'internal-family-systems',
 title: 'Internal Family Systems (IFS)',
 seoTitle: 'IFS Therapy | Richmond, VA',
 shortTitle: 'IFS',
 href: '/approaches/internal-family-systems/',
 description:
 'Learn how Avery Morgan may use Internal Family Systems concepts in individual counseling in Richmond, Virginia.',
 cardDescription:
 'A way to get curious about the different reactions inside you instead of treating them like enemies.',
 hero:
 'Sometimes one part of you wants change while another part is doing everything it can to keep things familiar.',
 whatItIsTitle: 'Conflicting reactions can make more sense when you stop asking which one is “the real you.”',
 whatItIs: [
 'IFS offers language for noticing different internal reactions—like the part that pushes, the part that avoids, the part that keeps everyone happy, or the part that expects something to go wrong.',
 'At Common Ground, the point is not to make you memorize a model. It is to get curious about what these reactions are trying to do for you and whether they still need to work so hard.',
 ],
 sessionTitle: 'You can start with whatever shows up in the moment.',
 session: [
 'Avery may slow down a familiar reaction and ask what it is afraid would happen if it stopped doing its job. That can make patterns feel less random and less shameful.',
 'Some sessions may use IFS language directly; others may simply use the idea of listening to competing needs without forcing one side to win.',
 ],
 considerationsTitle: 'The language is optional. Curiosity is the useful part.',
 considerations: [
 'You do not have to identify or name “parts” for this way of working to be helpful.',
 'Avery may combine IFS concepts with ordinary conversation, body awareness, or other approaches.',
 'If the framework does not fit how you think, the work can be described another way.',
 ],
 related: [
 { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
 { label: 'Relationship Concerns', href: '/services/relationship-concerns/' },
 { label: 'Meet Avery', href: '/about/avery-morgan/' },
 ],
 },

 {
 slug: 'somatic-experiencing',
 title: 'Somatic Experiencing & Body-Informed Therapy',
 seoTitle: 'Somatic Experiencing Therapy | Richmond, VA',
 shortTitle: 'Somatic Experiencing',
 href: '/approaches/somatic-experiencing/',
 description:
 'Learn how Avery Morgan may use Somatic Experiencing and body-informed practices in individual counseling in Richmond, Virginia.',
 cardDescription:
 'A way to notice what your body is doing while the rest of you is trying to keep moving.',
 hero:
 'Your body can react before your words catch up. Therapy can make room for both.',
 whatItIsTitle: 'Tension, shutdown, restlessness, and breath can all be part of the conversation.',
 whatItIs: [
 'Stress and emotion are not only thoughts. They can show up as tight shoulders, a racing heart, numbness, shallow breathing, fidgeting, fatigue, or the urge to get away.',
 'Avery may invite brief attention to those shifts so you can notice what activates you, what helps you settle, and what your body seems to be communicating in a given moment.',
 ],
 sessionTitle: 'Body awareness can be small and practical.',
 session: [
 'This might mean noticing your feet on the floor during a difficult story, tracking a change in your breathing, or pausing when your body seems to say “too much.”',
 'You stay in charge of the pace. Body-focused work can be shortened, changed, or skipped when it does not feel useful.',
 ],
 considerationsTitle: 'The body is part of the story, not the whole explanation.',
 considerations: [
 'A physical sensation is information, not proof that one interpretation is correct.',
 'Body awareness can be mixed with conversation, reflection, and other therapy approaches.',
 'You do not need to be comfortable with meditation or body-focused exercises to work with Avery.',
 ],
 related: [
 { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
 { label: 'Anxiety & Stress', href: '/services/anxiety-stress/' },
 { label: 'Meet Avery', href: '/about/avery-morgan/' },
 ],
 },

 {
 slug: 'emotionally-focused-therapy',
 title: 'Emotionally Focused Therapy (EFT) for Individuals',
 seoTitle: 'EFT for Individuals in Richmond, VA',
 shortTitle: 'EFT',
 href: '/approaches/emotionally-focused-therapy/',
 description:
 'Learn how Avery Morgan may use emotion- and attachment-focused ideas in individual counseling for adults in Richmond, Virginia.',
 cardDescription:
 'A way to look beneath recurring relationship reactions and understand what connection, distance, or conflict means to you.',
 hero:
 'The argument, shutdown, or people-pleasing may not be the whole story. There is often something underneath it.',
 whatItIsTitle: 'Relationship patterns often make more sense when you look at the need beneath the reaction.',
 whatItIs: [
 'Emotionally focused work pays attention to what happens when closeness, trust, belonging, or safety feels uncertain. People may pursue, withdraw, appease, argue, or go quiet for reasons that make sense in context.',
 'At Common Ground, these ideas are used in individual counseling. Avery is not providing couples therapy through this service.',
 ],
 sessionTitle: 'Slow the pattern down enough to see what it is protecting.',
 session: [
 'Avery may help you notice what happens immediately before a familiar relationship response and what need, fear, or expectation is underneath it.',
 'The work can include current relationships and earlier experiences without turning the session into a search for someone to blame.',
 ],
 considerationsTitle: 'Understanding a pattern does not tell you what decision to make.',
 considerations: [
 'Individual counseling can explore relationship dynamics without another person attending.',
 'The purpose is clarity and choice, not assigning fault.',
 'Avery may combine emotion-focused ideas with IFS, body awareness, or straightforward conversation.',
 ],
 related: [
 { label: 'Relationship Concerns', href: '/services/relationship-concerns/' },
 { label: 'Individual Therapy', href: '/services/individual-therapy/' },
 { label: 'Meet Avery', href: '/about/avery-morgan/' },
 ],
 },

 {
 slug: 'mindfulness-based-therapy',
 title: 'Mindfulness-Informed Therapy',
 seoTitle: 'Mindfulness-Informed Therapy | Richmond, VA',
 shortTitle: 'Mindfulness',
 href: '/approaches/mindfulness-based-therapy/',
 description:
 'Learn how Avery Morgan may use brief mindfulness and present-moment awareness practices in individual counseling in Richmond, Virginia.',
 cardDescription:
 'A practical way to notice what is happening before the usual reaction takes over.',
 hero:
 'Sometimes the first change is simply catching the moment before you disappear into autopilot.',
 whatItIsTitle: 'Mindfulness can be as ordinary as noticing what is happening right now.',
 whatItIs: [
 'In therapy, mindfulness might mean noticing a thought without immediately believing it, feeling your body tense during a conversation, or realizing that you have mentally left the room.',
 'It does not have to mean long meditation, emptying your mind, or trying to stay calm all the time.',
 ],
 sessionTitle: 'Small moments of attention can be enough.',
 session: [
 'Avery may invite a brief pause to notice a reaction, breath, sensation, emotion, or urge and then return to the conversation.',
 'These moments can help make automatic patterns easier to see and give you more choice about what happens next.',
 ],
 considerationsTitle: 'Use it when it helps. Skip it when it does not.',
 considerations: [
 'No meditation experience is required.',
 'Practices can be brief, practical, and adapted to the conversation.',
 'Mindfulness is one tool among several rather than a separate program you have to follow.',
 ],
 related: [
 { label: 'Anxiety & Stress', href: '/services/anxiety-stress/' },
 { label: 'Grief & Loss', href: '/services/grief-loss/' },
 { label: 'Meet Avery', href: '/about/avery-morgan/' },
 ],
 },
];
