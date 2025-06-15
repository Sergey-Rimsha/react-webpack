import ReactDOM from 'react-dom/client';

import { App } from 'app/app';
import { ThemeProvider } from 'app/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
