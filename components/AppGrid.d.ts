import React from 'react';
interface AppGridProps {
    isAdminMode?: boolean;
    onEditApp?: (appId: string) => void;
}
export declare const AppGrid: React.FC<AppGridProps>;
export {};
