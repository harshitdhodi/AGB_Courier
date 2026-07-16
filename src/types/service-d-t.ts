import { StaticImageData } from 'next/image';

export interface IServiceDT {
  id: number;
  image?: StaticImageData | string;
  bgImage?: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  detailsImage?: StaticImageData | string;
  serviceCount?: string;
  btnText?: string;
  category?: string;
}
