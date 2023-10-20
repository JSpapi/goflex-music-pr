import { createSlice } from '@reduxjs/toolkit';
import { songApi } from '@services/song.api';
import { ISong } from 'types/song.type';

interface IInitialState {
  mySongs: ISong[] | null;
}

const initialState: IInitialState = {
  mySongs: null,
};

const mySongsSlice = createSlice({
  name: 'mySongs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      songApi.endpoints.getMySongs.matchFulfilled,
      (state, { payload }) => {
        state.mySongs = payload;
      }
    );
  },
});
