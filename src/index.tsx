import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "app/providers/theme-provider";
import {App} from "app/app";

import './shared/config/i18n/i18n'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
)