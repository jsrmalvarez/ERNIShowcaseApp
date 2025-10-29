import React from 'react';
import { DemoApp } from '../brand';
interface AppCardProps {
    app: DemoApp;
    onEdit?: () => void;
    onDelete?: () => void;
    isAdminMode?: boolean;
}
export declare const AppCard: React.FC<AppCardProps>;
export {};
