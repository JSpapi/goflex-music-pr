import { api } from './api';

export const songApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createSong: builder.mutation({
      query: (songData) => ({
        url: 'song/create',
        method: 'POST',
        body: songData,
      }),
    }),
    getMySongs: builder.query({
      query: () => ({
        url: 'song/mySongs',
        method: 'GET',
      }),
    }),
    getArtistsSongs: builder.query({
      query: (artistId) => ({
        url: `song/mySongs/${artistId}`,
        method: 'GET',
      }),
    }),
    getSong: builder.query({
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
