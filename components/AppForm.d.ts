import React from 'react';
import { DemoApp } from '../data/defaultApps';
interface AppFormProps {
    editingApp?: DemoApp | null;
    onCancel?: () => void;
    onSuccess?: () => void;
}
export declare const AppForm: React.FC<AppFormProps>;
export {};
