import { useTypedSelector } from './useTypedSelectors';

export const useSongs = () => {
  const { songs } = useTypedSelector((state) => state.songs);
  return songs;
};
