import { useTypedSelector } from './useTypedSelectors';

export const useUser = () => {
  const { isAuthenticated, user } = useTypedSelector((state) => state.auth);
  return { isAuthenticated, user };
};
