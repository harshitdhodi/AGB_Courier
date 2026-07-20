import { Metadata } from 'next';
import NetworksMain from '@/views/networks/networks';
import { fetchFromAPI, getPageMeta } from '@/utils/api';

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export async function generateMetadata(): Promise<Metadata> {
  const [siteSettings, pageMeta] = await Promise.all([
    fetchFromAPI('/api/settings/site'),
    getPageMeta('/networks'),
  ]);

  return {
    title: pageMeta?.title || (siteSettings?.title ? `${siteSettings.title} - Our Networks` : 'Togeto - Our Networks'),
    description: pageMeta?.description || siteSettings?.description,
    keywords: pageMeta?.keywords,
    alternates: pageMeta?.canonicalUrl ? { canonical: pageMeta.canonicalUrl } : undefined,
  };
}

async function getNetworksData() {
  const networks = await fetchFromAPI('/api/networks');
  return {
    networks: networks || [],
  };
}

const NetworksPage = async () => {
  const data = await getNetworksData();
  return <NetworksMain data={data} />;
};
export default NetworksPage;
