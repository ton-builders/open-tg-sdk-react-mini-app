// app/page.tsx
"use client";

import React from "react";
import { useTelegram } from "@ton-builders/open-tg-sdk-react";
import Link from "next/link";

export default function Home() {
  const { webApp, isLoading, error } = useTelegram();

  if (isLoading) return <div>Loading Telegram Web App...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-slate-700 p-2 gap-2 m-2">
      <h1 className="bg-gray-500 pt-2">{window && window.location.href}</h1>

      <h1>This is Sub Page</h1>

      <div>User: {webApp?.initDataUnsafe.user?.first_name || "Unknown"}</div>

      <div className="m-5">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={"bg-blue-800 gap-2 p-2 rounded-2xl"}>
          A Back
        </a>
      </div>
      <Link href="/" className={"m-3 bg-blue-800 gap-2 p-2 rounded-2xl"}>
        Link Back
      </Link>
    </main>
  );
}
