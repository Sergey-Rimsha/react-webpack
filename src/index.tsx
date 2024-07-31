import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "app/providers/theme-provider";
import {App} from "app/app";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
)