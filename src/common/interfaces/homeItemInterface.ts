/* eslint-disable camelcase */
export interface ICardItem {
  added: number;
  added_by_status: any; // to expand
  background_image: string;
  clip: null; // or video
  dominant_color: string;
  esrb_rating: any; // to expand
  genres: any; // to expand
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: any; // to expand
  platforms: any; // to expand
  playtime: number;
  rating: number;
  rating_top: number;
  ratings: any; // to expand
  ratings_count: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  short_screenshots: any; // to expand
  slug: string;
  stores: any; // to expand
  suggestions_count: number;
  tags: any; // to expand;
  tba: boolean;
  updated: string; // maybe data
  user_game: null; // or something
}
