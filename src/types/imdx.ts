import type { ImageMetadata } from '@astrojs/image';
import type { Page } from 'astro';

export interface IMDX {
  title: string;
  description: string;
  pubDate: Date;
  imgSrc: ImageMetadata;
  imgAlt: string;
  link?: string;
  url: string;
  tags?: string[];
}

export type IMDXPage = Page<IMDX>;
