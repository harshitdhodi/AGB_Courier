import { Metadata } from 'next';
import HomeTwoMain from '@/views/home-2/home-2';
import { fetchFromAPI, getPageMeta } from '@/utils/api';

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export async function generateMetadata(): Promise<Metadata> {
  const [siteSettings, pageMeta] = await Promise.all([
    fetchFromAPI('/api/settings/site'),
    getPageMeta('/'),
  ]);

  return {
    title: pageMeta?.title || (siteSettings?.title ? `${siteSettings.title} - Home` : 'AGB Courier - Home'),
    description: pageMeta?.description || siteSettings?.description,
    keywords: pageMeta?.keywords,
    alternates: pageMeta?.canonicalUrl ? { canonical: pageMeta.canonicalUrl } : undefined,
  };
}

async function getHomeData() {
  const [slides, about, tabs, counters, services, whyChoose, features, faqs, cta, blogs] = await Promise.all([
    fetchFromAPI('/api/hero-slides'),
    fetchFromAPI('/api/about-section'),
    fetchFromAPI('/api/about-tabs'),
    fetchFromAPI('/api/about-counters'),
    fetchFromAPI('/api/services'),
    fetchFromAPI('/api/why-choose-us'),
    fetchFromAPI('/api/choose-features'),
    fetchFromAPI('/api/faqs'),
    fetchFromAPI('/api/cta-section'),
    fetchFromAPI('/api/blogs'),
  ]);

  return {
    slides: slides || [],
    about: about || null,
    tabs: tabs || [],
    counters: counters || [],
    services: services || [],
    whyChoose: whyChoose || null,
    features: features || [],
    faqs: faqs || [],
    cta: cta || null,
    blogs: blogs || [],
  };
}

export default async function Home() {
  const data = await getHomeData();

  return (
    <>
      <HomeTwoMain data={data} />
    </>
  );
}
