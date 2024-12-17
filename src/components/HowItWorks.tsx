import React from 'react';
import { MapPin, Settings, Utensils } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: '場所を入力',
    description: 'お住まいの地域のサービス提供者を検索',
  },
  {
    icon: Settings,
    title: '好みをカスタマイズ',
    description: '食事制限や健康状態に応じて最適なメニューを選択',
  },
  {
    icon: Utensils,
    title: '注文して楽しむ',
    description: 'お食事を選んで配達予約、あとはゆっくり待つだけ',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">ご利用方法</h2>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            今すぐ検索を開始
          </button>
        </div>
      </div>
    </section>
  );
}