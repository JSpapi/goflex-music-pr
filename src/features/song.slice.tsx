import { createSlice } from '@reduxjs/toolkit';
import { songApi } from '@services/song.api';

const initialState = {
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
