import React from 'react';
import { DemoApp } from '../data/defaultApps';
interface AppGridProps {
    isAdminMode?: boolean;
    onEditApp?: (appId: string) => void;
    apps?: DemoApp[];
}
export declare const AppGrid: React.FC<AppGridProps>;
export {};
