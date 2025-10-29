import React from 'react';
import { DemoApp } from '../brand';
interface AppFormProps {
    editingApp?: DemoApp | null;
    onCancel?: () => void;
    onSuccess?: () => void;
}
export declare const AppForm: React.FC<AppFormProps>;
export {};
