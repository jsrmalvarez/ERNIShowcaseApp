import React, { useState } from 'react';
import { useAppsStore } from '@store/useAppsStore';

const AdminPage: React.FC = () => {
  const { apps, addApp, removeApp, loadFromStorage } = useAppsStore();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) return;
    addApp({ name, url, description, icon });
    setName('');
    setUrl('');
    setDescription('');
    setIcon('');
  };

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold mb-4">Admin: Manage Apps</h2>
      <form className="flex flex-col gap-3 mb-6" onSubmit={handleAdd}>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/4"
            required
          />
          <input
            type="url"
            placeholder="URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
            className="px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/3"
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/3"
          />
          <input
            type="text"
            placeholder="Icon (emoji or URL)"
            value={icon}
            onChange={e => setIcon(e.target.value)}
            className="px-3 py-2 rounded bg-brand-subtle text-brand-fg w-1/6"
          />
        </div>
        <button
          type="submit"
          className="self-start px-4 py-2 rounded bg-brand-accent text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          Add App
        </button>
      </form>
      <ul className="flex flex-col gap-2">
        {apps.map(app => (
          <li key={app.id} className="flex items-center gap-3 bg-brand-subtle rounded px-3 py-2">
            <span className="text-lg" title={app.name}>{app.icon}</span>
            <span className="font-medium">{app.name}</span>
            <span className="text-xs text-gray-400">{app.url}</span>
            <button
              onClick={() => removeApp(app.id)}
              className="ml-auto px-2 py-1 rounded bg-red-600 text-white text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label={`Remove ${app.name}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminPage;
