// app/page.tsx
'use client'; // 声明为客户端组件

import React from 'react';
import { useTelegram, useThemeParams } from '@ton-builders/open-tg-sdk-react';

export default function Home() {
  const { webApp, isLoading, error } = useTelegram();
  const themeParams = useThemeParams();

  if (isLoading) return <div>Loading Telegram Web App...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
      <main style={{ backgroundColor: themeParams?.bg_color, color: themeParams?.text_color }}>
        <h1>Telegram Mini App with Next.js</h1>

        <p>User: {webApp?.initDataUnsafe.user?.first_name || 'Unknown'}</p>
        <p>Platform: {webApp?.platform}</p>
          <p>BG Color: {themeParams?.bg_color || 'Unknown'}</p>

        <p>  <button onClick={() => webApp?.showAlert('Hello from TG!')}>
          Show TG Alert
        </button></p>

          <p>  <button onClick={() => alert('Hello from Web!')}>
              Show Web Alert
          </button></p>

      </main>
  );
}