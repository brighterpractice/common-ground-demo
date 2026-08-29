import type { ServicePageContent } from './service-pages';

export const commonGroundServicePages: Record<string, ServicePageContent> = {
  'individual-therapy': {
    title: 'Individual Therapy in Richmond, Virginia',
    description: 'Individual counseling with Avery Morgan, LPC, for adults in Richmond, Virginia.',
    hero: 'Bring the version of the story you actually have—not the polished one you think you should have.',
    leadTitle: 'You can start with the thing that keeps showing up.',
    lead: [
      'Maybe it is a conflict you keep replaying, a feeling you cannot shake, a loss that changed more than you expected, or the sense that you are moving through life on autopilot.',
      'Individual therapy gives you one place where the conversation can stay with your experience long enough to understand what is happening and what you want to do differently.',
    ],
    experiencesTitle: 'People often bring things like',
    experiences: [
      'Stress that follows you even when the day is over',
      'Relationship patterns that keep repeating',
      'Grief, endings, or changes that altered your footing',
      'Anxiety, overthinking, or constant second-guessing',
      'Feeling flat, disconnected, or unlike yourself',
      'Questions about identity, boundaries, confidence, or direction',
    ],
    approachTitle: 'The conversation can be practical, reflective, messy, or all three.',
    approach: [
      'Avery pays attention to what keeps recurring, what feels hard to say out loud, and what happens when you slow a familiar reaction down enough to look at it.',
      'Different methods may be useful at different times, but the work stays connected to real life rather than turning therapy into a program you have to perform correctly.',
    ],
    related: [
      { slug: 'anxiety-stress', label: 'Anxiety & Stress' },
      { slug: 'relationship-concerns', label: 'Relationship Concerns' },
    ],
    approachLinks: [
      { href: '/approaches/', label: 'See how we work' },
    ],
  },

  'trauma-ptsd': {
    title: 'Trauma Therapy in Richmond, Virginia',
    description: 'Individual counseling in Richmond for adults dealing with the ongoing effects of difficult or overwhelming experiences.',
    hero: 'Sometimes the event is over and your reactions are still acting like it is happening now.',
    leadTitle: 'Your system may be doing an old job in a new moment.',
    lead: [
      'Trauma responses can look loud—panic, nightmares, sudden fear—or quiet, like numbness, distance, avoidance, and the feeling that part of you is never fully off duty.',
      'Avery does not require you to tell the whole story before you are ready. Therapy can begin with how the experience is affecting your life today.',
    ],
    experiencesTitle: 'You might notice',
    experiences: [
      'Feeling braced for something even when nothing is obviously wrong',
      'Strong reactions to reminders that surprise you',
      'Avoiding situations, topics, memories, or emotions',
      'Feeling far away from yourself or other people',
      'Trouble trusting, relaxing, or letting your guard down',
      'Physical alarm that arrives before you know why',
    ],
    approachTitle: 'The pace matters as much as the method.',
    approach: [
      'Avery may begin by helping you understand the reactions that are happening now and what makes them easier or harder to manage.',
      'IFS concepts, body-informed work, mindfulness, and direct conversation may all be options. Nothing requires forcing yourself through material just to prove you are making progress.',
    ],
    related: [{ slug: 'anxiety-stress', label: 'Anxiety & Stress' }],
    approachLinks: [
      { href: '/approaches/internal-family-systems/', label: 'Internal Family Systems' },
      { href: '/approaches/somatic-experiencing/', label: 'Somatic & body-informed work' },
    ],
  },

  'anxiety-stress': {
    title: 'Anxiety & Stress Therapy in Richmond, Virginia',
    description: 'Counseling in Richmond for adults dealing with worry, tension, pressure, overthinking, and chronic stress.',
    hero: 'When your brain keeps holding meetings you never scheduled.',
    leadTitle: 'Anxiety can be loud, efficient, exhausting, and strangely convincing.',
    lead: [
      'You may rehearse every possibility, keep adding one more task, struggle to rest without guilt, or feel responsible for preventing problems before they happen.',
      'Therapy can help you notice what the worry is trying to accomplish and what it costs you when it gets to make every decision.',
    ],
    experiencesTitle: 'The pattern may look like',
    experiences: [
      'Replaying conversations long after they are over',
      'Constant planning for what might go wrong',
      'Tension, irritability, restlessness, or poor sleep',
      'Perfectionism or fear of choosing incorrectly',
      'Avoiding decisions because every option feels risky',
      'Feeling guilty when you are not being productive',
    ],
    approachTitle: 'Make the worry less mysterious and less in charge.',
    approach: [
      'Avery may help you map what sets anxiety off, what it predicts, what you do next, and which short-term fixes accidentally keep the cycle running.',
      'The work can include practical experiments, body awareness, mindfulness, or curiosity about earlier experiences when they seem connected to the current pressure.',
    ],
    related: [{ slug: 'individual-therapy', label: 'Individual Therapy' }],
    approachLinks: [
      { href: '/approaches/mindfulness-based-therapy/', label: 'Mindfulness-informed therapy' },
      { href: '/approaches/somatic-experiencing/', label: 'Somatic & body-informed work' },
    ],
  },

  'grief-loss': {
    title: 'Grief & Loss Counseling in Richmond, Virginia',
    description: 'Individual counseling for grief, loss, and major endings with Avery Morgan, LPC, in Richmond, Virginia.',
    hero: 'Grief can be sad, angry, numb, relieving, disorienting—or all of those before lunch.',
    leadTitle: 'Loss rarely stays in one part of life.',
    lead: [
      'A death, breakup, health change, lost role, move, or future that did not happen can affect routines, identity, relationships, energy, and what the world feels like now.',
      'Therapy gives grief somewhere to exist without asking you to make it tidy, inspirational, or finished on somebody else’s schedule.',
    ],
    experiencesTitle: 'Grief may bring',
    experiences: [
      'Emotions that change quickly or seem contradictory',
      'Numbness or the feeling that the loss is not fully real',
      'Anger, guilt, relief, longing, or regret',
      'Difficulty concentrating on ordinary responsibilities',
      'Feeling out of sync with how other people expect you to be doing',
      'Questions about identity, meaning, or what happens next',
    ],
    approachTitle: 'There is no prize for grieving correctly.',
    approach: [
      'Avery may help you talk about the loss itself, the life around it, and the changes that other people may not see.',
      'The work can include memory, anger, uncertainty, practical adjustment, relationships, and the question of how to keep living without pretending the loss no longer matters.',
    ],
    related: [{ slug: 'life-transitions', label: 'Life Transitions' }],
    approachLinks: [{ href: '/approaches/mindfulness-based-therapy/', label: 'Mindfulness-informed therapy' }],
  },

  'depression-emotional-disconnection': {
    title: 'Depression & Emotional Disconnection | Richmond, VA',
    description: 'Counseling in Richmond for adults dealing with low mood, shutdown, numbness, and emotional disconnection.',
    hero: 'Sometimes nothing is dramatically wrong and you still feel increasingly absent from your own life.',
    leadTitle: 'Disconnection can look more like “going through the motions” than obvious sadness.',
    lead: [
      'You may be getting things done while feeling flat, irritable, exhausted, disconnected from people, or less interested in things that used to matter.',
      'Therapy can make room to understand what has gone quiet, what feels too heavy, and what makes withdrawal or shutdown feel necessary.',
    ],
    experiencesTitle: 'You may recognize',
    experiences: [
      'Living mostly on autopilot',
      'Low energy or difficulty beginning ordinary tasks',
      'Pulling away from people or activities',
      'Harsh self-talk that makes everything feel heavier',
      'Feeling numb, unreachable, or emotionally flat',
      'Wanting change but not having much energy to chase it',
    ],
    approachTitle: 'Start with honest contact instead of forced optimism.',
    approach: [
      'Avery may help you notice patterns around pressure, withdrawal, self-criticism, grief, or shutdown and find small ways back into contact with what matters.',
      'Progress does not have to mean suddenly feeling great. Sometimes it begins with clearer language, a little more choice, and less fighting with the fact that this is hard.',
    ],
    related: [{ slug: 'individual-therapy', label: 'Individual Therapy' }],
    approachLinks: [{ href: '/approaches/', label: 'See how we work' }],
  },

  'chronic-pain-chronic-illness': {
    title: 'Chronic Pain & Illness Counseling | Richmond, VA',
    description: 'Counseling for the emotional and relational impact of chronic pain and chronic illness in Richmond, Virginia.',
    hero: 'Living with a body that changes the plan can affect far more than the appointment calendar.',
    leadTitle: 'Illness and pain can rearrange identity, relationships, work, and expectations.',
    lead: [
      'Ongoing symptoms can bring grief, frustration, uncertainty, isolation, and the exhausting task of explaining yourself to people who cannot see what the day costs you.',
      'Counseling does not treat the medical condition. It gives the emotional and relational impact of living with it a place of its own.',
    ],
    experiencesTitle: 'The strain may include',
    experiences: [
      'Grief over lost energy, ability, roles, or plans',
      'Anxiety about symptoms, appointments, or flare-ups',
      'Feeling misunderstood or tired of having to explain',
      'Changes in work, caregiving, intimacy, or family roles',
      'Guilt about limits or needing help',
      'Trying to balance rest, activity, expectations, and what still matters',
    ],
    approachTitle: 'Your condition can be important without becoming your entire identity.',
    approach: [
      'Avery may help you make room for grief and frustration, communicate needs, rethink boundaries, and stay connected with relationships and values while circumstances change.',
      'Therapy does not suggest that physical symptoms are imaginary or caused by attitude. Medical concerns remain medical concerns.',
    ],
    wholePersonTitle: 'Emotional support and medical care can have different jobs.',
    wholePerson: [
      'Counseling focuses on what it is like to live with the condition, not on replacing medical evaluation or treatment.',
    ],
    related: [
      { slug: 'grief-loss', label: 'Grief & Loss' },
      { slug: 'life-transitions', label: 'Life Transitions' },
    ],
    approachLinks: [{ href: '/approaches/', label: 'See how we work' }],
  },

  'life-transitions': {
    title: 'Life Transitions Counseling | Richmond, VA',
    description: 'Individual counseling for major changes in work, relationships, identity, family roles, and direction in Richmond, Virginia.',
    hero: 'Even a change you chose can make you wonder who you are on the other side of it.',
    leadTitle: 'Transitions can hold relief and grief at the same time.',
    lead: [
      'A move, career change, breakup, marriage, caregiving role, health shift, retirement, or new stage of family life can disrupt routines and identities that once felt obvious.',
      'Therapy can help you sort through what you are leaving, what you are carrying forward, and what you want the next version of life to make room for.',
    ],
    experiencesTitle: 'Transitions may involve',
    experiences: [
      'Changes in identity or purpose',
      'A new role that does not feel natural yet',
      'Relief mixed with grief or guilt',
      'Uncertainty about a major decision',
      'Changes in community, family, work, or support',
      'Feeling between an old version of life and a new one',
    ],
    approachTitle: 'You can be moving forward and still miss what came before.',
    approach: [
      'Avery may help you name what the transition is asking from you, what fears or expectations it activates, and what parts of your identity still feel useful.',
      'The work can stay practical while making room for the emotional contradictions that often come with change.',
    ],
    related: [{ slug: 'grief-loss', label: 'Grief & Loss' }],
    approachLinks: [{ href: '/approaches/', label: 'See how we work' }],
  },

  'relationship-concerns': {
    title: 'Relationship Concerns | Richmond, VA',
    description: 'Individual counseling for communication, boundaries, conflict, trust, and recurring relationship patterns in Richmond, Virginia.',
    hero: 'If the same argument keeps showing up in different clothes, the pattern may deserve a closer look.',
    leadTitle: 'The reaction makes sense somewhere—even when it creates a problem here.',
    lead: [
      'You might go quiet, over-explain, fix everything, pull away, people-please, argue harder, or become intensely self-reliant when connection feels uncertain.',
      'Individual therapy gives you space to study your side of the pattern: what you notice, what you expect, what you need, and where your choices seem to disappear.',
    ],
    experiencesTitle: 'You may want to understand',
    experiences: [
      'Conflict that follows the same sequence',
      'People-pleasing or difficulty setting boundaries',
      'Fear of rejection, closeness, dependence, or abandonment',
      'Trust after hurt or betrayal',
      'Why certain relationships bring out a version of you that you do not like',
      'Whether you want to repair, change, or leave a relationship',
    ],
    approachTitle: 'Slow the pattern down before deciding what it means.',
    approach: [
      'Avery may explore emotions, attachment needs, assumptions, body responses, and the strategies you use to protect yourself or preserve connection.',
      'This is individual therapy, not couples counseling. The work is not about assigning blame or telling you what decision to make.',
    ],
    related: [{ slug: 'individual-therapy', label: 'Individual Therapy' }],
    approachLinks: [{ href: '/approaches/emotionally-focused-therapy/', label: 'Emotionally focused work' }],
  },

  'self-esteem-personal-growth': {
    title: 'Self-Esteem & Personal Growth | Richmond, VA',
    description: 'Counseling for confidence, boundaries, values, self-trust, and personal growth in Richmond, Virginia.',
    hero: 'Personal growth does not have to begin with the assumption that you are a project that needs fixing.',
    leadTitle: 'Sometimes the goal is not symptom relief. It is becoming more at home in your own decisions.',
    lead: [
      'You may want to trust your judgment, stop organizing your choices around other people’s approval, understand a repeating pattern, or get clearer about what matters to you now.',
      'Therapy can offer a place to examine those questions honestly without turning every uncertainty into evidence that something is wrong with you.',
    ],
    experiencesTitle: 'You may be working on',
    experiences: [
      'Self-criticism or chronic comparison',
      'Difficulty trusting your own decisions',
      'Boundaries that feel harder to hold than to understand',
      'Identity, values, or changing priorities',
      'Patterns that keep you smaller than you want to be',
      'Wanting a more deliberate relationship with your own life',
    ],
    approachTitle: 'Growth can be curious instead of punitive.',
    approach: [
      'Avery may help you notice the rules and expectations you have been living by, where they came from, and whether they still fit.',
      'The work can include practical boundary-setting, values, relationship patterns, internal conflict, and experimenting with choices that feel more like your own.',
    ],
    related: [{ slug: 'relationship-concerns', label: 'Relationship Concerns' }],
    approachLinks: [{ href: '/approaches/internal-family-systems/', label: 'Internal Family Systems' }],
  },
};
