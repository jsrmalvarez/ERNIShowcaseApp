import { create } from 'zustand';

export interface DemoApp {
  id: string; // uuid or slug
  name: string;
  url: string;
  description?: string;
  icon?: string; // could be emoji or URL
}

interface AppsState {
  apps: DemoApp[];
  addApp: (app: Omit<DemoApp, 'id'>) => void;
  removeApp: (id: string) => void;
  clearAll: () => void;
  loadFromStorage: () => void;
}

const STORAGE_KEY = 'showcase.apps.v1';

const defaultApps: DemoApp[] = [
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

function persist(apps: DemoApp[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  } catch {
    // ignore
  }
}

function readPersisted(): DemoApp[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed.filter(a => a && a.id && a.name && a.url);
  } catch {
    return null;
  }
}

export const useAppsStore = create<AppsState>((set, get) => ({
  apps: defaultApps,
  addApp: (app: Omit<DemoApp, 'id'>) => {
    const id = app.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString(36);
    const newApp: DemoApp = { id, ...app };
    set((state: AppsState) => {
      const apps = [...state.apps, newApp];
      persist(apps);
      return { apps };
    });
  },
  removeApp: (id: string) => {
    set((state: AppsState) => {
      const apps = state.apps.filter((a: DemoApp) => a.id !== id);
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
