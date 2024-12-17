import React from 'react';
import { useForm } from 'react-hook-form';
import { DietaryPreferences } from './DietaryPreferences';
import { HealthConditions } from './HealthConditions';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center">アカウントを作成</h2>
      
      <Input
        label="お名前"
        type="text"
        {...register('fullName', { required: '名前を入力してください' })}
        error={errors.fullName?.message}
      />
      
      <Input
        label="メールアドレス"
        type="email"
        {...register('email', { 
          required: 'メールアドレスを入力してください',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '有効なメールアドレスを入力してください'
          }
        })}
        error={errors.email?.message}
      />
      
      <Input
        label="パスワード"
        type="password"
        {...register('password', { 
          required: 'パスワードを入力してください',
          minLength: {
            value: 8,
            message: 'パスワードは8文字以上である必要があります'
          }
        })}
        error={errors.password?.message}
      />
      
      <Input
        label="パスワード（確認）"
        type="password"
        {...register('confirmPassword', {
          required: 'パスワードを再入力してください'
        })}
        error={errors.confirmPassword?.message}
      />
      
      <Input
        label="電話番号（任意）"
        type="tel"
        {...register('phone')}
      />
      
      <DietaryPreferences register={register} />
      <HealthConditions register={register} />
      
      <div className="flex items-center">
        <input
          type="checkbox"
          {...register('terms', { required: '利用規約に同意する必要があります' })}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-900">
          <span>利用規約と</span>
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            プライバシーポリシー
          </a>
          <span>に同意します</span>
        </label>
      </div>
      
      <Button type="submit" fullWidth>
        アカウントを作成
      </Button>
    </form>
  );
}