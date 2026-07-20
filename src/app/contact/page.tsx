import { Metadata } from 'next';
import ContactMain from '@/views/contact/contact';
import { fetchFromAPI, getPageMeta } from '@/utils/api';

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export async function generateMetadata(): Promise<Metadata> {
  const [siteSettings, pageMeta] = await Promise.all([
    fetchFromAPI('/api/settings/site'),
    getPageMeta('/contact'),
  ]);

  return {
    title: pageMeta?.title || (siteSettings?.title ? `${siteSettings.title} - Contact Us` : 'Togeto - Contact Us'),
    description: pageMeta?.description || siteSettings?.description,
    keywords: pageMeta?.keywords,
    alternates: pageMeta?.canonicalUrl ? { canonical: pageMeta.canonicalUrl } : undefined,
  };
}

async function getContactData() {
  const contact = await fetchFromAPI('/api/contact-settings');
  return {
    contact: contact || null,
  };
}

const ContactPage = async () => {
  const data = await getContactData();
  return <ContactMain data={data} />;
};
export default ContactPage;
