import React from 'react';
import { Code2, Bot, Gamepad2, Brain } from 'lucide-react';

export default function Offerings() {
  const offerings = [
    {
      icon: Code2,
      title: "أساسيات البرمجة",
      description: "تعلم أساسيات البرمجة من خلال المشاريع العملية والدروس التفاعلية",
      features: ["بايثون", "جافاسكريبت", "سكراتش", "حل المشكلات"]
    },
    {
      icon: Brain,
      title: "الذكاء الاصطناعي وتعلم الآلة",
      description: "استكشف عالم الذكاء الاصطناعي المذهل وتطبيقاته",
      features: ["الشبكات العصبية", "رؤية الحاسب", "معالجة اللغات", "تحليل البيانات"]
    },
    {
      icon: Bot,
      title: "مختبر الروبوتات",
      description: "بناء وبرمجة الروبوتات مع تعلم مبادئ الهندسة",
      features: ["بناء الروبوتات", "برمجة المستشعرات", "الأتمتة", "الطباعة ثلاثية الأبعاد"]
    },
    {
      icon: Gamepad2,
      title: "تطوير الألعاب",
      description: "إنشاء ألعاب مثيرة أثناء تعلم مفاهيم البرمجة",
      features: ["يونيتي", "بايجيم", "تصميم الألعاب", "الرسوم المتحركة"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            برامجنا الأساسية
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            دورات شاملة مصممة لإلهام وتعليم الجيل القادم من قادة التكنولوجيا
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <div key={offering.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="mr-4 text-xl font-semibold text-gray-900">{offering.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{offering.description}</p>
                  <div className="mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      {offering.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-indigo-600" />
                          </div>
                          <p className="mr-2 text-sm text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      اعرف المزيد
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}