import { StaticImageData } from 'next/image';

export interface IBlogDT {
  id: number;
  image?: StaticImageData | string;
  images?: StaticImageData[];
  title: string;
  publishedDate?: string;
  category?: string;
  blogAuthor?: string;
  blogText?: string;
  commentCount?: string;
  detailsImage?: StaticImageData | string;
  description?: string;
  hasModalVideo?: boolean;
  btnText?: string;
}
