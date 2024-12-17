import React from 'react';
import { UseFormRegister } from 'react-hook-form';

const preferences = [
  { id: 'gluten-free', label: 'グルテンフリー' },
  { id: 'low-sodium', label: '減塩' },
  { id: 'vegetarian', label: 'ベジタリアン' },
  { id: 'halal', label: 'ハラール' }
];

interface DietaryPreferencesProps {
  register: UseFormRegister<any>;
}

export function DietaryPreferences({ register }: DietaryPreferencesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">食事の制限（任意）</h3>
      <div className="grid grid-cols-2 gap-4">
        {preferences.map(({ id, label }) => (
          <div key={id} className="flex items-center">
            <input
              type="checkbox"
              id={id}
              {...register(`dietary.${id}`)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}