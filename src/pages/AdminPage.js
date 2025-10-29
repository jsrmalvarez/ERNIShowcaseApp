import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAppsStore } from '@store/useAppsStore';
const AdminPage = () => {
    const { apps, addApp, removeApp, loadFromStorage } = useAppsStore();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const handleAdd = (e) => {
        e.preventDefault();
        if (!name || !url)
            return;
        addApp({ name, url, description, icon });
        setName('');
        setUrl('');
        setDescription('');
        setIcon('');
    };
    return (_jsxs("section", { className: "py-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Admin: Manage Apps" }), _jsxs("form", { className: "flex flex-col gap-3 mb-6", onSubmit: handleAdd, children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", placeholder: "Name", value: name, onChange: e => setName(e.target.value), className: "px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/4", required: true }), _jsx("input", { type: "url", placeholder: "URL", value: url, onChange: e => setUrl(e.target.value), className: "px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/3", required: true }), _jsx("input", { type: "text", placeholder: "Description", value: description, onChange: e => setDescription(e.target.value), className: "px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/3" }), _jsx("input", { type: "text", placeholder: "Icon (emoji or URL)", value: icon, onChange: e => setIcon(e.target.value), className: "px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/6" })] }), _jsx("button", { type: "submit", className: "self-start px-4 py-2 rounded bg-brand-accent text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-brand-accent", children: "Add App" })] }), _jsx("ul", { className: "flex flex-col gap-2", children: apps.map(app => (_jsxs("li", { className: "flex items-center gap-3 bg-brand-subtle rounded px-3 py-2", children: [_jsx("span", { className: "text-lg", title: app.name, children: app.icon }), _jsx("span", { className: "font-medium", children: app.name }), _jsx("span", { className: "text-xs text-gray-400", children: app.url }), _jsx("button", { onClick: () => removeApp(app.id), className: "ml-auto px-2 py-1 rounded bg-red-600 text-white text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400", "aria-label": `Remove ${app.name}`, children: "Remove" })] }, app.id))) })] }));
};
export default AdminPage;
