import React from 'react';

interface AuthToggleProps {
  activeTab: 'signup' | 'login';
  onToggle: (tab: 'signup' | 'login') => void;
}

export default function AuthToggle({ activeTab, onToggle }: AuthToggleProps) {
  return (
    <div className="flex rounded-md shadow-sm p-1 bg-gray-100 w-full max-w-xs mx-auto">
      <button
        className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
          activeTab === 'signup'
            ? 'bg-white shadow-sm text-gray-900'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onToggle('signup')}
      >
        新規登録
      </button>
      <button
        className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
          activeTab === 'login'
            ? 'bg-white shadow-sm text-gray-900'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onToggle('login')}
      >
        ログイン
      </button>
    </div>
  );
}