type AppRoute = 'MAIN' | 'ARTICLE' | 'NOT_FOUND';

export const Paths: Record<AppRoute, string> = {
  MAIN: '/',
  ARTICLE: '/article',
  NOT_FOUND: '*',
} as const;
