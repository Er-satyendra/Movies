import React, { ReactNode, Suspense } from 'react';
import Loader from '../../components/Shared/Loader';

const useLazyLoadRoute = (importFunc: () => Promise<{ default: React.ComponentType<any> }>) => {
  const LazyComponent = React.lazy(importFunc);

  const renderLazyRoute = (element: ReactNode) => (
    <Suspense fallback={<Loader alwaysTrue={true}/>}>
      {element}
    </Suspense>
  );

  return renderLazyRoute(<LazyComponent />);
};

export default useLazyLoadRoute;
