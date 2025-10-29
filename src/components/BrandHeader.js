import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { brand } from '@brand';
import { Link } from 'react-router-dom';
export const BrandHeader = () => {
    return (_jsxs("header", { className: "bg-white py-6 px-4 flex flex-col gap-3 border-b border-brand-border", style: { fontFamily: 'var(--brand-font)' }, children: [_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx(Link, { to: "/", className: "flex items-center gap-3 group focus:outline-none", children: _jsx("img", { src: "assets/ERNI_logo_color-2048x532.png", alt: "ERNI Logo", className: "h-8 w-auto", style: { minWidth: 32 } }) }), _jsx("nav", { className: "flex items-center gap-3 text-sm", children: _jsx(Link, { to: "/admin", className: "px-5 py-2 rounded-full bg-brand-accent text-white font-semibold shadow-sm hover:bg-brand-accent2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent2", style: { letterSpacing: '0.02em' }, children: "Admin" }) })] }), brand.tagline && (_jsx("p", { className: "text-sm text-brand-fg/80 max-w-prose font-medium", children: brand.tagline }))] }));
};
