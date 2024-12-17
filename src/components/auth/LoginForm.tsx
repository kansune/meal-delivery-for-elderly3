import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { SocialLogin } from './SocialLogin';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center">ログイン</h2>
      
      <Input
        label="メールアドレス"
        type="email"
        {...register('email', { required: 'メールアドレスを入力してください' })}
        error={errors.email?.message}
      />
      
      <Input
        label="パスワード"
        type="password"
        {...register('password', { required: 'パスワードを入力してください' })}
        error={errors.password?.message}
      />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('remember')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">
            ログイン情報を保存
          </label>
        </div>
        
        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            パスワードをお忘れですか？
          </a>
        </div>
      </div>
      
      <Button type="submit" fullWidth>
        ログイン
      </Button>
      
      <SocialLogin />
    </form>
  );
}