// app/page.tsx
'use client';

import React from 'react';
import { useTelegram } from '@ton-builders/open-tg-sdk-react';
import Link from "next/link";

export default function Home() {
  const { webApp, isLoading, error } = useTelegram();

  if (isLoading) return <div>Loading Telegram Web App...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
      <main >

          <h1 className="bg-gray-500 pt-2">{window && window.location.href }</h1>

          <h1>This is Sub Page</h1>

        <div>User: {webApp?.initDataUnsafe.user?.first_name || 'Unknown'}</div>
        <div>Platform: {webApp?.platform}</div>

          <div>  <button onClick={() => alert('Hello from Web!')}>
              Show Web Alert
          </button>

          </div>

          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <div><a href="/">A Back</a></div>
          <div><Link href="/">Link Back</Link></div>


      </main>
  );
}