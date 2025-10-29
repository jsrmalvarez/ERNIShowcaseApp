import { create } from 'zustand';
const STORAGE_KEY = 'showcase.apps.v1';
const defaultApps = [
    {
        id: 'react-docs',
        name: 'React Docs',
        url: 'https://react.dev',
        description: 'Official React documentation',
        icon: '⚛️'
    },
    {
        id: 'vite',
        name: 'Vite',
        url: 'https://vitejs.dev',
        description: 'Vite tooling',
        icon: '⚡'
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com',
        description: 'Utility-first CSS framework',
        icon: '🌬️'
    }
];
function persist(apps) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
    }
    catch {
        // ignore
    }
}
function readPersisted() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed))
            return null;
        return parsed.filter(a => a && a.id && a.name && a.url);
    }
    catch {
        return null;
    }
}
export const useAppsStore = create((set, get) => ({
    apps: defaultApps,
    addApp: (app) => {
        const id = app.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString(36);
        const newApp = { id, ...app };
        set((state) => {
            const apps = [...state.apps, newApp];
            persist(apps);
            return { apps };
        });
    },
    removeApp: (id) => {
        set((state) => {
            const apps = state.apps.filter((a) => a.id !== id);
            persist(apps);
            return { apps };
        });
    },
    clearAll: () => set(() => ({ apps: [] })),
    loadFromStorage: () => {
        const stored = readPersisted();
        if (stored) {
            set({ apps: stored });
        }
    }
}));
