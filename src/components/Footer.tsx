import React from 'react';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">配食ポータル</h3>
            <p className="text-gray-300 text-sm">
              高齢者の方々の食生活をサポートし、
              ご家族の安心をお届けします。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">会社概要</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">プライバシーポリシー</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">利用規約</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">お問い合わせ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">ニュースレター</h3>
            <div className="mt-4">
              <form className="flex">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 配食ポータル. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}