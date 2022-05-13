import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'typescript-next-cloudflare-pages',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
});