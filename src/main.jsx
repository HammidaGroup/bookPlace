
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ExploreContextProvider from './context/ExploreContext.jsx';
import MenuConditionalStateProvider from './context/menuLogicContext.jsx';
import SearchValContextProvider from './context/searchValContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ExploreContextProvider>
            <MenuConditionalStateProvider>
                <SearchValContextProvider>
                    <App />
                </SearchValContextProvider>
            </MenuConditionalStateProvider>
        </ExploreContextProvider>
    </BrowserRouter>
);
