import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppsStore } from '@store/useAppsStore';
import { AppCard } from './AppCard';
export const AppGrid = () => {
    const apps = useAppsStore(s => s.apps);
    return (_jsxs("div", { className: "app-grid", style: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))'
        }, role: "list", "aria-label": "Showcase applications", children: [apps.map(app => (_jsx(AppCard, { app: app }, app.id))), apps.length === 0 && (_jsx("p", { className: "text-sm text-gray-400 col-span-full", children: "No apps yet. Add some via Admin." }))] }));
};
