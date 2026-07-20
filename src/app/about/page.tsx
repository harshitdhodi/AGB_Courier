import { Metadata } from 'next';
import AboutMain from '@/views/about/about';
import { fetchFromAPI, getPageMeta } from '@/utils/api';

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export async function generateMetadata(): Promise<Metadata> {
  const [siteSettings, pageMeta] = await Promise.all([
    fetchFromAPI('/api/settings/site'),
    getPageMeta('/about'),
  ]);

  return {
    title: pageMeta?.title || (siteSettings?.title ? `${siteSettings.title} - About Us` : 'Togeto - About Us'),
    description: pageMeta?.description || siteSettings?.description,
    keywords: pageMeta?.keywords,
    alternates: pageMeta?.canonicalUrl ? { canonical: pageMeta.canonicalUrl } : undefined,
  };
}

async function getAboutData() {
  const [about, tabs, counters, solutions, team] = await Promise.all([
    fetchFromAPI('/api/about-section'),
    fetchFromAPI('/api/about-tabs'),
    fetchFromAPI('/api/about-counters'),
    fetchFromAPI('/api/about-solutions'),
    fetchFromAPI('/api/team'),
  ]);

  return {
    about: about || null,
    tabs: tabs || [],
    counters: counters || [],
    solutions: solutions || [],
    team: team || [],
  };
}

const AboutPage = async () => {
  const data = await getAboutData();
  return <AboutMain data={data} />;
};
export default AboutPage;
