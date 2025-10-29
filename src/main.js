import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { injectBrandCSSVariables } from '@brand';
import './index.css';
import App from './App';
injectBrandCSSVariables();
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { basename: "/ERNIShowcaseApp", children: _jsx(App, {}) }) }));
