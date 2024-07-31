
type AppRoute = 'MAIN' | 'ABOUT';

export const Paths: Record<AppRoute, string> = {
    MAIN: '/',
    ABOUT: '/about'
} as const;