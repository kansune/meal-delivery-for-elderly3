import React from 'react';
import { Home, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuthHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            配食ポータル
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-gray-600" />
              <select className="ml-1 text-sm text-gray-600 border-none bg-transparent focus:ring-0">
                <option>日本語</option>
                <option>English</option>
              </select>
            </div>
            
            <Link 
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
            >
              <Home className="h-4 w-4 mr-2" />
              ホーム
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}