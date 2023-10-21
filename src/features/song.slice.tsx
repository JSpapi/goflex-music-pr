import { createSlice } from '@reduxjs/toolkit';
import { songApi } from '@services/song.api';
import { ISong } from 'types/song.type';

interface IInitialState {
  songs: ISong[] | null;
}

const initialState: IInitialState = {
  songs: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      songApi.endpoints.getMySongs.matchFulfilled,
      (state, { payload }) => {
        state.songs = payload;
      }
    );
  },
});

export const { actions, reducer } = songsSlice;
