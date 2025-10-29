import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { BrandHeader } from '@components/BrandHeader';
import { AppGrid } from '@components/AppGrid';
import AdminPage from './pages/AdminPage';
const App = () => {
    return (_jsx("div", { className: "min-h-screen flex flex-col bg-brand-bg text-brand-fg", children: _jsxs("div", { className: "max-w-5xl mx-auto w-full px-4", children: [_jsx(BrandHeader, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(AppGrid, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminPage, {}) })] })] }) }));
};
export default App;
