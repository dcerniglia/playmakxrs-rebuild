/**
 * The three audiences. Rendered as brief cards on the home page and as fuller
 * sections on /who-we-serve, so the positioning stays identical in both places.
 *
 * Copy is deliberately outcome-level. The public site describes what an
 * engagement produces, never how it is produced — operating methods,
 * analytical frameworks and engagement architecture are proprietary and live
 * behind the applicant portal, not here.
 */
export interface Audience {
  /** Anchor id on /who-we-serve. */
  id: string;
  label: string;
  /** One line, used on the home card. */
  tagline: string;
  /** Short paragraph, used in both places. */
  summary: string;
  /** Outcomes, not mechanics. Three, so the card stays scannable. */
  points: string[];
  /** Accent, matching the audience's established color. */
  accent: 'crimson' | 'gold';
  cta: string;
}

export const AUDIENCES: Audience[] = [
  {
    id: 'institutions',
    label: 'Institutions',
    tagline: 'Universities, museums, foundations and archives',
    summary:
      'Universities, athletic departments, museums, foundations, archives and cultural organizations holding more meaning than they can currently see.',
    points: [
      'Recognition of overlooked people, moments and holdings',
      'Confidence in what can be verified',
      'Responsible pathways to visibility and enduring value',
    ],
    accent: 'crimson',
    cta: 'Start an institutional conversation',
  },
  {
    id: 'families',
    label: 'Athletes, Families & Estates',
    tagline: 'Descendants, athletes and estate representatives',
    summary:
      'People seeking to protect and responsibly steward valuable legacies, and to keep meaning connected to the person it came from.',
    points: [
      'Attribution and context kept intact',
      'Consent that stays with the source',
      'Stewardship that outlasts any single project',
    ],
    accent: 'gold',
    cta: 'Begin a confidential conversation',
  },
  {
    id: 'partners',
    label: 'Sponsors & Partners',
    tagline: 'Brands, broadcasters and publishers',
    summary:
      'Organizations seeking credible alignment with meaningful people, institutions and moments: association that is earned rather than borrowed.',
    points: [
      'Alignment with verified meaning',
      'Credible association, not borrowed attention',
      'Value that endures beyond a campaign',
    ],
    accent: 'crimson',
    cta: 'Discuss a partnership',
  },
];
