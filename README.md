## Next News - A web application built on Next.js

Next News is a website made with Next.js that shows news about technology, business, sports, and memes.

## Getting Started

To run the application, clone the repository to your local machine and run the following commands:

`npm install`

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Note about RealTime Data

Next News uses NewsAPI to fetch news data in realtime. However, NewsAPI only allows requests from localhost. Therefore, the deployed version of the application does not use realtime data from NewsAPI. Instead, we have provided a Python scraper that scrapes news data and saves it as a JSON file. The deployed version of the application uses this JSON file to display news data. If you want to use realtime data from NewsAPI, you can clone the repository and uncomment the relevant code that fetches data from the NewsAPI endpoint.

## Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NewsAPI](https://newsapi.org/)
- [Python](https://www.python.org/)
