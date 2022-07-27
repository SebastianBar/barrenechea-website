import rss from '@astrojs/rss';

import { AppConfig } from '@/utils/AppConfig';

const mdxResults = import.meta.glob<{
  title: string;
  description: string;
  pubDate: Date;
  url: string;
}>('./**/*.mdx', { eager: true });

const mdx = Object.values(mdxResults);

const customData = '<language>en-us</language>';

export const get = () =>
  rss({
    title: AppConfig.siteName,
    description: AppConfig.description,
    site: import.meta.env.SITE,
    items: mdx.map((post) => ({
      link: post.url,
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      customData,
    })),
    customData,
  });
