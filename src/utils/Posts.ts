import type { IMDX } from '@/types/imdx';

export const sortByDate = (posts: IMDX[]) => {
  return posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.valueOf());
};
