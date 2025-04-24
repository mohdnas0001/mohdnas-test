import DashboardPage from '../../components/pages/dashboard';
import Loading from '../../components/ui/loading';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardPage />
    </Suspense>
  );
};

export default Page;
