import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as authActions } from '@features/auth.slice';
import { actions as songActions } from '@features/song.slice';

const rootActios = {
  ...authActions,
  ...songActions,
};
export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActios, dispatch), [dispatch]);
};
