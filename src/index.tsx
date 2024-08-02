import ReactDOM from 'react-dom/client';

import { App } from 'app/app';
import { ThemeProvider } from 'app/providers/theme-provider';

import './shared/config/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
