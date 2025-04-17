import { useSuspenseQuery, QueryClient } from '@tanstack/react-query';
import { listUsers, listPosts, listComments } from '@/api';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    },
    mutations: {},
  },
});

export const useUsers = () => useSuspenseQuery({
  queryKey: ['users'],
  queryFn: listUsers
});

export const usePosts = () => useSuspenseQuery({
  queryKey: ['posts'],
  queryFn: listPosts
});

export const useComments = () => useSuspenseQuery({
  queryKey: ['comments'],
  queryFn: listComments
});
