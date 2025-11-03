import React, { useState, useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import { DemoApp } from '../brand';

interface AppFormProps {
  editingApp?: DemoApp | null;
  onCancel?: () => void;
  onSuccess?: () => void;
}

export const AppForm: React.FC<AppFormProps> = ({ 
  editingApp, 
  onCancel, 
  onSuccess 
}) => {
  const { addApp, updateApp } = useAppStore();
  
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    icon: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data when editingApp changes
  useEffect(() => {
    if (editingApp) {
      setFormData({
        name: editingApp.name || '',
        url: editingApp.url || '',
        description: editingApp.description || '',
        icon: editingApp.icon || '',
      });
    } else {
      // Reset form when not editing
      setFormData({
        name: '',
        url: '',
        description: '',
        icon: '',
      });
    }
    // Clear any existing errors when switching apps
    setErrors({});
  }, [editingApp]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'App name is required';
    }
    
    if (!formData.url.trim()) {
      newErrors.url = 'URL is required';
    } else {
      try {
        new URL(formData.url);
      } catch {
        newErrors.url = 'Please enter a valid URL';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const appData = {
        name: formData.name.trim(),
        url: formData.url.trim(),
        description: formData.description.trim() || undefined,
        icon: formData.icon.trim() || undefined,
      };
      
      if (editingApp) {
        updateApp(editingApp.id, appData);
      } else {
        addApp(appData);
      }
      
      // Reset form if adding new app
      if (!editingApp) {
        setFormData({
          name: '',
          url: '',
          description: '',
          icon: '',
        });
      }
      
      onSuccess?.();
    } catch (error) {
      console.error('Failed to save app:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {editingApp ? 'Edit Application' : 'Add New Application'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* App Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            App Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`
              w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
              ${errors.name ? 'border-red-500' : 'border-gray-300'}
            `}
            placeholder="e.g., React Dashboard"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* URL */}
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
            URL *
          </label>
          <input
            type="url"
            id="url"
            value={formData.url}
            onChange={(e) => handleChange('url', e.target.value)}
            className={`
              w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
              ${errors.url ? 'border-red-500' : 'border-gray-300'}
            `}
            placeholder="https://example.com"
            required
          />
          {errors.url && (
            <p className="text-red-500 text-sm mt-1">{errors.url}</p>
          )}
        </div>

        {/* Icon */}
        <div>
          <label htmlFor="icon" className="block text-sm font-medium text-gray-700 mb-2">
            Icon (Emoji)
          </label>
          <input
            type="text"
            id="icon"
            value={formData.icon}
            onChange={(e) => handleChange('icon', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="📊"
            maxLength={2}
          />
          <p className="text-gray-500 text-sm mt-1">
            Use an emoji to represent your app
          </p>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Brief description of the application..."
          />
        </div>
      </div>

      {/* Form actions */}
      <div className="flex gap-3 mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            px-4 py-2 bg-primary text-white rounded-lg font-medium
            hover:bg-primary/90 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">⏳</span>
              {editingApp ? 'Updating...' : 'Adding...'}
            </>
          ) : (
            <>
              <span className="mr-2">{editingApp ? '💾' : '➕'}</span>
              {editingApp ? 'Update App' : 'Add App'}
            </>
          )}
        </button>
        
        {(editingApp || onCancel) && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};