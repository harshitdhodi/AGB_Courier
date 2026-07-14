import { Metadata } from 'next';
import NetworksMain from '@/views/networks/networks';

export const metadata: Metadata = {
  title: 'Togeto - Our Networks Page',
};

const NetworksPage = () => {
  return <NetworksMain />;
};
export default NetworksPage;
