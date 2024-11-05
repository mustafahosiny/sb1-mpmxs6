import React from 'react';
import { Quote } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: "أحمد خالد، ١٥ سنة",
      achievement: "طور تطبيقاً للتدوير باستخدام الذكاء الاصطناعي",
      image: "https://images.unsplash.com/photo-1609171712489-45b6ba7051a4?auto=format&fit=crop&q=80&w=200",
      quote: "ساعدتني دورة الذكاء الاصطناعي في فهم كيفية استخدام تعلم الآلة لحل المشكلات الواقعية"
    },
    {
      name: "سارة عبدالله، ١٢ سنة",
      achievement: "فازت بالمركز الأول في مسابقة الروبوتات للناشئين",
      image: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?auto=format&fit=crop&q=80&w=200",
      quote: "لم أكن أتخيل أنني سأتمكن من بناء روبوت بنفسي. الآن أقوم بتعليم الأطفال الآخرين كيفية القيام بذلك!"
    },
    {
      name: "محمد أحمد، ١٧ سنة",
      achievement: "أطلق لعبة تعليمية حققت أكثر من ١٠ آلاف تحميل",
      image: "https://images.unsplash.com/photo-1612277635895-20ab7f5c4d69?auto=format&fit=crop&q=80&w=200",
      quote: "منحني مسار تطوير الألعاب جميع المهارات التي احتجتها لتحويل أفكاري إلى واقع"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            قصص نجاح طلابنا
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            شاهد كيف يحدث طلابنا تأثيراً في عالم التكنولوجيا
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <div key={story.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={story.image}
                  alt={story.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-xl font-semibold text-white">{story.name}</h3>
                  <p className="text-indigo-200">{story.achievement}</p>
                </div>
              </div>
              <div className="p-6">
                <Quote className="h-8 w-8 text-indigo-600 mb-4" />
                <p className="text-gray-600">{story.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}