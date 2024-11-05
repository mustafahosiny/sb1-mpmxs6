import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "طالب يبتكر معرضاً فنياً بالذكاء الاصطناعي",
      excerpt: "كيف استطاع طالب في السادسة عشر من عمره الجمع بين تعلم الآلة والإبداع لعرض الفن الرقمي",
      author: "سارة العمري",
      date: "١٥ مارس ٢٠٢٤",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "فريق الروبوتات يفوز بالبطولة الوطنية",
      excerpt: "رحلة فريق الروبوتات في مدرستنا نحو الفوز في دوري الروبوتات الوطني",
      author: "أحمد الخالدي",
      date: "١٢ مارس ٢٠٢٤",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "إطلاق دورة بايثون للأطفال",
      excerpt: "دورة جديدة: جعل برمجة بايثون ممتعة وسهلة الوصول للمتعلمين الصغار",
      author: "نورة السعيد",
      date: "١٠ مارس ٢٠٢٤",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            آخر الأخبار والإنجازات
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            تابع قصص نجاح طلابنا وآخر مستجدات عالم التقنية
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 w-full relative">
                <img
                  className="w-full h-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 ml-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 ml-1" />
                  <span>{post.author}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-6">
                  <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                    اقرأ المزيد
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}