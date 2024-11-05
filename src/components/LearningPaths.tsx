import React from 'react';
import { Star, Zap, Trophy } from 'lucide-react';

export default function LearningPaths() {
  const paths = [
    {
      age: "٦-٩ سنوات",
      title: "المستكشفون الصغار",
      icon: Star,
      color: "from-pink-500 to-rose-500",
      description: "مقدمة ممتعة وتفاعلية لأساسيات البرمجة من خلال الألعاب والبرمجة المرئية",
      topics: ["برمجة بالكتل", "روبوتات أساسية", "الحوسبة الإبداعية", "الفن الرقمي"]
    },
    {
      age: "١٠-١٣ سنة",
      title: "مغامرو التقنية",
      icon: Zap,
      color: "from-orange-500 to-amber-500",
      description: "الانتقال من البرمجة المرئية إلى البرمجة النصية مع مشاريع مشوقة",
      topics: ["أساسيات بايثون", "تطوير الويب", "تصميم الألعاب", "مفاهيم الذكاء الاصطناعي"]
    },
    {
      age: "١٤-١٨ سنة",
      title: "مبتكرو المستقبل",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
      description: "برمجة متقدمة وتطوير تطبيقات واقعية",
      topics: ["تطوير الويب الشامل", "تعلم الآلة", "تطبيقات الجوال", "علم البيانات"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="paths">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            مسارات تعليمية لكل عمر
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            مناهج مصممة خصيصاً لمختلف الفئات العمرية ومستويات المهارة
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div key={path.age} className="relative group">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-l ${path.color} opacity-10 group-hover:opacity-15 transition-opacity`} />
                  <div className="relative p-8">
                    <div className="aspect-w-3 aspect-h-2 mb-8">
                      <Icon className="h-12 w-12 text-indigo-600" />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {path.age}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{path.title}</h3>
                    <p className="mt-4 text-gray-600">{path.description}</p>
                    <ul className="mt-6 space-y-3">
                      {path.topics.map((topic) => (
                        <li key={topic} className="flex items-center text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 ml-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      استكشف المسار
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