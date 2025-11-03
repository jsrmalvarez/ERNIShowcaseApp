import { create } from 'zustand';
import { DemoApp } from '../data/defaultApps';
import { defaultApps } from '../data/defaultApps';

interface AppStore {
  // State
  apps: DemoApp[];
  isLoading: boolean;
  
  // Actions
  addApp: (app: Omit<DemoApp, 'id'>) => void;
  removeApp: (id: string) => void;
  updateApp: (id: string, updates: Partial<Omit<DemoApp, 'id'>>) => void;
  loadFromStorage: () => void;
  saveToStorage: () => void;
  resetToDefaults: () => void;
}

// Local storage key
const STORAGE_KEY = 'showcase-apps';

// Generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Load apps from localStorage with fallback to initial apps
const loadAppsFromStorage = (): DemoApp[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Validate that each app has the required structure
        const validApps = parsed.filter(app => 
          app && 
          typeof app === 'object' && 
          typeof app.id === 'string' && 
          typeof app.name === 'string' &&
          Array.isArray(app.tags)
        );
        if (validApps.length > 0) {
          return validApps;
        }
      }
    }
  } catch (error) {
    console.warn('Failed to load apps from localStorage:', error);
    // Clear corrupted data
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (clearError) {
      console.warn('Failed to clear corrupted localStorage:', clearError);
    }
  }
  return [...defaultApps];
};

// Save apps to localStorage
const saveAppsToStorage = (apps: DemoApp[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  } catch (error) {
    console.warn('Failed to save apps to localStorage:', error);
  }
};

export const useAppStore = create<AppStore>((set, get) => ({
  // Initial state
  apps: loadAppsFromStorage(),
  isLoading: false,
  
  // Actions
  addApp: (appData: Omit<DemoApp, 'id'>) => {
    const newApp: DemoApp = {
      ...appData,
      id: generateId(),
    };
    
    set((state: AppStore) => {
      const newApps = [...state.apps, newApp];
      saveAppsToStorage(newApps);
      return { apps: newApps };
    });
  },
  
  removeApp: (id: string) => {
    set((state: AppStore) => {
      const newApps = state.apps.filter((app: DemoApp) => app.id !== id);
      saveAppsToStorage(newApps);
      return { apps: newApps };
    });
  },
  
  updateApp: (id: string, updates: Partial<Omit<DemoApp, 'id'>>) => {
    set((state: AppStore) => {
      const newApps = state.apps.map((app: DemoApp) =>
        app.id === id ? { ...app, ...updates } : app
      );
      saveAppsToStorage(newApps);
      return { apps: newApps };
    });
  },
  
  loadFromStorage: () => {
    set({ isLoading: true });
    try {
      const apps = loadAppsFromStorage();
      set({ apps, isLoading: false });
    } catch (error) {
      console.error('Failed to load apps:', error);
      set({ isLoading: false });
    }
  },
  
  saveToStorage: () => {
    const { apps } = get();
    saveAppsToStorage(apps);
  },
  
  resetToDefaults: () => {
    const resetApps = [...defaultApps];
    set({ apps: resetApps });
    saveAppsToStorage(resetApps);
  },
}));