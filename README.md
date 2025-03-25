This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 说明

本项目是为了演示  `@ton-builders/open-tg-sdk-react` 的使用。

```
npm install @ton-builders/open-tg-sdk-react
```

## Usage

由于 SDK 依赖客户端环境，并没有实现 SSR，我们需要动态加载 TelegramProvider，避免在服务器端执行。
dynamic 确保 TelegramProvider 只在客户端加载，避免服务端报错（因为 window 在服务端不可用）。





