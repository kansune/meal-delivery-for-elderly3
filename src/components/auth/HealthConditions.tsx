import React from 'react';
import { UseFormRegister } from 'react-hook-form';

const conditions = [
  { id: 'diabetes', label: '糖尿病' },
  { id: 'hypertension', label: '高血圧' },
  { id: 'heart-disease', label: '心臓病' },
  { id: 'allergies', label: 'アレルギー' }
];

interface HealthConditionsProps {
  register: UseFormRegister<any>;
}

export function HealthConditions({ register }: HealthConditionsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">健康状態（任意）</h3>
      <div className="grid grid-cols-2 gap-4">
        {conditions.map(({ id, label }) => (
          <div key={id} className="flex items-center">
            <input
              type="checkbox"
              id={id}
              {...register(`health.${id}`)}
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