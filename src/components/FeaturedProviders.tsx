import React from 'react';
import { Star } from 'lucide-react';

const providers = [
  {
    name: 'ヘルシーライフ',
    description: '管理栄養士監修の健康的な食事',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'まごころ弁当',
    description: '手作りにこだわった温かい食事',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'やさしい食卓',
    description: '食べやすい介護食専門',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function FeaturedProviders() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          おすすめの配食サービス
        </h2>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full relative">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                <p className="mt-2 text-gray-600">{provider.description}</p>
                <div className="mt-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-sm text-gray-600">{provider.rating}</span>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  メニューを見る
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
            すべての提供者を見る
          </button>
        </div>
      </div>
    </section>
  );
}