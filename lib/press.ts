/**
 * Independent coverage of the Bobby Grier story — the single source of truth
 * for both the "As Featured In" logo strip and the detailed press list.
 *
 * Every URL here was opened in a real browser and confirmed to render the
 * expected piece. Several of these outlets return 403/202 to non-browser
 * requests (WGNO and ESPN both do), so a failed `curl` is not evidence a link
 * is dead. Re-verify the same way before adding or changing an entry.
 */
export interface PressItem {
  /** Publication, as it should be credited. */
  outlet: string;
  /** The outlet's own headline, quoted rather than paraphrased. */
  headline: string;
  /** What kind of piece it is — shown to set expectations before the click. */
  medium: 'Article' | 'Video' | 'Obituary' | 'Profile';
  /** Runtime for video pieces. */
  duration?: string;
  url: string;
  /** Context worth surfacing about why this piece matters. */
  note?: string;
  /**
   * Path under /assets/logos. Only set where we have a mark that survives the
   * monochrome treatment — entries without one still appear in the press list,
   * just not the logo strip.
   */
  logo?: string;
  /**
   * Set when the mark already reads light on a transparent ground. The strip
   * normally forces every logo to white, which destroys marks built as light
   * shapes layered over a dark one — ABC is white lettering on a black disc,
   * and inverting it yields a featureless white dot.
   */
  logoIsLight?: boolean;
}

export const PRESS_COVERAGE: PressItem[] = [
  {
    outlet: 'History',
    headline:
      'How Bobby Grier Integrated One of College Football’s Biggest Games',
    medium: 'Article',
    url: 'https://www.history.com/articles/bobby-grier-college-football-color-barrier-sugar-bowl',
    logo: '/assets/logos/history.svg',
  },
  {
    outlet: 'ESPN',
    headline:
      '“The South Stands at Armageddon”: Breaking the Sugar Bowl Color Barrier',
    medium: 'Article',
    url: 'https://www.espn.com/college-football/story/_/id/26027623/the-south-stands-armageddon-breaking-sugar-bowl-color-barrier',
    logo: '/assets/logos/espn.svg',
  },
  {
    outlet: 'Fox 5 Atlanta',
    headline: 'Fox 5 Atlanta Interviews Bobby Grier About the 1956 Sugar Bowl',
    medium: 'Video',
    duration: '4:28',
    url: 'https://www.youtube.com/watch?v=rqKf4Es0uOU',
    logo: '/assets/logos/fox.svg',
  },
  {
    outlet: 'ABC · WGNO',
    headline:
      'Sweet Integration: The Story of Bobby Grier and the 1956 Sugar Bowl',
    medium: 'Video',
    duration: '3:26',
    url: 'https://wgno.com/hidden-history/sweet-integration-the-story-of-bobby-grier-and-the-1956-sugar-bowl/',
    logo: '/assets/logos/abc.svg',
    logoIsLight: true,
  },
  {
    outlet: 'CBS · KDKA Pittsburgh',
    headline:
      'Bobby Grier, first Black player to play in the Sugar Bowl, dies at 91',
    medium: 'Obituary',
    url: 'https://www.cbsnews.com/pittsburgh/news/former-pitt-football-player-and-first-black-player-to-play-in-the-sugar-bowl-bobby-grier-dies-at-91/',
    logo: '/assets/logos/kdka.svg',
  },
  {
    outlet: 'Pitt Athletics',
    headline: 'Bobby Grier Enshrined in the Pitt Athletics Hall of Fame',
    medium: 'Profile',
    url: 'https://pittsburghpanthers.com/honors/pitt-athletics-hall-of-fame/bobby-grier/44',
    logo: '/assets/logos/pitt.svg',
  },
  {
    outlet: 'Georgia Tech Alumni',
    headline: 'The Big Moment',
    medium: 'Article',
    url: 'https://www.gtalumni.org/news/2024/the-big-moment.html',
    note: 'Told by the opposing school: Georgia Tech played Pitt in that Sugar Bowl.',
    // No logo: the only available Georgia Tech mark is a JPEG with a baked-in
    // transparency checkerboard, which cannot be rendered on a dark ground.
  },
];

/** Entries with a usable mark, for the "As Featured In" strip. */
export const FEATURED_LOGOS = PRESS_COVERAGE.filter((p) => p.logo);
