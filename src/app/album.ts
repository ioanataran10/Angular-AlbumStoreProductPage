import { Track } from './track';

export interface Album {
  artist: string;
  album: {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
  };
}
