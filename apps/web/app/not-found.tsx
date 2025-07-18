'use client';

import ErrorPage from 'components/error-page/error-page';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ErrorPage />
    </div>
  );
}
