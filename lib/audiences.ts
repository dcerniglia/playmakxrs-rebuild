/**
 * The three lanes. Rendered as brief cards on the home page and as fuller
 * sections on /who-we-serve, so the positioning stays identical in both
 * places. Copy is condensed from the retired lane pages.
 */
export interface Audience {
  /** Anchor id on /who-we-serve. */
  id: string;
  label: string;
  /** One line, used on the home card. */
  tagline: string;
  /** Short paragraph, used in both places. */
  summary: string;
  /** What they actually get — kept to four so the card stays scannable. */
  points: string[];
  /** Accent, matching the lane's established color. */
  accent: 'crimson' | 'gold';
  cta: string;
}

export const AUDIENCES: Audience[] = [
  {
    id: 'institutions',
    label: 'Institutions',
    tagline: 'Athletic departments and universities',
    summary:
      'Your archives hold milestones no one has cataloged and pioneers no one has honored. We recover them, clear the rights, and hand you assets your department can actually use — without disrupting staff or competing with your NIL program.',
    points: [
      'Narrative Capital audit of unmonetised history',
      'Rights and risk cleared before anything is published',
      'A 90–120 day pilot with fixed scope and fee',
      'Board-ready briefing materials',
    ],
    accent: 'crimson',
    cta: 'Start an institutional conversation',
  },
  {
    id: 'families',
    label: 'Families & Estates',
    tagline: 'Descendants and athlete estates',
    summary:
      'The family is the source. Before a single word is published we establish chain-of-title, secure your consent, and put your participation in writing. You keep moral rights over how your relative is portrayed, and you can narrow or withdraw that consent.',
    points: [
      'Verified chain-of-title and estate NIL protection',
      'Written consent before any commercial use',
      'Agreed commercial participation',
      'Approval over material changes in direction',
    ],
    accent: 'gold',
    cta: 'Begin a confidential family conversation',
  },
  {
    id: 'partners',
    label: 'Sponsors & Media',
    tagline: 'Brands, broadcasters and publishers',
    summary:
      'Athlete sponsorship carries present-tense risk. Verified history does not. Partner with a story whose facts are settled, whose rights are cleared, and whose meaning compounds rather than expiring at the end of a season.',
    points: [
      'Rights-cleared, indemnified heritage properties',
      'No present-tense athlete risk',
      'Multi-format delivery — print, broadcast, exhibit',
      'Permanent cultural association, not a campaign flight',
    ],
    accent: 'crimson',
    cta: 'Discuss a partnership',
  },
];
