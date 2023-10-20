import { ICreateSong, ISong } from 'types/song.type';
import { api } from './api';

export const songApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createSong: builder.mutation<ISong, ICreateSong>({
      query: (songData) => ({
        url: 'song/create',
        method: 'POST',
        body: songData,
      }),
    }),
    getMySongs: builder.query<ISong[], void>({
      query: () => ({
        url: 'song/mySongs',
        method: 'GET',
      }),
    }),
    getArtistsSongs: builder.query<ISong[], void>({
      query: (artistId) => ({
        url: `song/mySongs/${artistId}`,
        method: 'GET',
      }),
    }),
    getSong: builder.query<ISong, void>({
      query: (songName) => ({
        url: `song/songName/${songName}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateSongMutation,
  useGetMySongsQuery,
  useGetArtistsSongsQuery,
  useGetSongQuery,
} = songApi;
