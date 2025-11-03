import { DemoApp } from '../data/defaultApps';
interface AppStore {
    apps: DemoApp[];
    isLoading: boolean;
    addApp: (app: Omit<DemoApp, 'id'>) => void;
    removeApp: (id: string) => void;
    updateApp: (id: string, updates: Partial<Omit<DemoApp, 'id'>>) => void;
    loadFromStorage: () => void;
    saveToStorage: () => void;
    resetToDefaults: () => void;
}
export declare const useAppStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AppStore>>;
export {};
