// app/TelegramClientProvider.tsx
'use client'; // 标记为客户端组件

// app/layout.tsx 是根布局，默认作为服务器组件运行。
// dynamic(() => import(...), { ssr: false }) 表示仅在客户端加载 TelegramProvider，但在服务器组件中不允许这样做。


import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

// 动态导入 TelegramProvider，仅在客户端运行
const TelegramProvider = dynamic(
    () => import('@ton-builders/open-tg-sdk-react').then((mod) => mod.TelegramProvider),
    { ssr: false } // 在客户端组件中允许
);
export default function TelegramClientProvider({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // 仅在客户端设置
    }, []);

    if (!isMounted) {
        return null; // 服务端渲染时返回空
    }

    return <TelegramProvider>{children}</TelegramProvider>;
}