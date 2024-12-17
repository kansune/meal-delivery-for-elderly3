import React from 'react';
import { Clock, Utensils, Shield, HeadphonesIcon } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '便利な配達',
    description: 'ご自宅まで直接お届け。時間を節約できます。'
  },
  {
    icon: Utensils,
    title: 'カスタマイズ可能な食事プラン',
    description: '食事制限や健康状態に応じた個別対応が可能です。'
  },
  {
    icon: Shield,
    title: '信頼できる提供者',
    description: '品質と安全性が確保された食事を提供する信頼できるパートナー。'
  },
  {
    icon: HeadphonesIcon,
    title: '24時間サポート',
    description: 'お困りの際はいつでもカスタマーサポートがお手伝いします。'
  }
];

export default function Benefits() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            配食ポータルを選ぶ理由
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}