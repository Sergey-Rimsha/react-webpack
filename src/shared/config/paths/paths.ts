
type AppRoute = 'MAIN' | 'ARTICLE';

export const Paths: Record<AppRoute, string> = {
    MAIN: '/',
    ARTICLE: '/article'
} as const;