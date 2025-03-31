"use client";

import React from "react";
import { useTelegram, useThemeParams } from "@ton-builders/open-tg-sdk-react";
import Link from "next/link";

export default function Home() {
  const { webApp, isLoading, error } = useTelegram();
  const themeParams = useThemeParams();

  if (isLoading) return <div>Loading Telegram Web App...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <h2 className="bg-gray-500 pt-2">{window.location.href}</h2>
      <h1>Telegram Mini App with Next.js</h1>
      <div>User: {webApp?.initDataUnsafe.user?.first_name || "Unknown"}</div>
      <div>Platform: {webApp?.platform}</div>
      <div>BG Color: {themeParams?.bg_color || "Unknown"}</div>

      <div className="m-3">
        <button
          className="bg-gray-800 gap-2 p-2 rounded-xl"
          onClick={() => webApp?.showAlert("Hello from TG!")}
        >
          Show TG Alert
        </button>
      </div>

      <div>
        <button
          className="bg-gray-800 gap-2 p-2 rounded-xl"
          onClick={() => alert("Hello from Web!")}
        >
          Show Web Alert
        </button>
      </div>

      <div className="m-5">
        <a href="/subpage" className="bg-blue-800 gap-2 p-2 rounded-xl">
          A go to sub page
        </a>
      </div>
      <div>
        <Link href="/subpage" className="bg-blue-800 gap-2 p-2 rounded-xl">
          Link go to sub page
        </Link>
      </div>
    </main>
  );
}
