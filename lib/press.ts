/**
 * Independent press coverage of the Bobby Grier story.
 *
 * Every URL here was opened in a real browser and confirmed to render the
 * expected article — several of these outlets return 403/202 to non-browser
 * requests, so a failed `curl` is not evidence a link is dead. Re-verify the
 * same way before adding or changing an entry.
 *
 * Shared so `/about` and `/partners` can render the same list without the two
 * copies drifting apart.
 */
export interface PressItem {
  /** Publication, as it should be credited. */
  outlet: string;
  /** The outlet's own headline, quoted rather than paraphrased. */
  headline: string;
  /** What kind of piece it is — shown to set expectations before the click. */
  medium: 'Article' | 'Video' | 'Obituary';
  /** Runtime for video pieces. */
  duration?: string;
  url: string;
  /** Optional context worth surfacing about why this piece matters. */
  note?: string;
}

export const PRESS_COVERAGE: PressItem[] = [
  {
    outlet: 'History',
    headline:
      'How Bobby Grier Integrated One of College Football’s Biggest Games',
    medium: 'Article',
    url: 'https://www.history.com/articles/bobby-grier-college-football-color-barrier-sugar-bowl',
  },
  {
    outlet: 'ESPN',
    headline:
      '“The South Stands at Armageddon”: Breaking the Sugar Bowl Color Barrier',
    medium: 'Article',
    url: 'https://www.espn.com/college-football/story/_/id/26027623/the-south-stands-armageddon-breaking-sugar-bowl-color-barrier',
  },
  {
    outlet: 'ABC · WGNO',
    headline:
      'Sweet Integration: The Story of Bobby Grier and the 1956 Sugar Bowl',
    medium: 'Video',
    duration: '3:26',
    url: 'https://wgno.com/hidden-history/sweet-integration-the-story-of-bobby-grier-and-the-1956-sugar-bowl/',
  },
  {
    outlet: 'CBS · KDKA Pittsburgh',
    headline:
      'Bobby Grier, first Black player to play in the Sugar Bowl, dies at 91',
    medium: 'Obituary',
    url: 'https://www.cbsnews.com/pittsburgh/news/former-pitt-football-player-and-first-black-player-to-play-in-the-sugar-bowl-bobby-grier-dies-at-91/',
  },
  {
    outlet: 'Georgia Tech Alumni',
    headline: 'The Big Moment',
    medium: 'Article',
    url: 'https://www.gtalumni.org/news/2024/the-big-moment.html',
    note: 'Told by the opposing school — Georgia Tech played Pitt in that Sugar Bowl.',
  },
];
