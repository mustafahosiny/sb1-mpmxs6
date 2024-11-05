import React from 'react';
import { Play, Code, CheckCircle } from 'lucide-react';

export default function CourseDemo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              جرب منصتنا التعليمية التفاعلية
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              احصل على تجربة مناهجنا التعليمية من خلال هذا الدرس المجاني
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-indigo-600 ml-3" />
                <span className="text-gray-600">تمارين برمجة تفاعلية</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-indigo-600 ml-3" />
                <span className="text-gray-600">تعليقات فورية</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-indigo-600 ml-3" />
                <span className="text-gray-600">التعلم القائم على المشاريع</span>
              </div>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <Play className="h-5 w-5 ml-2" />
                جرب الدرس المجاني
              </button>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 left-0 h-12 bg-gray-800 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="mr-4 text-white text-sm">مقدمة في بايثون</div>
              </div>
              <div className="mt-12 bg-gray-900 p-6">
                <pre className="text-green-400 font-mono text-sm" dir="ltr">
                  <code>{`# برنامجك الأول في بايثون
print("مرحباً، أيها المبرمج المستقبلي!")

# دعنا نصنع لعبة بسيطة
import random

secret_number = random.randint(1, 10)
guess = int(input("خمن الرقم (١-١٠): "))

if guess == secret_number:
    print("أحسنت! 🎉")
else:
    print("حاول مرة أخرى! 🔄")`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}