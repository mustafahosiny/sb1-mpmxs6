import React from 'react';
import { Rocket, Brain, GamepadIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-l from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">أطلق العنان</span>
              <span className="block text-indigo-200">لإبداع طفلك التقني</span>
            </h1>
            <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              تمكين الجيل القادم من خلال تعلم البرمجة والذكاء الاصطناعي والروبوتات بطريقة ممتعة ومناسبة للعمر
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-right">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition-colors">
                ابدأ التعلم اليوم
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=800"
                  alt="طفل سعودي يتعلم البرمجة"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <Rocket className="h-8 w-8 text-indigo-200" />
            <h3 className="mt-4 text-xl font-semibold text-white">مهارات المستقبل</h3>
            <p className="mt-2 text-indigo-100">الاستعداد لفرص الغد مع تعليم تقني متطور</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <Brain className="h-8 w-8 text-indigo-200" />
            <h3 className="mt-4 text-xl font-semibold text-white">الذكاء الاصطناعي</h3>
            <p className="mt-2 text-indigo-100">تعلم أساسيات الذكاء الاصطناعي وتطبيقاته</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <GamepadIcon className="h-8 w-8 text-indigo-200" />
            <h3 className="mt-4 text-xl font-semibold text-white">تطوير الألعاب</h3>
            <p className="mt-2 text-indigo-100">إنشاء ألعابك الخاصة أثناء تعلم مفاهيم البرمجة</p>
          </div>
        </div>
      </div>
    </div>
  );
}