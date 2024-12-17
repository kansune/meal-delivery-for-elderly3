import React from 'react';
import { Button } from '../ui/Button';

export function SocialLogin() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">または</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => console.log('Google login')}
        >
          <img
            className="h-5 w-5 mr-2"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Googleでログイン
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => console.log('Facebook login')}
        >
          <img
            className="h-5 w-5 mr-2"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
            alt="Facebook"
          />
          Facebookでログイン
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => console.log('Apple login')}
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          Appleでログイン
        </Button>
      </div>
    </div>
  );
}