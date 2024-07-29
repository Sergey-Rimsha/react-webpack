import ReactDOM from 'react-dom/client';
import {App} from "./app";
import {ThemeProvider} from "./theme/theme-provider";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
)