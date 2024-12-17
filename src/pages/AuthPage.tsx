import React, { useState } from 'react';
import AuthHeader from '../components/auth/AuthHeader';
import AuthToggle from '../components/auth/AuthToggle';
import SignUpForm from '../components/auth/SignUpForm';
import LoginForm from '../components/auth/LoginForm';
import Footer from '../components/Footer';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'signup' | 'login'>('signup');

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      
      <main className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <AuthToggle activeTab={activeTab} onToggle={setActiveTab} />
        
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {activeTab === 'signup' ? <SignUpForm /> : <LoginForm />}
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          {activeTab === 'signup' ? (
            <p>
              すでにアカウントをお持ちですか？{' '}
              <button
                onClick={() => setActiveTab('login')}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                ログイン
              </button>
            </p>
          ) : (
            <p>
              アカウントをお持ちでないですか？{' '}
              <button
                onClick={() => setActiveTab('signup')}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                新規登録
              </button>
            </p>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}